<template>
  <el-container>
    <el-header style="height:100px;text-align: left; font-size: 24px">
        一禅的朋友
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-row class="tac">
          <el-col :span="24">
            <h2 style="text-align:center">菜单列表</h2>
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                  <el-menu-item index="1-3">选项3</el-menu-item>
                  <el-menu-item index="1-4">选项4</el-menu-item>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>导航二</span>
                </template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-menu-item index="2-4">选项4</el-menu-item>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-document"></i>
                  <span>导航三</span>
                </template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
                <el-menu-item index="3-3">选项3</el-menu-item>
                <el-menu-item index="3-4">选项4</el-menu-item>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-setting"></i>
                  <span>导航四</span>
                </template>
                <el-menu-item index="4-1">选项1</el-menu-item>
                <el-menu-item index="4-2">选项2</el-menu-item>
                <el-menu-item index="4-3">选项3</el-menu-item>
                <el-menu-item index="4-4">选项4</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
  <style>
    .el-header {
      background-color: #0099ff;
      color: #333;
      line-height: 100px;
    }
    .el-aside {
      color: #333;
    }
  </style>


<script>
  import homeApi from '@/api/homeApi';
  export default {
    name:'home',
    data () {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(15).fill(item)
      }
    },
    computed:{
    },
    created(){
      // this.msg = this.$route.params;
      this.getAllMenutTree();
    },
    methods:{
      async getAllMenutTree(){
        const _this = this;
        let promise = homeApi.getMenutTree();
        console.log(promise)
        promise.then(function (res) {
          console.log(res);
        }).catch(function (err) {
          console.log(err);
        })
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    beforeDestroy(){

    }
  }
</script>
