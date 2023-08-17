<template>
  <div>
    <van-nav-bar title="简易问卷调查系统"
                 left-text="退出"
                 @click-left="onClickLeft"
                 right-text="返回登录"
                 @click-right="onClickRight">
    </van-nav-bar>
    <router-view></router-view>
    <van-form @submit="submitRegister" v-model="registerForm">
          <van-field v-model="registerForm.name"
                     name="用户名"
                     label="注册用户名"
                     placeholder="请输入注册所用的用户名"
          ></van-field>
          <van-field v-model="registerForm.password"
                     type="password"
                     name="密码"
                     label="注册密码"
                     placeholder="请输入注册所用的密码"
          ></van-field>
          <van-field v-model="registerForm.confirmPswd"
                     type="password"
                     name="确认密码"
                     label="确认注册密码"
                     placeholder="请确认您输入的密码"
          ></van-field>
          <van-field v-model="registerForm.phone"
                     name="手机"
                     label="验证手机号"
          ></van-field>
      <div style="margin: 16px;">
        <van-button size="normal" type="primary" native-type="submit">
          提交
        </van-button>
        <van-button size="normal" type="default" native-type="reset">
          内容重置
        </van-button>
      </div>
    </van-form>
  </div>


</template>

<script>
import {showToast} from "vant";
import axios from "axios";
export default {
  name: "Register",
  methods:{
    onClickLeft(){
      history.back()
    },
    onClickRight(){
      this.$router.push("/")
    },
    submitRegister(){
      const phoneYan= /^1[0-9]{10}$/;
      const nameYan=/^([a-zA-Z~_-][a-z0-9A-Z@-_~]*)|([U4e00-u9fa5]+[a-z0-9A-Z@-_~]*)$/;
      const pswdYan = /^([0-9a-zA-Z_-].*)$/;
      if(this.registerForm.name==''){
        showToast({
          message:'请输入用户名',
          forbidClick:false,
          position:'bottom'
        })
        return false;
      }else if(!nameYan.test(this.registerForm.name)){
        showToast({
          message:'输入的用户名不符合规范',
          forbidClick:false,
          position:'bottom'
        })
        return false;
      }else if(this.registerForm.password == ''){
        showToast({
          message:'请输入新账户的密码',
          forbidClick:false,
          position:'bottom'
        })
        return false;
      }else if(this.registerForm.password !== this.registerForm.confirmPswd){
        showToast({
          message:'请输入用户名',
          forbidClick:false,
          position:'bottom'
        })
        return false;
      }else if(!pswdYan.test(this.registerForm.password)){
        showToast({
          message:'请输入用户名',
          forbidClick:false,
          position:'bottom'
        })
        return false;
      }else if(this.registerForm.phone == ''){
        showToast({
          message:'请输入注册所用手机号',
          forbidClick:false,
          position:'bottom'
        })
        return false;
      }else if(!phoneYan.test(this.registerForm.phone)){
        showToast({
          message:'输入的手机号不符合规格',
          forbidClick:false,
          position:'bottom'
        })
        return false;
      }
      const  registerProForm={
            name:'',
            password:''
          };
      registerProForm.name=this.registerForm.name
      registerProForm.password=this.registerForm.password
      this.$http.post('address/register',registerProForm).then(res=>{
        showToast({
          message:'注册成功，请登录',
          forbidClick:false,
          position:'bottom'
        })
         this.$router.push("/")
         return true;
      }).catch(error =>{
        showToast({message:'用户名已存在或网络错误，请稍后再试',
          icon:'like-o',
          forbidClick:false,
          position:'bottom'})
        location.reload()
      })
    }
  },
  setup(){
    return{
       registerForm:{
         name:'',
         password:'',
         confirmPswd:'',
         phone:'',
       },
    }
  }
}
</script>

<style scoped>

</style>