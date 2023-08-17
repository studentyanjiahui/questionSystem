<template>
  <main>
   <div>
    <van-nav-bar title="简易问卷调查系统"></van-nav-bar>
    <router-view></router-view>
    <van-cell title="对新建问卷进行修改，当前问卷编号：">{{newStore.id}}</van-cell>
    <van-form>
      <div v-for="(content,index) in newStore.quesList" :key="content.num">
        <div v-if="content.type===0">
         <van-field type="text" label="单选题" placeholder="请输入问题" v-model="content.question"/>
         <div v-if="content.option1!==null">
          <van-swipe-cell>
            <van-field type="text" label="A选项" placeholder="请输入A选项的值" :readonly="disableSelect[index].option1" v-model="content.option1"/>
            <template #right class="right">
              <van-button class="item2" @click="disableSelect[index].option1=true">确定</van-button>
            </template>
          </van-swipe-cell>
         </div>
          <div v-if="content.option2!==null">
            <van-swipe-cell>
              <van-field type="text" label="B选项" placeholder="请输入B选项的值" :readonly="disableSelect[index].option2" v-model="content.option2"/>
              <template #right class="right">
                <van-button class="item1" @click="deleteValue2(index)">删除</van-button>
                <van-button class="item2" @click="disableSelect[index].option2=true">确定</van-button>
              </template>
            </van-swipe-cell>
          </div>
          <div v-if="content.option3!==null">
            <van-swipe-cell>
              <van-field type="text" label="C选项" placeholder="请输入C选项的值" :readonly="disableSelect[index].option3" v-model="content.option3"/>
              <template #right class="right">
                <van-button class="item1" @click="deleteValue3(index)">删除</van-button>
                <van-button class="item2" @click="disableSelect[index].option3=true">确定</van-button>
              </template>
            </van-swipe-cell>
          </div>
          <div v-if="content.option4!==null">
            <van-swipe-cell>
              <van-field type="text" label="D选项" placeholder="请输入D选项的值" :readonly="disableSelect[index].option4" v-model="content.option4"/>
              <template #right class="right">
                <van-button class="item1" @click="deleteValue4(index)">删除</van-button>
                <van-button class="item2" @click="disableSelect[index].option4=true">确定</van-button>
              </template>
            </van-swipe-cell>
          </div>
          <div v-if="content.option5!==null">
            <van-swipe-cell>
             <van-field type="text" label="E选项" placeholder="请输入E选项的值" :readonly="disableSelect[index].option5" v-model="content.option5"/>
             <template #right class="right">
                <van-button class="item1" @click="deleteValue5(index)">删除</van-button>
                <van-button class="item2" @click="disableSelect[index].option5=true">确定</van-button>
             </template>
          </van-swipe-cell>
         </div>
          <van-space size="2rem">
            <van-button @click="processAddOption(index)" type="primary">继续添加选项</van-button>
            <van-button @click="delTi(index)" class="van-row--align-center" type="primary">删除本题</van-button>
          </van-space>
        </div>
      <div v-else-if="content.type===1">
        <van-field type="text" label="多选题" placeholder="请输入问题" v-model="content.question"></van-field>
        <div v-if="content.option1!==null">
          <van-swipe-cell>
            <van-field type="text" label="A选项" placeholder="请输入A选项的值" :readonly="disableSelect[index].option1" v-model="content.option1"/>
            <template #right class="right">
              <van-button class="item2" @click="disableSelect[index].option1=true">确定</van-button>
            </template>
          </van-swipe-cell>
        </div>
        <div v-if="content.option2!==null">
          <van-swipe-cell>
            <van-field type="text" label="B选项" placeholder="请输入B选项的值" :readonly="disableSelect[index].option2" v-model="content.option2"/>
            <template #right class="right">
              <van-button class="item1" @click="deleteValue2(index)">删除</van-button>
              <van-button class="item2" @click="disableSelect[index].option2=true">确定</van-button>
            </template>
          </van-swipe-cell>
        </div>
        <div v-if="content.option3!==null">
          <van-swipe-cell>
            <van-field type="text" label="C选项" placeholder="请输入C选项的值" :readonly="disableSelect[index].option3" v-model="content.option3"/>
            <template #right class="right">
              <van-button class="item1" @click="deleteValue3(index)">删除</van-button>
              <van-button class="item2" @click="disableSelect[index].option3=true">确定</van-button>
            </template>
          </van-swipe-cell>
        </div>
        <div v-if="content.option4!==null">
          <van-swipe-cell>
            <van-field type="text" label="D选项" placeholder="请输入D选项的值" :readonly="disableSelect[index].option4" v-model="content.option4"/>
            <template #right class="right">
              <van-button class="item1" @click="deleteValue4(index)">删除</van-button>
              <van-button class="item2" @click="disableSelect[index].option4=true">确定</van-button>
            </template>
          </van-swipe-cell>
        </div>
        <div v-if="content.option5!==null">
          <van-swipe-cell>
            <van-field type="text" label="E选项" placeholder="请输入E选项的值" :readonly="disableSelect[index].option5" v-model="content.option5"/>
            <template #right class="right">
              <van-button class="item1" @click="deleteValue5(index)">删除</van-button>
              <van-button class="item2" @click="disableSelect[index].option5=true">确定</van-button>
            </template>
          </van-swipe-cell>
        </div>
        <van-space size="2rem">
         <van-button @click="processAddOption(index)" type="primary">继续添加选项</van-button>
         <van-button @click="delTi(index)" class="van-row--align-center" type="primary">删除本题</van-button>
        </van-space>
      </div>
      <div v-else-if="content.type===2">
        <van-field type="text" label="简答题" placeholder="请输入题目" v-model="content.question"></van-field>
        <van-field type="textarea" placeholder="请输入您的回答" :disabled="true"></van-field>
        <van-button @click="delTi(index)" class="van-row--align-center" type="primary">删除本题</van-button>
      </div>
    </div>
      <van-dropdown-menu class="toCenter">
        <van-dropdown-item v-model="oneSelect" :options="option1"></van-dropdown-item>
        <van-button @click="addTi">确认添加</van-button>
      </van-dropdown-menu>
      <van-button type="primary" navie-type="submit" @click="onSubmit1">提交问卷</van-button>
    </van-form>
  </div>
    <router-view></router-view>
  </main>
