import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '@/components/tabbar/HomeContainer.vue'
import MemberContainer from '@/components/tabbar/MemberContainer.vue'
import SearchContainer from '@/components/tabbar/SearchContainer.vue'
import ShopcarContainer from '@/components/tabbar/ShopcarContainer.vue'
import NewsList from '@/components/news/NewsList.vue'
import NewsInfo from '@/components/news/NewsInfo.vue'

Vue.use(Router)



// 创建路由对象并暴露出去
export default new Router({
  routes: [
    { path:'/' , redirect:'/home'},
    { path:'/home' , component:HomeContainer},
    { path:'/member' , component:MemberContainer},
    { path:'/shopcar' , component:ShopcarContainer},
    { path:'/search' , component:SearchContainer},
    { path:'/home/newslist' , component:NewsList},
    { path:'/home/newsinfo:id', component:NewsInfo}
  ],
  linkActiveClass:'mui-active'//覆盖默认的路由高亮的类，默认的类叫做router-link-active
})
