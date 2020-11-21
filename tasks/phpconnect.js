const {
    src,
    dest,
    watch,
    series,
    parallel
} = require('gulp');

// const browsersync = require('browser-sync');
// const phpConnect = require('gulp-connect-php');





//路徑參數
const config = require('../gulp.config')


// module.exports =  function connectsync() {
//     phpConnect.server({
//         // a standalone PHP server that browsersync connects to via proxy
//         port: 8000,
//         keepalive: true,
//         open: true,
//         base: "dist"
//     }, function (){
//         browsersync({
//             proxy: '127.0.0.1:8000' ,
//             keepalive: true
//         });
//     });
//     watch("./src/*.php",  series(php)).on('change' , reload);
// }

function php(){
    return src(["src/*.php" , 'src/**/*.php']).pipe(dest("./dist"));
}

//Watch files
module.exports =  function watchFiles() {
    watch(["src/*.php" , 'src/**/*.php'],  series(php));
}

// parallel([watchFiles, connectsync]);







// watch(config.pathsW, series(styleSass)).on('change', reload);