
<template>
    <div class="app-wrapper">
        <router-view class="r-box"></router-view>
        <tab-bar @tabTo="onTabTo"></tab-bar>
    </div>
</template>

<style>
    body {
        margin: 0;
        padding: 0;
        background-color: aliceblue;
        color: #333
    }
</style>

<style scoped>
    .app-wrapper {
        background-color: #f4f4f4;
    }
    
    .r-box {
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>



<script>
    import weex from 'weex-vue-render';
    var modal = weex.requireModule('modal');

    import tabBar from 'components/tabBar.vue'
    export default {

        components: {
            'tab-bar': tabBar
        },

        methods: {
            onTabTo(_result){
                let _key = _result.data.key || '';
                this.$router && this.$router.push('/'+_key);
            }
        },

        data (){
            return {

            };
        },

        created () {
            
        },


    }
</script>



<!--
<template>
    <div class="App">
        <div @click='linkTo("/login")'>
            <text>this is template body</text>
        </div>
        <router-view></router-view>
    </div>
</template>
<style>
</style>
<script>
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        methods: {
            linkTo(url){
                this.$router.push(url);
            }
        },
        components: {}
    }
</script>
-->