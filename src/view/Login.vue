<template>
  <div class="login">
    <el-card class="login-card">
      <el-image class="logo_login" :src="log_url" fit="cover"></el-image>

      <p class="login_title">登 录</p>
      <p class="login_desc">T e s i o n</p>

      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账 号" prop="pass">
          <el-input type="text" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密 码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
<!--        <el-form-item label="验证码" prop="age">
          <el-input v-model.number="ruleForm.age"></el-input>
        </el-form-item>-->
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <p class="footer"> Copyright @Juzi All Right Reserved</p>
  </div>
</template>

<script>

export default {
  name: "Login",
  components:{},
  data(){

/*
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
*/
    var validateUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        if (this.ruleForm.password !== '') {
          this.$refs.ruleForm.validateField('password');
        }
        callback();
      }
    };
    var passwordValidate = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } {
        callback();
      }
    };
    return {
      log_url: require("@/assets/logo.png"),
      ruleForm: {
        pass: '',
        password: '',
        grant_type:'password',
        client_id:'app',
        client_secret:'app',
      },
      rules: {
        pass: [
          { validator: validateUser, trigger: 'blur' }
        ],
        password: [
          { validator: passwordValidate, trigger: 'blur' }
        ],
      }
    };
  },
  created() {
  },
  mounted() {
  },
  methods:{
    submitForm(formName) {

      this.$refs[formName].validate((valid) => {

        if (valid) {
          //简单登录，路由跳转
            if(this.ruleForm.pass == 1 && this.ruleForm.password ==1){

                localStorage.setItem("token","11")

                this.$router.push({path:'/home/to'})

                this.$message.success('登陆成功')

            }else {

                this.$message.error("用户名或密码错误")

            }
              //表单
       /*       var from = new FormData();
              from.append('grant_type','password')
              from.append('client_secret','app')
              from.append('client_id','app')
              from.append('username',this.ruleForm.pass)
              from.append('password',this.ruleForm.password)
              this.$http.post("/oauth/token",from).then(res=>{
                if (res.data.access_token){
                  console.log(res.data.authorities[0])
                  localStorage.setItem("access_token",res.data.access_token)
                  localStorage.setItem("refresh_token",res.data.refresh_token)
                  //
                }else {
                  this.$message.info("用户名或密码错误")
                }
              }).catch(e => {
                this.$message.error("系统异常啦")
                console.log('系统异常',e)
              })*/

        } else {

          console.log('error submit!!');

          return false;

        }

      });

    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>
/*主界面*/
.login{
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/wallhaven-zygeko.jpg");
  position: absolute;
  left: 0;
  top: 0;
  background-size: 100% 100%;
}
/*el-card样式*/
.login-card{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 20%;
  min-width: 300px;
  height: 500px;
  min-height: 500px;
  border-radius: 10px;
  text-align: center;
}
/*logo_login*/
.logo_login{
  width: 50px;
  height: 50px;
  margin-top: 40px;
}
.login_title{
  font-size: 25px;
  font-weight: bold;

}
.login_desc{
  letter-spacing: 2px;
  color: #999a99;
  font-family:'华文行楷',serif;
  font-size: 20px;
}
.footer {
  z-index: 9999;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
}
.demo-ruleForm{
  margin-left: -20px;
  margin-right: 60px;
}
</style>
