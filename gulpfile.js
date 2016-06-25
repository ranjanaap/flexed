var gulp = require('gulp'),
    sassdoc = require('sassdoc'),
    doctheme = require('sassdoc-theme-flippant'),
    plugin = require('gulp-load-plugins')({ //this loads all plugins so no need to reload them in individual scripts
        rename: {

        }
    });

gulp.task('compile:css', require('./gulp/scss')(gulp, plugin));

gulp.task('watch', function () {
    'use strict';

    var scss = gulp.watch('./src/**/*', ['compile:css']),
        changed = function (event) {
            console.log('File ' + event.path + ' was ' + event.type + '. Running tasks...');
        };

    scss.on('change', changed);

});

gulp.task('sassdoc', function () {
    var options = {
        dest: 'docs',
        verbose: true,
        theme: doctheme,
        display: {
            access: ['public', 'private'],
            alias: true,
            watermark: true,
        },
        groups: {
            'undefined': 'Bourbon',
            flexed: 'Flexed'
        },
        basePath: 'https://github.com/SassDoc/sassdoc', // our git repo
    };

    return gulp.src(['./src/bourbon5/**/*.scss','./src/_flexed.scss'])
        .pipe(sassdoc(options));
});

gulp.task('default', ['compile:css', 'watch']);