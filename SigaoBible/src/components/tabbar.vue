<template>
  <div :class="['wrapper', isIpx&&isIpx()? 'w-ipx':'']">
        <div class="bar-item" @click="tabTo('home')">
            <text class="bar-ic iconfont" :class="[this.isActive('home')]">&#xe60a;</text>
            <text class="bar-txt" :class="[this.isActive('home')]">首页</text>
        </div>
        <div class="bar-item" @click="tabTo('reference')">
            <text class="bar-ic iconfont" :class="[this.pIndexKey == 'reference'?'bar-active':'']">&#xe60b;</text>
            <text class="bar-txt" :class="[this.pIndexKey == 'reference'?'bar-active':'']">文献</text>
            <text class="notice-dot"></text>
        </div>
        <div class="bar-item" @click="tabTo('translation')">
            <text class="bar-ic iconfont" :class="[this.isActive('translation')]">&#xe60c;</text>
            <text class="bar-txt" :class="[this.isActive('translation')]">译本史</text>
        </div>
        <div class="bar-item" @click="tabTo('user')">
            <text class="bar-ic iconfont" :class="[this.isActive('user')]">&#xe60f;</text>
            <text class="bar-txt" :class="[this.isActive('user')]">个人</text>
            <text class="i-notice">2</text>
        </div>
  </div>
</template>

<style scoped>
    .iconfont {
        font-family: iconfont;
    }

    .wrapper {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 90;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        border-top-width: 1;
        border-top-color: #d9d9d9;
        background-color: #fafafa;
    }
    .w-ipx{
        height: 140px;
    }
    .bar-item{
        flex: 1;
    }
    .bar-txt,.bar-ic{
        color:#666;
        text-align: center;
    }
    .bar-active{
        color:#b4282d;
    }
    .bar-ic{
        padding-top: 14px;
        font-size: 38px;
    }
    .bar-txt{
        font-size: 22px;
        padding-top: 2px;
    }
    .i-notice{
        position: absolute;
        top:10px;
        right: 30px;
        height: 30px;
        width: 30px;
        border-radius: 100%;
        font-size: 26px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        background-color: #f00;
    }
    .notice-dot{
        position: absolute;
        top:15px;
        right: 40px;
        height: 15px;
        width: 15px;
        border-radius: 100%;
        background-color: #f00;
    }
</style>

<script>
    var modal = weex.requireMoudle('modal');
    export default {

        computed: {

        },

        data() {
            return {
                curIndexKey: 'home'
            }
        },

        mounted(){

        },

        methods: {
            
            isActive: function (_key) {
                return this.curIndexKey === _key ? 'bar-active':''
            },

            tabTo: function (_key){
                if (this.curIndexKey === _key) return;
                this.curIndexKey = _key;
                this.$emit('tabTo', {
                    status: 'tabTo',
                    data: {
                        key: _key
                    }
                })
            }
        }
    }
</script>

