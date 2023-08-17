import {defineStore} from "pinia";
import axios from "axios";
import {showFailToast, Toast} from "vant";

export const useNewStore = defineStore('new',{
    state:()=>{
        return{
            quesList:[], /*所有问题的存储*/
            juanDesc:{title:'',description:''}, /*问卷标题与*/
            id:'',
        }
    },
    getters:{
    },
    actions:{
        initQues(){
            this.quesList=[];
            this.juanDesc = {};
        },
        async createNewQues(title,desc){
            this.juanDesc.title = title;
            this.juanDesc.description = desc;
            axios.post('/naires/insert',this.juanDesc).then(res =>{
                console.log(res.data)
                this.id=res.data.data.id;
                return res.data.msg;
            }).catch(err =>{
                showFailToast({
                    message:'创建失败，请检察网络状态并重试',
                    forbidClick:false,
                });
                return err;
            })
        },
        addQues(types){
            const num0 = this.quesList.length + 1;
            if(this.quesList.length>=300){
                console.log("超出最大问题数");
                return false
            }else {
              if(types===0 || types===1)
                this.quesList.push({
                    id: this.id,
                    num: num0,
                    question: '',
                    type: types,
                    option1: '',
                    option2: null,
                    option3: null,
                    option4: null,
                    option5: null,
                    answer: null
                })
              else  this.quesList.push({
                  id: this.id,
                  num: num0,
                  question: '',
                  type: types,
                  option1: null,
                  option2: null,
                  option3: null,
                  option4: null,
                  option5: null,
                  answer: null
              })
                return true
            }
        },
        delQues(index){
            this.quesList.splice(index,1);
            for(let i=index;i<this.quesList.length;i++){
                this.quesList[i].num --;
            }
        },
       async submitQuesList(){
           axios.post('naires/createNew',this.quesList).then(res => {
               console.log("新增成功")
               console.log(res.data)
           }).catch(err =>{
               console.log(err);
           })
       }

    }
})