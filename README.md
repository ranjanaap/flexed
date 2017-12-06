# flexed

Online Docs: https://ranjanaap.github.io/flexed/docs

### Install

```scss
npm install flexed --save
```

### Stylesheet usage

Use either method above or for your chosen task runner (gulp.js, Grunt, etc.), then in your stylesheet:

```scss
@import "flexed";
```

## gulp.js Usage

Using the [gulp-sass](https://github.com/dlmanning/gulp-sass) plugin.

```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('path/to/input.scss')
    .pipe(sass({
      // includePaths: require('flexed').with('other/path', 'another/path')
      // - or -
      includePaths: require('flexed').includePaths
    }))
    .pipe(gulp.dest('path/to/output.css'));
});
```

## Grunt Usage

### Using *grunt-sass*

The [grunt-sass](https://github.com/sindresorhus/grunt-sass) task uses
[node-sass](https://github.com/andrew/node-sass)
([LibSass](https://github.com/hcatlin/libsass)) underneath, and is the recommended
way to use Grunt with flexed.

Example config:

```javascript
grunt.initConfig({
  sass: {
    dist: {
      options: {
        // includePaths: require('flexed').with('other/path', 'another/path')
        // - or -
        includePaths: require('flexed').includePaths
      },
      files: {
        'path/to/output.css': 'path/to/input.scss'
      }
    }
  }
});
```
