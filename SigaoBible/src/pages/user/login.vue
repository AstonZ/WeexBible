<template>
  <div class="wrapper">
    <div class="login">
      <div class="input-wrapper">
        <input class="input" type="text" 
        placeholder="Input Mobile"
        autofocus="true" 
        value=""
        onchange="onChangeUserMobile"/>
        <div class="input-img"></div>
      </div>
      <div class="input-wrapper">
        <input class="input" type="text" 
        placeholder="Input Password"
        autofocus="true" 
        value=""
        onchange="onChangeUserPassword"/>
        <div class="input-img"></div>
      </div>
      <div class="input-wrapper">
        <div class="input-login" @click="login">
          <text class="input-login-text">Login</text>
        </div>
      </div>
      <div class="input-wrapper">
        <text class="input-forget" @click="findPassword">Find password</text>
        <text class="input-register" @click="register">Register</text>    
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = {

    data: {
      mobile:"",
      pwd:""
    },

    methods: {

      onChangeUserMobile: function (event) {
        this.mobile=event.value;
      },

      onChangeUserPassword: function (event){
        this.pwd=event.value;
      },

      findPassword: function (){
        console.log("Go Find pwd");
      },

      register: function () {
        console.log("Go register");
      },

      login: function (){
        console.log("mobile = " + this.mobile + "password = " + this.pwd);
      }
    }
  }
</script>


<style>
  .wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  
  .login {
    margin-top: 180px;
  }

  .input-wrapper {
    width: 550px;
    margin-left: 100px;
    margin-right: 100px;
    margin-bottom: 30px;
  }

  .input {
    font-size: 30px;
    height: 80px;
    width: 550px;
    padding-left: 90px;
    padding-top: 15px;
    border-width: 1px;
    border-color: #48c9bf;
    border-radius: 10px;
    outline: none;
  }

  .input-img {
    position: absolute;
    top: 10px;
    left: 15px;
    width:550;
    background-color: #48c9bf;
    border-radius: 10px;
    margin-top: 40px;
  }

  .input-login-text {
    height: 80px;
    widows: 550px;
    text-align: center;
    line-height: 80px;
    color: white;
    font-size: 35px;
  }

  .input-login {
    height: 80px;
    width: 550px;
    background-color: #48c9bf;
    border-radius: 10px;
    margin-top: 40px;
  }

  .input-forget {
    position: absolute;
    left: 30px;
    font-size: 30px;
  }

  .input-register {
    position: absolute;
    right: 30px;
    font-size: 30px;
  }
</style>

