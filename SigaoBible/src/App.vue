<template>
    <div>
        <div @click='linkTo("/home")'>this is template body</div>
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
        components: {}
    }
</script>
