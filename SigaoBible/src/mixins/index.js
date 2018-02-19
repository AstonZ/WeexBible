import weex from 'weex-vue-render';
let stream = weex.requireModule('stream');

export default {
    methods: {

        jump(to) {
            if (this.$router) {
                this.$router.push(to);
            }
        },

        // 获取图片在三端上不同的路径
        // e.g. 图片文件名是 test.jpg, 转换得到的图片地址为
        // - H5      : http: //http://192.168.3.17:8081//src/assets/images/test.jpg
        // - Android : local:///test
        // - iOS     : ../images/test.jpg
        // 使用方法:
        // <image style="width: 120px; height: 120px;"  :src="get_img_path('test.png')"></image>        
        get_img_path(img_name) {
            let platform = weex.config.env.platform
            let img_path = ''

            if (platform == 'Web') {
                img_path = `http://192.168.3.17:8081//src/assets/images/${img_name}`
            } else if (platform == 'android') {
                // android 不需要后缀
                img_name = img_name.substr(0, img_name.lastIndexOf('.'));
                img_path = `local:///${img_name}`
            } else {
                img_path = `../images/${img_name}`
            }

            return img_path
        },


        isIpx() {
            return weex && (weex.config.env.deviceModel === "iPhone10,3" ||
            weex.config.env.deviceModel === 'iPhone10,6');
        },

        GET (api, callback) {
            return stream.fetch({
                method: 'GET',
                type: 'json',    
                url: 'http://api' + api
            }, callback)
        }

    }
}