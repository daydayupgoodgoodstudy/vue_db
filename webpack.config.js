var path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin')

function pathTo() {
    return path.join(__dirname, path.join.apply(path, arguments));
}
module.exports = {
    mode: 'development',
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: pathTo('./dist'),
        publicPath: '/',
        filename: 'bundle.js',
        // filename: 'bundle.[hash:5].js'
    },
    devServer: {
        // historyApiFallback: true,
        // progress: false,
        // contentBase: './app',
        host: "0.0.0.0",
        port: 8080,
        proxy: {
            '/api/*': {
                //localhost:3000是接口地址
                // target:"http://119.29.223.81:3000/",
                target: "https://passportceshi.muheda.com/",
                // target: 'http://localhost:3000/',
                changeOrigin: true,
            }
        }
    },
    resolve: {
        extensions: ['.css', '.js', '.vue'],
        alias: {
            '@': path.resolve('src'),
            //这个先保留，为什么没用????
            // "iAxios": path.resolve('src/axios'),
            // Component: path.resolve(__dirname, '/src/component'),
            // Page: path.resolve(__dirname, '/src/page'),
            // Router: path.resolve(__dirname, '/src/router'),
            // Store: path.resolve(__dirname, '/src/store'),
            // Utils: path.resolve(__dirname, '/src/utils'),
        }
    },
    module: {
        rules: [
            { test: /iview.src.*?js$/, loader: 'babel-loader' },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
                loader: 'file-loader',
                query: {
                    // 把较小的图标转换成base64的字符串内嵌在生成的js文件里    
                    limit: 10000,
                    // name: '../fonts/[name].[ext]?[hash:7]',
                    // prefix: 'font'
                }
            }
        ]
        // loaders: [
        //     {test: /\.js$/,loader: 'babel',exclude: /node_modules/},
        //     //图片转换，小于8K自动转化为base64的编码
        // ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]

}