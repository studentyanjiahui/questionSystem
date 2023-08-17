import {showToast, Toast} from "vant";
import axios from "axios";
import {defineStore} from "pinia";

export const useQuestionStore = defineStore('question',{
    state:() =>{
        return{
           questionList: [],
           oneQuestions: [],
           nowTitle:'',
           analyzes:[]
        }
    },
    actions:{
        async getAllQues(){
            axios.get('/naires/getAll').then(res =>{
                this.questionList = res.data.data;
                console.log('questionList为');
                console.log(this.questionList.length)
            }).catch(err =>{
                console.log(err)
            })
        },
        async getOneQues(quesId){
            axios.get('/naires/getOne/'+quesId).then(res =>{
                if(res.data.data!=null){
                    this.oneQuestions = res.data.data;
                    for(let question of this.oneQuestions){
                      if(question.type === 1) {
                          question.answer = [];
                      }else {
                          question.answer = '';
                      }
                    }
                }else{
                    this.oneQuestions = [];
                }
            }).catch(err =>{
                Toast.error("请求出错");
                console.log(err);
            })
        },
        async getAnalyzes(id){
            axios.get('/naires/analyze/'+id).then(res =>{
                  if(res.data.data!=null){
                      const sumList = res.data.data;
                      let nowNum = sumList[0].num;
                      let xuan =sumList[0].answer
                      let xuanWriter = [];
                      let len = 0;
                      for(let quesSum of sumList){
                          len++;
                          if(quesSum.num === nowNum){
                               if(xuan === quesSum.answer){
                                   xuanWriter.push(quesSum.writer);
                               }else{
                                  this.analyzes.push({
                                      num:nowNum,
                                      answer:xuan,
                                      writer:xuanWriter
                                  });
                                  xuan=quesSum.answer;
                                  xuanWriter = [];
                                  xuanWriter.push(quesSum.writer);
                               }
                          }else{
                              this.analyzes.push({
                                  num:nowNum,
                                  answer:xuan,
                                  writer:xuanWriter
                              });
                              nowNum = quesSum.num;
                              xuanWriter = [];
                              xuan = quesSum.answer;
                              xuanWriter.push(quesSum.writer);
                          }
                          if(len === sumList.length){
                              this.analyzes.push({
                                  num:nowNum,
                                  answer:xuan,
                                  writer:xuanWriter
                              });
                          }
                      }
                  }
            }).catch(err=>{
                console.log(err);
                this.analyzes = [];
            })
        }
    },
})

