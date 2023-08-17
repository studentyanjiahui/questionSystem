<script setup>
 import {useQuestionStore} from "@/stores/allQuestion";
 import axios from "axios";
 import {ref} from "vue";
 import {showFailToast, showSuccessToast, showToast} from "vant";
   const questionStore = useQuestionStore();
   const writers = ref('');
  function buildData(){
     const answers = [];
     for(let question of questionStore.oneQuestions)
     {
        if(question.answer ===''){
          return false;
        }else if(!question.answer.length)
          return false;
        let answerContent=question.answer;
        if(answerContent instanceof Array){
          answerContent = answerContent.reduce((s, c) => `${s},${c}`)
        }else{
          answerContent = String(answerContent);
        }
        answers.push({
            id:question.id,
            num:question.num,
            answer:answerContent,
            writer:writers.value,
        })
     }
     return answers
  }

  function arrowBack(){
    window.history.back();
  }
  function submitQues(){
      const answerCon = buildData();
      if(writers.value===''){
        showFailToast({
          message:'请填写填写人的编号或昵称'
        })
        return false;
      }
      if(answerCon===false) {
        showFailToast({
          message:'请选择选项，否则不能提交'
        })
        return false;}
      axios.post('/naires/answerAdd',answerCon).then(res => {
           console.log(res.data.data);
           showSuccessToast({
              message:'已完成填写，谢谢您的帮助',
              forbidClick:true
           })
      }).catch(err=>{
         console.log(err);
         showToast({
           message:'请检查网络，请求发送失败',
           forbidClick:true
         })
      })
  }
</script>

<template>
  <div>
   <van-nav-bar :title="questionStore.nowTitle" left-text="返回" left-arrow @click-left="arrowBack"
   ></van-nav-bar>
    <van-form>
      <van-field label="填写者编号" placeholder="请填写自身编号（昵称也可）" v-model="writers"></van-field>
     <div  v-for="content in questionStore.oneQuestions" :key="content.num">
      <p v-if="content.type===0">
        <p>问题{{content.num}}(单选):{{content.question}} </p>
        <van-radio-group :rule="{required:true,message:'请选择'}"
           v-model="content.answer">
          <p v-if="content.option1!==null">
            <van-radio :name="A">{{content.option1}}</van-radio>
          </p>
          <p v-if="content.option2!==null">
            <van-radio name="B">{{content.option2}}</van-radio>
          </p>
          <p v-if="content.option3!==null">
            <van-radio name="C">{{content.option3}}</van-radio>
          </p>
          <p v-if="content.option4!==null">
            <van-radio name="D">{{content.option4}}</van-radio>
          </p>
          <p v-if="content.option5!==null">
            <van-radio name="E">{{content.option5}}</van-radio>
          </p>
        </van-radio-group>
      </p>
      <p v-else-if="content.type===1">
        <p>问题{{content.num}}(多选):{{content.question}} </p>
        <van-checkbox-group :rule="{required:true,message:'至少选一个'}"
          v-model="content.answer">
          <p v-if="content.option1!==null">
            <van-checkbox name="A">{{content.option1}}</van-checkbox>
          </p>
          <p v-if="content.option2!==null">
            <van-checkbox name="B">{{content.option2}}</van-checkbox>
          </p>
          <p v-if="content.option3!==null">
            <van-checkbox name="C">{{content.option3}}</van-checkbox>
          </p>
          <p v-if="content.option4!==null">
            <van-checkbox name="D">{{content.option4}}</van-checkbox>
          </p>
          <p v-if="content.option5!==null">
            <van-checkbox name="E">{{content.option5}}</van-checkbox>
          </p>
        </van-checkbox-group>
      </p>
      <p v-else-if="content.type===2">
        <p>问题{{content.num}}(简答):{{content.question}} </p>
        <van-field label="答：" v-model="content.answer" type="textarea" placeholder="请答题"></van-field>
      </p>
     </div>
     <van-button @click="submitQues"  type="primary">提交</van-button>
   </van-form>
   <router-view></router-view>
  </div>
</template>

<style scoped>

</style>