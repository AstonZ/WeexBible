<template>
    <div class="wrapper">
        <text class="text-holder">Bible Home</text>
        <div class="img-wrapper">
            <image class="img-cover" resize="stretch" 
            :src="get_img_path('home-placeholder.png')>
            </image>
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
        background-color: #333
    }

    .img-wrapper {
        position: fixed;
        top:0;
        left:0;
        right:0;
        height: 200;
        background-color: #fff;
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
        color: blueviolet;
    }
</style>


