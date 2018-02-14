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
