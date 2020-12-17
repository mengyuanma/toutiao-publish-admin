module.exports = {
    lintOnSave: false,
    publicPath:'./',
    productionSourceMap: false,
    devServer: {
        port: 8085, // 端口号
        host: '0.0.0.0',
        https: false, // https:{type:Boolean}
        open: true, // 配置自动启动浏览器
        // proxy: 'http://192.168.2.203:8080', // 配置跨域处理,只有一个代理
        // proxy: 'http://192.168.2.183:8081'
        proxy:null
    },
    css: {
        sourceMap: true,
        loaderOptions: {
            less: {
                modifyVars: {
                    "primary-color": "#1DA57A",
                    "link-color": "#1DA57A",
                    "border-radius-base": "2px"
                },
                javascriptEnabled: true
            }
        }
    }
};
