<template>
  <div class="login" @keydown="keyDown">
    <div class="login-display">
      <img src="../assets/logo.png" class="logo">
      <div class="header">WeLCome</div>
      <div class="login-info">
        <div class="account-number">账号</div>
        <div class="number-input" ref="numberInput">
          <img src="../assets/login_number.png" />
          <input type="text" placeholder="请输入账号" v-model.trim="accountNumber" />
        </div>
      </div>
      <div class="login-info">
        <div class="account-number">密码</div>
        <div class="number-input" ref="passwordInput">
          <img src="../assets/login_password.png" />
          <input type="password" placeholder="请输入密码" v-model.trim="password" />
        </div>
      </div>
      <div class="remember-password">
        <div class="checkbox" @click="isRememberPassword = !isRememberPassword"><span v-if="isRememberPassword">√</span></div>
        <span>记住账号</span>
      </div>
      <div class="submit-button" @click="loginClick">登 录</div>
    </div>
  </div>
</template>

<script>
  import common from  '@/utils/common'
  export default {
    name: "login",
    data() {
      return {
        isRememberPassword: false,
        accountNumber: '',
        password: '',
      }
    },
    mounted() {},
    methods: {
      loginClick () {
        let lable;
        let error;
        let isError = false;
        if (!this.accountNumber) {
          isError = true;
          lable = this.$refs['numberInput'];
          error = '请输入账号！';
        } else if (!this.password) {
          isError = true;
          lable = this.$refs['passwordInput'];
          error = '请输入密码！';
        }
        if(isError){
          common.bubbleHints(lable,error);
          return;
        }
        if(this.isRememberPassword){
          this.setValue('user',this.accountNumber,365);
          this.setValue('pswd',this.password,365);
        }else {
          if(this.getCookie('user') && this.getCookie('pswd')){
            this.delCookie('user');
            this.delCookie('pswd');
          }
        }
        let data = new Object();
        data.username = this.accountNumber;
        data.password = this.password;
        // this.MessageSuccess('点击登陆')
        this.$router.push('/home')
      },
      setValue (name, value, day) {
        var date = new Date();
        date.setDate(date.getDate() + day);
        document.cookie = name + '=' + value + ';expires=' + day;
      },
      getCookie (name) {
        let reg = RegExp(name + '=([^;]+)');
        let arr = document.cookie.match(reg);
        if (arr) {
          return arr[1]
        } else {
          return ''
        }
      },
      delCookie(name) {
        this.setValue(name, null, -1);
      },
      keyDown(ev) {
        if (ev.keyCode == 13) {
          this.loginClick();
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .login {
    width: 100%;
    height: 100%;
    background: url("../assets/background.png");
    background-size: 100% 100%;
    text-align: center;
    .login-display {
      width: 617px;
      height: 530px;
      background: #fff;
      border-radius: 8px;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 0 57px;
      .logo {
        position: absolute;
        top: -126px;
        left: 50%;
        transform: translateX(-50%);
      }
      .header {
        height: 91px;
        font-size: 46px;
        line-height: 90px;
        border-bottom: 1px solid #ececec;
      }
      .login-info {
        margin-top: 15px;
        .account-number {
          height: 36px;
          line-height: 36px;
          font-size: 18px;
          text-align: left;
        }
        .number-input {
          width: 100%;
          height: 66px;
          border: 1px solid #eaeaea;
          border-radius: 8px;
          /*padding-left: 50px;*/
          background: #fafafa;
          img {
            float: left;
            margin: 23px 10px 0 15px;
          }
          input {
            width: 450px;
            height: 64px;
            line-height: 64px;
            border: 0;
            outline: none;
            font-size: 18px;
            color: #333;
            background: #fafafa;
          }
        }
      }
      .remember-password {
        margin: 24px 0 18px 0;
        height: 30px;
        text-align: left;
        .checkbox {
          width: 15px;
          height: 15px;
          border: 1px solid #e1e1e1;
          background: #eeeeee;
          border-radius: 3px;
          cursor: pointer;
          position: relative;
          float: left;
          margin-top: 7px;
          span {
            font-size: 14px;
            font-weight: bold;
            position: absolute;
            top: -2px;
            left: 2px;
          }
        }
        >span {
          font-size: 18px;
          color: #848484;
          margin-left: 10px;
        }
      }
      .submit-button {
        height: 65px;
        line-height: 65px;
        background: #5788f7;
        border-radius: 8px;
        font-size: 30px;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
</style>
