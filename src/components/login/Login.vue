<template>
  <div id="login-box">
      <div class="msg">{{msg}}</div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
  import loginApi from '@/api/loginApi';
  export default {
    name: 'Login',
    data () {
      return {
        form:{
          username:"admin",
          password:"123456"
        },
        userToken:"",
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed:{
    },
    created(){

    },
    methods:{
      async onSubmit() {
        const _this = this;
        let promise = loginApi.login(this.form);
        promise.then( function(res) {
          if(res){
            console.log("-------------------");
            if(res.status!=='error'){
              _this.$router.push({name:'home',params:res.msg});
            }
          }
        }).catch(function (error){
          // error==上面的error
        })
      }
    },
    beforeDestroy(){

    }
  }
</script>
<style>
  .msg {
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 4px;
    color: #31708f;
    background-color: #d9edf7;
    border: 1px solid #bce8f1;
  }
  #login-box {
    width: 300px;
    padding: 20px;
    margin: 100px auto;
    background: #fff;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border: 1px solid #000;
  }

</style>
