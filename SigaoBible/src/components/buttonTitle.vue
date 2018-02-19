<template>
  <div class="wrapper">
    <image class="icon" :src="get_img_path(icon)"/>
    <text class="title">{{title}}</text>
  </div>
</template>

<style scoped>
  .wrapper{
    background-color: whitesmoke;
    margin: 20;
    align-items: center;
  }
  .icon{
    height: 80;
    width: 80;
  }
  .title{
    font-size: 30;
    font-weight: 20;
  }
</style>

<script>
  export default {
    props:["icon","title"],
  }
</script>

