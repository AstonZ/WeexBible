<template recyclable>
    <text class="title">{{content}}</text>
</template>
<script>
  export default {
    props: ["content"]
  }
</script>
<style scoped>
    .title {
    margin-bottom: 20px;
    padding: 20px;
    background-color: #EEE;
    color: #AAA;
    font-size: 50px;
    text-align: center;
  }
</style>

