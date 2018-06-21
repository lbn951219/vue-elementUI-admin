/**
 * Created by Administrator on 2018/6/5.
 */
import Mock from 'mockjs'


//验证账号密码
let uTable = {
  'password' : 'admin',
  'username' : 'admin',
  'token'    : 'abcde12345'
}
const data = Mock.mock('http://user.com/login',(param)=>{
  let dataJson = JSON.parse(param.body)
  if((dataJson.username === uTable.username) && (dataJson.password === uTable.password)){
    let result = {
      state:'ok',
      token:uTable.token
    }
    return result
  }else{
    let result = {
      state:'no',
      token:uTable.token,
    }
    return result
  }
})
export default {
  data
}
