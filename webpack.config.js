const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry: {
       index :'./src/index.js',
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
        //清除建構檔案
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "./[name].css"
        }),
        //html
        new HtmlWebpackPlugin({
           chunks: ['index'],
           inject: 'body',
           filename : 'index.html',//產生html
           template : './src/index.html' //來源html
        }),
        new HtmlWebpackPlugin({
            chunks: ['aboutus'],
            inject: 'body',
            filename : 'aboutus.html',//產生html
            template : './src/aboutus.html' //來源html
         }),
         //全域加載jq
         new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
          })
    ],
    resolve: {
        alias: {
           vue: 'vue/dist/vue.js'
        }
      },
    // 對應的插件
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9004
      },      // 服務器配置
    mode: 'production'      // 開發模式配置 production /development
}