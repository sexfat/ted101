const {
    src,dest
} = require('gulp');
const zips = require('gulp-zip');
//把路徑載入
const config = require('../gulp.config')
const Today = new Date();




module.exports = function zip(){
   return src(config.pathsConfig.dist)
    .pipe(zips(Today.getDate()+ '-' + Today.getMinutes() + 'archive.zip'))
    .pipe(dest(config.pathsConfig.package))
};