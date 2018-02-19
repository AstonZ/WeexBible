<template>
    <div class="wrapper">
        <scroller :class="['main-scroll', isIpx&&isIpx()?'ml-ipx':'']" offset-accuracy="300">
            <refresher @loadingDown="loadingDown"></refresher>
            <div v-if="true" class="img-wrapper">
                <image class="img-cover" resize="stretch" 
                :src="get_img_path(this.cover)"/>
            </div>
            <div class="panel"/>
            <daily-words @click="onClickDailyWord"
                :logo="this.dailyWord.logo"
                :date="this.dailyWord.date"
                :content="this.dailyWord.content"
                :index="this.dailyWord.index"
            />
            <div class="panel"/>
            <home-functions/>
            <div class="panel"/>
        </scroller>
    </div>
</template>


<script>
    import refresher from 'components/refresher.vue';
    import dailyWords from 'components/dailyWords.vue';
    import homeFunction from 'components/homeFunction.vue';
    export default {
        data () {
            return {
                cover:'home-placeholder.png',
                dailyWord: {
                    logo:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519035929332&di=5757cde98a31a3f03955b1750cb861c0&imgtype=0&src=http%3A%2F%2Fwww.christiantimes.cn%2Fassets%2Fcache%2F484x323%2Fassets%2Fmedia%2Fpost%2F201607%2F21409%2Fwww.christiantimes.cn-IMG_5120.jpg",
                    date:"2018-2-19   星期一  ",
                    content: "愿赐平安的主，亲自时时处处赐予你们平安！愿主与你们众人同在！",
                    index: "-- 得撒洛尼后书 3:16"
                }
            }
        },

        methods: {

            //pull to refresh home page
            loadingDown () {
                console.log("Home page will refresh");
            },

            // go to daily word
            onClickDailyWord (){

            },
        },

        components: {
            'refresher': refresher,
            'daily-words':dailyWords,
            'home-functions':homeFunction
        }
    }
</script>

<style scoped>
    .wrapper {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color:white
    }

    .main-scroll {
        position: fixed;
        top: 0;
        bottom: 160;
        left: 0;
        right: 0;
        background-color: white;
    }

    .ml-ipx {
        top: 208;
        bottom: 210;
    }

    .img-wrapper {
        position: relative;
        top:0;
        left:0;
        right: 0;
        height: 350;
    }

    .img-cover {
        flex: 1;
    }

    .panel{
        position: relative;
        left: 0;
        right: 0;
        height: 20;
        opacity: 0;
    }
</style>


