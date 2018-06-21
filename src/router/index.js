import Vue from 'vue'//引入vue
import Router from 'vue-router'//引入路由
import HelloWorld from '../components/HelloWorld.vue'//引入helloWorld组件
import Login from '../pages/user/Login.vue'
import $Cookies from '@/plugins/components/cookies'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      beforeEnter:(to,from,next)=>{
        //beforeEnter钩子函数有三个参数，to 即将进入的目标，from当前导航正要离开的路由，next进入管道中的下一个钩子，一定要调用该方法来resolve这个钩子，next({path:'/login'})就是把我们要跳转的路由重定向到我们指定的路由。不使用this.$Cookies的原因是因为当钩子执行前，组件的实例还没被创建。this当前只是一个野指针,所以这时候我们只能把插件引入之后再调用
        console.log($Cookies.getCookie('mytoken'))
        if($Cookies.getCookie('mytoken')){
          next()
        }else{
          next({path:'/login'})
        }
      }
    },
      {
        path:'/login',//路由路径
        name:'Login',//路由名称
        component:Login//引入的组件
      }
  ]
})
