var gulp = require('gulp'),
    plugin = require('gulp-load-plugins')({ //this loads all plugins so no need to reload them in individual scripts
        rename: {
            'vulcan': 'sassdoc-theme-vulcan'
        }
    });

gulp.task('compile:css', require('./gulp/scss')(gulp, plugin));
gulp.task('generate:docs', require('./gulp/docs')(gulp, plugin));

gulp.task('watch', function () {
    'use strict';

    var scss = gulp.watch(['src/**/*', 'flexed/**/*'], ['compile:css', 'generate:docs']),
        changed = function (event) {
            console.log('File ' + event.path + ' was ' + event.type + '. Running tasks...');
        };

    scss.on('change', changed);

});

gulp.task('default', ['compile:css', 'generate:docs', 'watch']);
