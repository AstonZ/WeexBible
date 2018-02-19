<template>
  <div class="wrapper">
    <button :icon="'home-placeholder.png'" :title="'圣经目录'" @click="onClickIndex(0)"></button>
    <button :icon="'home-placeholder.png'" :title="'经文搜索'" @click="onClickIndex(1)"></button>
    <button :icon="'home-placeholder.png'" :title="'经文分享'" @click="onClickIndex(2)"></button>
  </div>
</template>

<script>
    import button from 'components/buttonTitle.vue';
    export default {

      components: {
        'button': button,
      },

      methods: {
        onClickIndex(_index){
          console.log("did clicked index " + _index);
        }
      }
    }  
</script>

<style scoped>
  .wrapper{
      position: relative;
      top: 0;
      left: 0;
      right: 0;
      height: 200;
      flex-direction: row;
      border-width: 1;
      border-color: gray;
      justify-content: space-around;
      align-items: center;
    }
</style>

