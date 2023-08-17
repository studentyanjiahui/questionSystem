<template>
  <main>
    <van-action-bar safe-area-inset-bottom>
      <van-space size="2rem">
       <van-action-bar-icon icon="bars" text="问卷总览"  @click="seeAll"/>
       <van-action-bar-icon icon="add-o" text="新建问卷" @click="createNew" />
       <van-action-bar-icon icon="fire-o" text="退出登录" @click="logout" />
      </van-space>
    </van-action-bar>
   <div v-show="isShow">
    <van-nav-bar title="简易问卷调查系统"></van-nav-bar>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>界面较为简单，请见谅</van-swipe-item>
        <van-swipe-item>点击底部动作栏执行操作</van-swipe-item>
        <van-swipe-item>退出后将回到登录页</van-swipe-item>
        <van-swipe-item>新建问卷必须填写名称</van-swipe-item>
    </van-swipe>
   </div>
   <router-view></router-view>
  </main>
</template>

<script>
import {useQuestionStore} from "@/stores/allQuestion";
import {useLoginStore} from "@/stores/loginStore";
import {showFailToast} from "vant";

export default {
  name: "homeView",
  setup(){
    const questionStore = useQuestionStore();
    questionStore.getAllQues();
    return{
      isShow:true,
      description:'',
      title:''
    }
  },
  methods:{
    seeAll(){
      this.isShow=false;
      this.$router.push('/homeView/AllQuestion')
    },
    createNew(){
      this.isShow=false
      this.$router.push('/homeView/CreateQues')
    },
    logout(){
      if(useLoginStore().isLogin===true) {
        this.$router.replace({name: 'login'})
        useLoginStore().logout();
      }else{
        showFailToast({
          message:'您尚未登录，只能使用本系统的部分功能，如果可以请您尽快登录',
          forbidClick:true
        })
      }
    },
  }
}
</script>


<style scoped>
.my-swipe {
  color: #fff;
  font-size: 20px;
  text-align: center;
  background-color: #39a9ed;
  line-height: 120px;
}
</style>