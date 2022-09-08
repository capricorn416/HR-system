const Timestamp = new Date().getTime()
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    resolve: {
        alias: {
            'assets': '@/assets',
            'common': '@/common',
            'components': '@/components',
            'network': '@/network',
            'views': '@/views',
        }
    },
    output: {
      filename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js`,
      chunkFilename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js`
    }
  },
  // 反向代理
  devServer: {
    // http2:true,
    https: false,
    proxy: {
      '/api': {
        // 要访问的跨域的域名
        // target: 'https://www.pivotstudio.cn/', //'http://localhost:5001',
          target: "http://localhost:8888",
        // target: 'https://limfx.pro',
        ws: true, // 是否启用websockets
        pathRewrite: {
          '^/frontend': ''
        },
        secure: false, // 使用的是http协议则设置为false，https协议则设置为true
        // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样客户端端和服务端进行数据的交互就不会有跨域问题
        // changOrigin: true,
        cookieDomainRewrite: "localhost"
      },
    }
  },
}
