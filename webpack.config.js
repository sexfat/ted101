const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
       main :'./src/index.js',
       aboutus :'./src/aboutus.js'
    },               // 入口文件
    output: {
       path :path.resolve(__dirname , 'dist'),
       filename : '[name]-bundle.js'
    },              // 出口文件
    module: {
        rules: [{
            // 格式
            test: /\.(sass|scss|css)$/,
            //順序是由下到上 css > style
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: './dist'
                }
              },
                //'style-loader', 會跟原本的衝突 
                'css-loader',
                'sass-loader'
            ],
        }]

    },      // 處裡對應模組
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./[name].css"
        }),
        //html
        new HtmlWebpackPlugin({
           chunk: ['main'],
           filename : 'index.html',//產生html
           template : './src/index.html' //來源html
        }),
        new HtmlWebpackPlugin({
            chunk: ['aboutus'],
            filename : 'aboutus.html',
            template : './src/aboutus.html'
         })

    ],              // 對應的插件
    //devServer: {},           // 服務器配置
    mode: 'production'      // 開發模式配置 production /development
}