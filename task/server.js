const { watch
} = require('gulp');


const browserSync = require('browser-sync');
const reload = browserSync.reload;

module.exports = function browser() {
    browserSync.init({
        server: {
            baseDir: "./app",
            index: 'index.html'
        },
        //port: 3200
    });
    watch('./sass/*.scss', styleSass).on('change', reload)
    watch(['./*.html', './**/*.html', '!app/*.html'], htmlTemplate).on('change', reload)
}
