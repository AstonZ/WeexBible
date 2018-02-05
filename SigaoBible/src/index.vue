<template>
  <div class="wrapper">
    <image :src="logo" class="logo"></image>
    <text class="greeting">The environment is ready!</text>
    <text class="message">Now, let's use Vue.js to build your WeexBible app.</text>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        logo: 'http://g.hiphotos.baidu.com/image/h%3D300/sign=0a9f67bc16950a7b6a3548c43ad0625c/c8ea15ce36d3d539f09733493187e950342ab095.jpg',
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
</style>
