<template>
  <div>
   <van-form >
     <van-cell-group inset>
      <van-field v-model="title"
                 name="问卷标题" label="问卷标题" placeholder="请输入问卷标题"
                 :rules="[{ required: true, message: '请填写标题' }]"
      />
     <van-field v-model="description"
                 name="问卷描述" label="问卷描述" placeholder="请输入问卷描述"/>
     </van-cell-group>
     <van-button size="normal" type="primary" @click="onSubmit1()">
       确认创建
     </van-button>
     <van-button size="normal" type="default" @click="cancel">
      取消创建
     </van-button>
    </van-form>
    <router-view></router-view>
  </div>
</template>

<script>
import {ref} from 'vue';
import {useNewStore} from "@/stores/createNew";
import {showFailToast, showSuccessToast, showToast} from "vant";
export default {
  name: "createQuestion",
  setup(){
    return{
      title:ref(''),
      description:ref(''),
    }
  },
  methods: {
    onSubmit1() {
      useNewStore().initQues();
      useNewStore().createNewQues(this.title, this.description).then(res => {
        showSuccessToast({
          message: '创建成功，请添加内容',
          forbidClick: false,
        })
        this.$router.push('/homeView/CreateQuesView');
      }).catch(err =>{
        console.log(err);
      });
    },
    cancel() {
      this.$router.replace('/homeView')
    }
  }
}
</script>

<style scoped>

</style>