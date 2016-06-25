module.exports = function (gulp, plugin) {

    'use strict';

    var normalize = require('node-normalize-scss');

    return function () {

        gulp.src('./src/app.scss')
            .pipe(plugin.sourcemaps.init())
            .pipe(plugin.sass({
                includePaths: normalize.includePaths,
                sourcemap: true,
                outputStyle: 'expanded'
            }).on('error', plugin.sass.logError))
            .pipe(plugin.autoprefixer({
                browsers: ['last 2 versions', '> 5%', 'Firefox ESR'],
                cascade: false
            }))
            .pipe(plugin.sourcemaps.write('.'))
            .pipe(gulp.dest('./dist/'));
    };
};