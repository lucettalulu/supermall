import Vue from 'vue'
import Router from 'vue-router'
const Home =() =>import('../views/home/Home')
const Category =() =>import('../views/category/Category')
const Cart =() =>import('../views/cart/Cart')
const Profile =() =>import('../views/profile/Profile')
Vue.use(Router)
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  }
]
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//防止一下重复定向同一个路径报错
const originalReplace = Router.prototype.replace
Router.prototype.replace = function replace(location) {
   return originalReplace.call(this, location).catch(err => err)
}