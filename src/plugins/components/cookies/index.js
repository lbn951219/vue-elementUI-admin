/**
 * Created by Administrator on 2018/6/21.
 */
//设置cookie
const setCookie = (c_key,c_val,exdays)=>{
  let exdate = new Date();
  //时间戳之间相互转换
  exdate.setTime(exdate.getTime() + 24*60*60*1000*exdays)
  //字符串拼接cookie
  window.document.cookie = c_key+"="+c_val+";path/;expires="+exdate.toGMTString()
}
//获取cookie
const getCookie = (c_key)=>{
  //从cookie中获取键名为c_key的键值对的值，然后通过正则匹配判断是否输入了合法的字符,然后通过if找到dom对象中的cookie下面的match函数，返回一个数组，我们接收他，如果有问题就返回空null，这个需要传的参数就是所需要的键值对的键名
  let arr,reg=new RegExp("(^| )"+c_key+"=([^;]*)(;|$)");
  if(arr = document.cookie.match(reg)){
    return unescape(arr[2])
  }else{
    return null
  }
}
//删除cookie、
const delCookie = (c_key)=>{
  let exp=new Date();
  //时间戳来回转化
  exp.setTime(exp.getTime()-1);
  //调用前面自己创建的getCookie函数获取
  let cval = getCookie(name);
  if(cval!=null){
    document.cookie = name+"="+cval+";expires="+exp.toGMTString();
  }
}
//对外暴露的方法
export default {
  setCookie,
  getCookie,
  delCookie
}
