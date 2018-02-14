# 基于vue+vue-router+vue-resource+vuex
打包构建：node webpack + babel( 支持es6语法 )

### 安装
下载依赖包

- git clone http://git-ma.paic.com.cn/papc/doc.git
- 将h5_tools/faj_admin_tools目录中的node_modules.zip解压到当前目录
- 如你当前的node不支持es6语法或编译出错，请到h5_tools/faj_admin_tools/node6.9.1目录获取最新的node.exe（含32位和64位）
- 启动服务，这个服务会自动监听文件的改动 - 开发调试启动这个命令即可

- PC调试测试环境，运行命令：npm run server\npm run server-stg\npm run server-prd
（启动完成后，访问 http://localhost:8090/）

生成生产包
```
npm run prd
```
生成测试包
```
npm run stg
```

生成开发包
```
npm run dev
```

压缩本地包-开发包(会生成FAJ_ADMIN.zip)
```
npm run zip
```
压缩本地包-测试包(会生成FAJ_ADMIN_STG.zip)
```
npm run zip-stg
```
压缩本地包-生产包(会生成FAJ_ADMIN_PRD.zip)
```
npm run zip-prd
```


### 目录结构
<pre>
.
├── README.md           
├── dist               // 项目build目录
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
├── src                // 源码目录
│   ├── assets         // css js 和图片资源
│   ├── components     // 各种组件
│   ├── libs           // 各种公共方法
│   ├── views          // 各种页面
│   ├── routers.js     // 各种路由
│   └── main.js        // Webpack 预编译入口
├── server.js          // webpack-dev-server服务配置
└── webpack.config.js  // Webpack 配置文件
</pre>
