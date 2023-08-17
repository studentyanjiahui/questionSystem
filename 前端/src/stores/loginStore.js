import {defineStore} from "pinia";

export const useLoginStore = defineStore('login',{
    state: ()=>{
        return {
            isLogin:false,
            loginUser:''
        }
    },
    getters:{
    },
    actions:{
        setLogin(loginName){
            this.isLogin=true;
            this.loginUser = loginName
        },
        judgeLogin(){
            return this.isLogin;
        },
        logout(){
            this.isLogin=false;
            this.loginUser = '';
        }
    }
})