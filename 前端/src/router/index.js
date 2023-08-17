import {createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name:'default',
        redirect:'/login',
    },
    {
        path:'/Register',
        name:'Register',
        component: () => import('../views/makeQuestion/Register.vue'),
    },
    {
        path:'/login',
        name:'login',
        component: () => import('../views/login.vue')
    },
    {
        path:'/homeView',
        name: 'homeView',
        component: () => import('../views/makeQuestion/systemViews/homeView.vue'),
        children:[
         {
             path:'/homeView/AllQuestion',
             name:'AllQuestion',
             component: () => import('../views/makeQuestion/systemViews/AllQuestion.vue'),
         },
         {
           path: '/homeView/CreateQuesView',
           name: 'CreateQuesView',
           component: () => import('../views/makeQuestion/systemViews/CreateNew.vue'),
             meta:{requiresAuth:true}
         },
         {
             path: '/homeView/CreateQues',
             name: 'createQues',
             component: () => import('../views/makeQuestion/systemViews/createQuestion.vue'),
             meta:{requiresAuth:true}
         },
         {
             path: '/homeView/seeQues',
             name: 'seeQues',
             component: () => import('../views/makeQuestion/systemViews/seeQues.vue'),
         },
         {
             path: '/homeView/analyzeJuan',
             name: 'analyzeJuan',
             component: ()=>import('../views/makeQuestion/systemViews/analyzeJuan.vue'),
             meta:{requiresAuth:true}
         }
         ]
    },
];

const router =  createRouter({
    history: createWebHashHistory(),
    routes
})




export default router