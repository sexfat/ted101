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


function php(){
    return src(config.pathsWatch.php).pipe(dest(config.pathsDev.dist));
}

//Watch files
module.exports =  function watchFiles() {
    watch(config.pathsWatch.php ,  series(php));
} 