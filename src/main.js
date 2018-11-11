// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import VueResource from 'vue-resource'
Vue.use(VueResource)


// 导入格式化时间的插件
// import moment from 'moment'
//定义全局过滤器
Vue.filter('dateFormat' , function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
    // moment()//直接调用是当前时间
    // return moment(dateStr).format(pattern))//调用是这样子的{{item.time|dateFormat('YYYY-MM-DD')}}
})

// 按需导入Mint-UI中的组件
import {Header , Swipe , SwipeItem , Button} from 'mint-ui'
import 'mint-ui/lib/Header/style.css'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
import 'mint-ui/lib/Swipe/style.css'
import 'mint-ui/lib/Button/style.css'

//导入MUI的样式
import './lib/mui-master/dist/css/mui.min.css' 
import './lib/mui-master/examples/hello-mui/css/icons-extra.css'



Vue.config.productionTip = false

/* eslint-disable no-new */
var vm=new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',

})
console.log("ok") 