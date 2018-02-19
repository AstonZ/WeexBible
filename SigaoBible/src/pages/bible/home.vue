<template>
    <div class="wrapper">
        <text class="text-holder">Bible Home Ha</text>
        <div class="img-wrapper">
            <image class="img-cover" resize="stretch" 
            :src="get_img_path('logo.png')"/>
        </div>
    </div>
</template>


<script>
    export default {
        data () {
            return {
//                logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
            }
        },
        methods: {
        },
        components: {}
    }
</script>

<style scoped>
    .wrapper {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color:black
    }

    .img-wrapper {
        position: fixed;
        top:50;
        left:0;
        width: 300;
        height: 200;
        background-color: #fff
    }

    .img-cover {
        width: 200;
        height: 200;
    }
    

    .text-holder {
        height: 66;
        font-size: 26;
        padding-top: 16;
        flex: 1;
        text-align: center;
        color: #41B883;
    }
</style>


