/**
 * Created by Administrator on 2018/6/21.
 */
//引入我们刚才写好的插件
import Cookies from "./components/cookies"
export default {
  install(Vue,options){
    Vue.prototype.$Cookies = Cookies
  }
}
//install的含义是当我们在main.js中使用Vue.use()方法时，会默认调用install方法，并且会返回两个值：Vue实例，可选的option参数。这一步完成后，我们在main.js中注册。
