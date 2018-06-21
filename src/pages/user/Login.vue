<template>
  <div class="login_page">
    <section class="form_contianer">
      <div class="manage_tip">
        <p>暴走一号</p>
      </div>
      <el-form>
        <el-form-item prop="username">
          <el-input placeholder="用户名" v-model="uname"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="密码" v-model="pwd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="submit_btn" @click="login">登陆</el-button>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>
<script>
  import {Message} from 'element-ui'
  export default{
        data(){
            return{
                uname:'',
                pwd:'',
            }
        },
        methods:{
            login:function () {
                let this_ = this;
                console.log(this.uname,this.pwd)
                this.$http({
                  method:'get',
                  url:'http://user.com/login',
                  data:{
                      username:this.uname,
                      password:this.pwd
                  }
                })
                  .then((res)=>{
                    console.log(res.data)
                    if(res.data.state == 'ok'){
                        this_.$message.success("登录成功")
                        this_.$Cookies.setCookie("mytoken",res.data.token)
                      console.log(this_.$Cookies.getCookie("mytoken"))
                        this_.$router.push({path:'/'})
                    } else{
                        this_.$message.error("账号或密码输入错误，请重新填写")
                    }
                  })
            },
            success:function () {
              alert("成功")
            }


        },
      mounted:function () {
      },
      created:function () {
      },
      computed:{

      }
    }
</script>
<style scoped>
  @import "../../assets/css/login.css";
</style>
