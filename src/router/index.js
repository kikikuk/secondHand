import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('views/home/Home')
const Publish = () => import('views/publish/Publish')
// const Message = () => import('views/message/Message')
const Profile = () => import('views/profile/Profile')
// 商品详情界面
const Detail = () => import('views/detail/Detail')
// 商品列表界面
const CommodityList = () => import('views/commodityList/CommodityList')
// 登录界面
const Login = () => import('views/login/Login')
// 设置界面
const Setting = () => import('views/setting/Setting')
const Ok = () => import('views/ok/Ok')

const routes = [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/publish',
      component: Publish
    },
    // {
    //   path: '/message',
    //   component: Message
    // },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/detail',
      component: Detail
    },{
      path: '/commodityList',
      component: CommodityList
    },{
      path: '/setting',
      component: Setting
    },{
      path: '/ok',
      component: Ok
    }
  ]
  
  const router = new VueRouter({
    mode: 'history',
    routes
  })
  
  export default router
  