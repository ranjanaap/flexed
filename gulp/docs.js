module.exports = function (gulp, plugin) {

    'use strict';

    var sassdoc = require('sassdoc'),
        options = {
            dest: 'docs',
            verbose: true,
            theme: plugin.flippant,
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

    return function () {

        gulp.src(['./src/bourbon5/**/*.scss','./src/_flexed.scss'])
            .pipe(sassdoc(options));
    };
};
