<template>
  <recycle-list>
    <cell-slot v-for="(item, i) in notiList">
      <daily-words 
      :logo="item.logo"
      :date="item.date"
      :content="item.content"
      :index="item.index"
      />
    </cell-slot>
  </recycle-list>
</template>

<script>
    import SentenceCard from 'components/sentenceCard.vue'
    import dailyWords from 'components/dailyWords.vue';

    export default {
      data(){
        return {
          notiList:[
              {
                logo:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519035929332&di=5757cde98a31a3f03955b1750cb861c0&imgtype=0&src=http%3A%2F%2Fwww.christiantimes.cn%2Fassets%2Fcache%2F484x323%2Fassets%2Fmedia%2Fpost%2F201607%2F21409%2Fwww.christiantimes.cn-IMG_5120.jpg",
                date:"2018-2-19   星期一  ",
                content: "愿赐平安的主，亲自时时处处赐予你们平安！愿主与你们众人同在！",
                index: "-- 得撒洛尼后书 3:16"
              },      
              {
                logo:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519035929332&di=5757cde98a31a3f03955b1750cb861c0&imgtype=0&src=http%3A%2F%2Fwww.christiantimes.cn%2Fassets%2Fcache%2F484x323%2Fassets%2Fmedia%2Fpost%2F201607%2F21409%2Fwww.christiantimes.cn-IMG_5120.jpg",
                date:"2018-2-19   星期一  ",
                content: "愿赐平安的主，亲自时时处处赐予你们平安！愿主与你们众人同在！",
                index: "-- 得撒洛尼后书 3:16"
              },      
              {
               logo:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519035929332&di=5757cde98a31a3f03955b1750cb861c0&imgtype=0&src=http%3A%2F%2Fwww.christiantimes.cn%2Fassets%2Fcache%2F484x323%2Fassets%2Fmedia%2Fpost%2F201607%2F21409%2Fwww.christiantimes.cn-IMG_5120.jpg",
                date:"2018-2-19   星期一  ",
                content: "愿赐平安的主，亲自时时处处赐予你们平安！愿主与你们众人同在！",
                index: "-- 得撒洛尼后书 3:16"
              }    
          ]
        }
      },
      components: {
        'sentence-card': SentenceCard,
        'daily-words':dailyWords
      }
    }
</script>

<style>

</style>

