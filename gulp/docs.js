module.exports = function (gulp, plugin) {

    'use strict';

    var sassdoc = require('sassdoc'),
        doctheme = require('sassdoc-theme-flippant'),
        options = {
            dest: 'docs',
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
            },
            basePath: 'https://github.com/ranjanaap/flexed/', // our git repo
        };

    return function () {

        gulp.src(['./flexed/**/*.scss'])
            .pipe(sassdoc(options));
    };
};
