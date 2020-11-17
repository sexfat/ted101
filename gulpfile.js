const {
    src,
    series,
    dest,
    parallel,
    watch
} = require('gulp');




//把模組載入

const clean = require('./tasks/clean');
const styles = require('./tasks/sassStyle');
const html = require('./tasks/html_template');
const jsBabel = require('./tasks/jsBabel');
const concats = require('./tasks/concat');
const images = require('./tasks/images');
const server = require('./tasks/server');
const zipfile = require('./tasks/zip');


exports.default =  series(clean ,parallel(server , jsBabel));
exports.package =  zipfile 
// exports.default = server ;


// series(clear,styleSass,parallel(htmlTemplate ,prefix, img, babeles5));

