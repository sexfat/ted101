const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');




//把模組載入

const clean = require('./tasks/clean');
const styles = require('./tasks/sassStyle');
const html = require('./tasks/html_template');
const jsBabel = require('./tasks/jsBabel');
const concats = require('./tasks/concat');
const image = require('./tasks/image');
const server = require('./tasks/server');





// 第一個任務


// exports.all = series(p01, p02); //依序執行
// exports.all2 = parallel(p01, p02); //並行






//排除 用!*.js   排除單個檔案
//多個檔案 ['a1.css' , 'a2.css'] 
// https://www.itread01.com/content/1546834502.html
// npm i gulp-rename --save-dev
// 壓縮css 
// https://www.npmjs.com/package/gulp-clean-css

// exports.name = function Rename() {
//     return src('app/all.css')
//         .pipe(rename(function (path) {
//             path.basename += "aa";
//             path.extname = ".css";
//         })).pipe(dest('app/'))
// }


// //gulp sass


// function styleSass() {
//     return src('./sass/*.scss') //input路徑
//         .pipe(sass({
//             outputStyle: "compressed" //壓縮css 
//         }).on('error', sass.logError))
//         //.pipe(autoprefixer())
//         // .pipe(rename(function (path) {
//         //     path.basename += "-prefix";
//         //     path.extname = ".css";
//         //   })) //改名
//         .pipe(dest('./app/css/')) //output路徑
// }

// // html 樣版



// function htmlTemplate() {
//     return src('./*.html') //input
//         .pipe(fileinclude({
//             prefix: '@@',
//             basepath: '@file'
//         })).pipe(dest('./app/')) //output
// }



// //監看檔案 -> 輸出

// exports.watch = function watchfile() {
//     watch('./sass/*.scss', styleSass); // 執行function
//     watch(['./*.html', './**/*.html', '!app/*.html'], htmlTemplate) // 執行function
// }
// // 瀏覽器同步

// const browserSync = require('browser-sync');
// const reload = browserSync.reload;

// exports.default = function browser() {
//     browserSync.init({
//         server: {
//             baseDir: "./app",
//             index: 'index.html'
//         },
//         //port: 3200
//     });
//     watch('./sass/*.scss', styleSass).on('change', reload)
//     watch(['./*.html', './**/*.html', '!app/*.html'], htmlTemplate).on('change', reload)
// }


// //  prefix -> 改名 -> 壓縮css 
// // exports.packagecss = () => (
// //     src('app/css/*.css')
// //         .pipe(autoprefixer())
// //          .pipe(rename(function (path) {
// //             path.basename += "_prefix";
// //             path.extname = ".css";
// //           })) //改名
// //         .pipe(cleanCSS({compatibility: 'ie8'})) 
// //         .pipe(dest('app/css/prefix'))
// // );



// function prefix() {
//     return src('app/css/*.css')
//         .pipe(autoprefixer())
//         .pipe(rename(function (path) {
//             path.basename += "_prefix";
//             path.extname = ".css";
//         })) //改名
//         .pipe(cleanCSS({
//             compatibility: 'ie8'
//         }))
//         .pipe(dest('app/css/prefix'))
// }


// //圖片壓縮

// const imagemin = require('gulp-imagemin');
// // exports.img = () => (
// //     src('images/*')
// //         .pipe(imagemin())
// //         .pipe(dest('app/images'))
// // );
// function img() {
//     return src('images/*')
//         .pipe(imagemin())
//         .pipe(dest('app/images'))
// }

// const uglify = require('gulp-uglify');

// function babeles5() {
//     return src('js/*.js')
//         .pipe(babel({
//             presets: ['@babel/env']
//         }))
//         .pipe(uglify())
//         .pipe(dest('app/js'))
// }
// //清除舊有檔案
// var clean = require('gulp-clean');

// function clear() {
//   return src('app' ,{ read: false })
//   .pipe(clean({force: true}));
// }


// //打包
// exports.packageAll = series(clear,styleSass,parallel(htmlTemplate ,prefix, img, babeles5));