</template>

<script setup>
import {ref} from "vue";
import {useNewStore} from "@/stores/createNew";
import {showFailToast, showSuccessToast} from "vant";
import axios from "axios";
import router from "@/router";
import {useQuestionStore} from "@/stores/allQuestion";

const newStore = useNewStore();
const option1 = [
      { text: '单选题', value: 0 },
      { text: '多选题', value: 1 },
      { text: '简答题', value: 2 },
    ]

const oneSelect=ref(0);
let disableSelect = [];
for(let i=0;i<300;i++){
  disableSelect.push({option1:false,option2:false,option3:false,option4:false,option5:false});
}

function addTi(){
  const types = oneSelect.value;
  newStore.addQues(types);
}

function processAddOption(index){
     if(newStore.quesList[index].option2===null){
       newStore.quesList[index].option2 = '';
     }else if(newStore.quesList[index].option3===null){
       newStore.quesList[index].option3 = '';
     }else if(newStore.quesList[index].option4===null){
       newStore.quesList[index].option4 = '';
     }else if(newStore.quesList[index].option5===null){
       newStore.quesList[index].option5 = '';
     }else{
         confirm('已达选项个数上限，不能再添加选项了')
     }
}

function delTi(index){
   newStore.delQues(index);
}
function deleteValue2(index){
  newStore.quesList[index].option2=null;
}

function deleteValue3(index){
  newStore.quesList[index].option3=null;
}

function deleteValue4(index){
  newStore.quesList[index].option4=null;
}

function deleteValue5(index){
  newStore.quesList[index].option5=null;
}

function onSubmit1(){
   axios.post('naires/createNew',newStore.quesList).then(res=>{
     console.log(res.data);
     showSuccessToast({
       message:'问卷添加成功，请返回查看',
       forbidClick:false
     });
     useQuestionStore().getAllQues();
     router.replace('AllQuestion')
   }).catch(err =>{
     console.log(err);
     showFailToast({
       message:'问卷添加失败，请检查网络',
       forbidClick:true
     })
   })
}

</script>

<style scoped>
.toCenter{
   text-align: center;
   width:70%;
   border: 1px solid #0000a0;
}

.right{
  background:antiquewhite;
  height: inherit;
  display: flex;
  text-align: center;
  font-family: 楷体,serif;
}

.item1{
   font-color:red;
   width:60px
}

.item2{
   font-color:green;
   width: 60px;
}
</style>