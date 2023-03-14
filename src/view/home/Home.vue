<template>
  <div class="home_background">
    <el-container class="el_container">


      <el-header style="display: flex;  align-items:center; justify-content: flex-end; background-color: #4099ef">
        <el-row class="demo-avatar" >
          <el-col style="text-align: right">
            <el-avatar  :size="50" :src="circleUrl"></el-avatar>
          </el-col>
        </el-row>

        <el-row class="demo-avatar" style="margin-left: 10px;">
          <el-col style="text-align: right">
            <p style="color: #f5f5fd">用户名</p>
          </el-col>
        </el-row>
      </el-header>
      <p style="float: start;position: absolute;color: #f5f5fd;margin-left: 100px " >天行智能小车管理系统</p>
      <el-image class="home_log" :src="require('@/assets/logo.png')"></el-image>

      <!--      -->
      <el-container>
        <el-aside :width="aside_width">
          <div class="toggle-button" @click="handleIsCollapse">
            <i v-if="isCollapse"class="el-icon-s-unfold"></i>
            <i v-if="!isCollapse"class="el-icon-s-fold"></i>
          </div>
          <el-menu router :default-active="activePath" class="el-menu-vertical-demo" :collpase="isCollapse" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item
                  index="/home/test"
                  @click="saveActiveNav('/test')">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <!--        -->
          <el-footer style="margin-left: 11px;display: flex ;justify-content: center;flex-direction: column">
            <el-breadcrumb  separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/home/to' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>活动管理</el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
          </el-footer>
          <!--主体        -->
          <el-main style="margin-top: -19px">
            <index>
              {{$staConf.URL}}
            </index>
          </el-main>

        </el-container>
      </el-container>
    </el-container>

  </div>


</template>

<script>
import iii from '../../assets/img/wallhaven-zygeko.jpg'
import Index from "@/view/index/index.vue";
export default {
  name: "Home",
  components: {Index},
  data(){
    return {
      background_image:require('@/assets/img/wallhaven-zygeko.jpg'),
      isCollapse: true,
      activePath:'',
      editPasswordDialog:false,
      editPasswordFrom:{},
      editPasswordRole:{},
      aside_width:'',
      circleUrl:iii,

    }
  },
  mounted() {
  },
  methods:{
    handleIsCollapse(){
      this.isCollapse = !this.isCollapse
      if (this.isCollapse){
        this.aside_width='65px'
      }else {
        this.aside_width='200px'
      }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    saveActiveNav(activePath){
      //sessionStorage.setItem("acticePath",activePath);
      this.activePath = activePath
    },
  },
  created() {
    this.activePath = sessionStorage.getItem("activePath")? sessionStorage.getItem("activePath") :"/index";

  }
}
</script>

<style scoped lang="scss">

.toggle-button{
  background-color: #f5f5fd;
  font-size: 18px;
  line-height: 24px;
  color: aliceblue;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
  color: black;
}
html,body,#Home,.el_container{
  padding: 0;
  margin: 0;
  height: 100vh;
}
/*.home_background{
  width: 100%;
  height: 100%;
  background-image: url("../../assets/img/wallhaven-zygeko.jpg");
  position: absolute;
  left: 0;
  top: 0;
  background-size: 100% 100%;
}*/
.home_log{
  width: 50px;
  height: 50px;
  margin-top: 6px;
  margin-left: 15px;
  float: start;
  position: absolute;
}
</style>
