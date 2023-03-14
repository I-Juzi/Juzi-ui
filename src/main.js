// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入 ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//图标库
import 'font-awesome/css/font-awesome.min.css'
//引入 echarts
import * as echarts from 'echarts'
//挂载
Vue.prototype.$echarts = echarts
//注册全局容器
import basicContainer from '@/view/index/index.vue'
Vue.component('basicContainer',basicContainer)
import staConf from '@/js/enum'
Vue.prototype.$staConf = staConf;

//引入axios
import axios from 'axios'
Vue.prototype.$axios = axios
//配置接口请求前缀地址
axios.defaults.baseURL = '/juzi-ui'
//拦截请求，设置全局token
axios.interceptors.request.use(function (config) {
   let token = sessionStorage.getItem('token')
   if (token){
     config.headers['token'] = token
   }
   return config
})













Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
