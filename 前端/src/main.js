import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {Notify} from 'vant'
import 'vant/lib/index.css';
import  { Lazyload } from 'vant';
import router from './router';
import axios from 'axios';
import { Toast } from "vant";
import pinia from '@/stores';
import {useLoginStore} from "@/stores/loginStore";
import {showDialog} from "vant";

const app=createApp(App).use(Notify).use(pinia).use(Lazyload).use(showDialog)

axios.defaults.baseURL='http://localhost:9000/';

axios.interceptors.response.use((response) => {
    switch (response.status) {
        case 200:
            return response
        case 404:
            return false
        case 500:
            Toast.error('服务器异常')
            return false
        default:
            Toast.error(response.data.message)
            return false
    }
})

const loginStore = useLoginStore();

router.beforeEach((to,from,next) =>{
    if(to.meta.requiresAuth===true){
        if(loginStore.judgeLogin()===true){
            next();
        }else{
            next({
                path:'/',
                query:{message:'请先登录'}
            })
        }
    }else{
        next();
    }
})

app.config.globalProperties.$http = axios

app.use(router).mount('#app')




