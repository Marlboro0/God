// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 按需导入Mint-UI中的组件
import {Header} from 'mint-ui'
import 'mint-ui/lib/Header/style.css'
Vue.component(Header.name,Header)

//导入MUI的样式
import './lib/mui-master/sass/mui.scss' 




Vue.config.productionTip = false

/* eslint-disable no-new */
var vm=new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',

})
console.log("ok") 