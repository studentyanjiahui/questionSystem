<template>
  <main>
    <van-nav-bar title="问卷总览"  right-text="新建问卷"
                 @click-right="this.$router.push('/homeView/CreateQues');">
    </van-nav-bar>
  <div v-if="questions.length===0">当前暂无问卷</div>
  <div v-else>
   <p v-for="content in questions" :key="content.id">
     <van-card style="margin-bottom:10px" :title="content.title"
       :desc="content.description">
       <template #tags>
         <van-tag plain type="primary">问卷编号为{{content.id}}</van-tag>
       </template>
       <template #footer>
         <van-button size="mini" @click="delRecord(content.id,content.title)">
          删除问卷</van-button>
         <van-button size="mini" @click="WriteQues(content.id,content.title)">
           填写问卷</van-button>
         <van-button size="mini" @click="checkResult(content.id,content.title)">
          查看问卷调查结果</van-button>
       </template>
     </van-card>
   </p>
  </div>
  <router-view></router-view>
  </main>
</template>

<script setup>
import {showConfirmDialog, showFailToast, showToast} from "vant";
import  {useQuestionStore}  from "@/stores/allQuestion.js"
import {useLoginStore} from "@/stores/loginStore";
import router from "@/router";


const questionStore = useQuestionStore();
console.log(questionStore.questionList);
let questions = questionStore.questionList;

function  checkResult(id, title) {
      if(useLoginStore().isLogin===false){
        showFailToast({
          message:'该操作需要登录',
          forbidClick:true
        })
        this.$router.push('/login')
      }
      else {
        this.questionStore.getAnalyzes(id);
        this.questionStore.nowTitle = title;
        this.$router.push('analyzeJuan');
      }
    }
function WriteQues(id, title) {
      questionStore.getOneQues(id);
      questionStore.nowTitle = title;
      router.push('seeQues');
    }
function delRecord(conId, title) {
      if(useLoginStore().isLogin===false){
        showFailToast({
          message:'该操作需要登录',
          forbidClick:true
        })
        router.push('/login');
      } else{
        showConfirmDialog({title:'提示',message:'您确认删除该问卷吗'})
          .then(() => {
        this.$http.post('/naires/del', {id: conId, title: title}).then(res => {
          showToast({
            message: '操作成功',
            forbidClick: false
          })
          console.log(res.data);
          window.location.reload()
        }).catch(err => {
          console.log(err);})
      }).catch(()=>{
        showToast({
          message:'已取消',
          forbidClick:false})
      });
      }
}


</script>

<style scoped>

</style>