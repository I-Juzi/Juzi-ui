<template>
  <div class="login">
    <el-card class="login-card">
      <el-image class="logo_login" :src="log_url" fit="cover"></el-image>

      <p class="login_title">登 录</p>
      <p class="login_desc">T e s i o n</p>

      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="pass">
          <el-input type="text" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
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
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
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
        checkPass: '',
/*
        age: ''
*/
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
/*        age: [
          { validator: checkAge, trigger: 'blur' }
        ]*/
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
          try {
            this.$router.push({path:'/home/to'})

          }catch (e) {
            alert(e)
          }
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
  font-family:'华文行楷';
  font-size: 20px;
}
.footer {
  z-index: 9999;
  position: fixed;
  bottom: 0px;
  width: 100%;
  text-align: center;
}
.demo-ruleForm{
  margin-left: -20px;
  margin-right: 60px;
}
</style>
