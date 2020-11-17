let basePaths = 'src'

let baseConfig = {
    paths: {
        html: basePaths + '/*.html' ,
        css:  basePaths + '/sass/*.scss',
        js: basePaths + '/js/*.js' ,
        images: basePaths + '/images/*.*'
    },
    pathsDev : {
        html:   'dist/' ,
        css:    'dist/css',
        js:   'dist/js' ,
        images:   'dist/images'
    },
    watchpaths : {
       html: [basePaths + '/*.html' , basePaths + '/**/*.html'], 
       scss: [basePaths + '/*.scss' , basePaths + '/**/*.scss'], 
    }
}