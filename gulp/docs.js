module.exports = function (gulp, plugin) {

    'use strict';

    var sassdoc = require('sassdoc'),
        doctheme = require('sassdoc-theme-herman'),
        options = {
            dest: 'dist/docs',
            verbose: true,
            theme: doctheme,
            display: {
                access: ['public', 'private'],
                alias: true,
                watermark: true,
            },
            groups: {
                'undefined': 'Flexed',
                flexed: 'Flexed'
            }
        };

    return function () {

        gulp.src(['./flexed/**/*.scss'])
            .pipe(sassdoc(options));
    };
};
