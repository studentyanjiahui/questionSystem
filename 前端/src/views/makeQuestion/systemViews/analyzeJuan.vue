<script setup>
    import {useQuestionStore} from "@/stores/allQuestion";
    import router from "@/router";

    const questionStore = useQuestionStore();
    const Qtitle = questionStore.nowTitle;

    function backHomeView(){
      router.replace('/homeView');
      questionStore.analyzes=[];
    }

    function backStep(){
      history.back();
      questionStore.analyzes=[];
    }
</script>

<template>
  <main>
   <van-nav-bar :title="Qtitle" @click-left="backStep" left-arrow left-text="返回"></van-nav-bar>
   <view class="table-box" v-if="questionStore.analyzes.length>0">
    <van-row  justify="center">
      <van-col span="4" class="th">题目编号</van-col>
      <van-col span="4" class="th">选项</van-col>
      <van-col span="4" class="th">选择人数</van-col>
      <van-col span="8" class="th">选择者昵称</van-col>
    </van-row>
    <div v-for="content in questionStore.analyzes" :key="content.num">
        <van-row justify="center">
          <van-col span="4" class="td">{{content.num}}</van-col>
          <van-col span="4" class="td">{{content.answer}}</van-col>
          <van-col span="4" class="td">{{content.writer.length}}</van-col>
          <van-col span="8" class="td"><p v-for="oneWriter in content.writer" :key="oneWriter">{{oneWriter}}&thinsp;</p></van-col>
        </van-row>
    </div>
   </view>
   <view v-else>
       <div style="text-align: center;font-family: 楷体,serif;font-size: larger">
          该问卷为空问卷，无法进行填写与查看，请及时删除，避免内存占用。
       </div>
   </view>
   <van-button @click="backHomeView">返回首页</van-button>
  <router-view></router-view>
</main>
</template>

<style scoped>
.table-box{
  margin: 12px 0px;
  .th{
    height: 20px;
    text-align: center;
    background:#0affff
  }
  .td{
    background:#fffff0;
    text-align: center;
    width: auto;
  }
}
</style>