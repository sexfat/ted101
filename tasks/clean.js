//清除舊有檔案
const {
    src
} = require('gulp');
const clean = require('gulp-clean');

//把路徑載入
const config = require('../gulp.config')


module.exports = function clear() {
  return src(config.pathsDev.dist ,{ read: false , allowEmpty: true})
  .pipe(clean({force: true}));
}
