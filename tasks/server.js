const {
    watch,
    series
} = require('gulp');

const browserSync = require('browser-sync');
const reload = browserSync.reload;

//把路徑載入
const config = require('../gulp.config')

// 
const htmlTemplate = require('./html_template');
const styleSass = require('./sassStyle');
const js = require('./jsBabel');
const php = require('./phpconnect');



//  baseDir: config.pathsDev.dist,
// index: config.pathsConfig.index

module.exports = function browser() {
    browserSync.init({
        server: {
            baseDir: './dist',
            index: 'index.html'
        },
        //port: 3200
    });
    watch(config.pathsWatch.scss, series(styleSass)).on('change', reload);
    watch(config.pathsWatch.html, series(htmlTemplate)).on('change', reload);
    watch(config.pathsWatch.js, series(js)).on('change', reload);
    // watch([config.pathsWatch.php], series(php));
}