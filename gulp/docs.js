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
                'undefined': 'Bourbon',
                flexed: 'Flexed'
            },
            basePath: 'https://github.com/ranjanaap/flexed/blob/4293ca33feb49015f576cda6c475337a36f09c3b/flexed/', // our git repo
        };

    return function () {

        gulp.src(['./flexed/**/*.scss'])
            .pipe(sassdoc(options));
    };
};
