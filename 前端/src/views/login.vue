<template>
  <div>
   <van-nav-bar title="简易问卷调查系统"
                left-text="退出"
                @click-left="onClickLeft"
                right-text="注册账户"
                @click-right="onClickRight">
   </van-nav-bar>
    <router-view></router-view>
    <van-form @submit="onSubmit1" >
      <van-cell-group inset>
        <van-field v-model="username"
                   name="用户名"
                   label="用户名"
                   placeholder="请输入用户名"
                   :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field v-model="password"
                   type="password"
                   name="密码"
                   label="账户密码"
                   placeholder="请输入密码"
                   :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
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
import {ref} from "vue";
import {useLoginStore} from "@/stores/loginStore";
export default {
  name: "login",
  setup(){
    return{
       username:ref(''),
       password:ref(''),
    }
  },
  methods:{
    onClickLeft(){
      history.back()
    },
    onClickRight(){
      this.$router.push('/Register')
    },
    onSubmit1(){
       const nameYan=/^([a-zA-Z~_-][a-z0-9A-Z@-_~]*)|([U4e00-u9fa5]+[a-z0-9A-Z@-_~]*)$/;
       let username = this.username
      let password = this.password;
      const pswdYan = /^([0-9a-zA-Z_-]*)$/;
      if(!pswdYan.test(password)){
        showToast({
          message:'输入的密码格式错误',
          forbidClick:false,
          icon:'like-o',
          wordBreak: 'break-word',
          position:'bottom'
        });
        return false;
      }else if(!nameYan.test(username)){
        showToast({
          message:'输入的用户名不符合标准',
          forbidClick:false,
          position:'bottom'
        });
        return false;
      }
      this.$http.post('/address/login',{
      name: this.username,
      password: this.password,
    }).then(res =>{
             let name1 = res.data.data.name;
             showToast({message:'尊敬的用户'+name1.toString()+',欢迎登陆',
                 forbidClick:false,
                 icon:'like-o',
                 position:'bottom'})
             useLoginStore().setLogin(this.username)
             console.log(res.data)
             this.$router.push("homeView")
           }).catch(error=>{
             showToast({message:'用户名不存在或密码错误',
               icon:'like-o',
               position:'bottom'})
             console.log(error.date)
           })
    }
  }
}
</script>

<style scoped>

</style>