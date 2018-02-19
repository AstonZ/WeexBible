<template recycleable>
  <div class="out-wrapper">
    <div class="wrapper">
      <div class="left-wrapper">
        <image class="img-logo" :src="logo"/>
        <text class="date-text">{{date}}</text>
      </div>
      <div class="right-wrapper">
        <text class="title">每日圣言</text>
        <text class="main-content">{{content}}</text>
        <text class="index">{{index}}</text>
      </div>
    </div>  
  </div>
</template>

<script>
    export default {
      props:["logo","date","content","index"],
    }
</script>

<style scoped>
  .out-wrapper {
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    height: 200;
  }
 .wrapper{
    position: relative;
    top: 20;
    left: 0;
    right: 0;
    bottom: 20;
    flex-direction: row;
    border-width: 1;
    border-color: gray;
  }

  .left-wrapper {
    flex: 1;
    margin: 5;
  }

  .right-wrapper {
    flex: 2;
    margin: 5;
  }

  .img-logo {
    flex: 4;
    }

  .date-text {
    font-size: 24;
    color: black;
    margin: 10;
  }

  .title {
    font-size: 30;
    font-weight: bold;
    text-align: center;
  }

  .main-content {
    font-size: 26;
  }

  .index {
    font-size: 26;
    text-align: right;
    margin: 20;
  }
</style>

