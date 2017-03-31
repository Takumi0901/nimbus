var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require("gulp-rename"),
    cssNano = require('cssnano'),
    postcssImport = require('postcss-import'),
    plumber = require('gulp-plumber'),
    cssNext = require('postcss-cssnext');


gulp.task('css', function() {
  var preProcessors = [
    postcssImport(),
    cssNext()
  ];

  return gulp.src('./src/**.pcss')
    .pipe(plumber())
    .pipe(postcss(preProcessors))
    .pipe(sourcemaps.init())
    .pipe(postcss([cssNano]))
    .pipe(rename('app.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./assets/css'));
});

/**
 * watch
 */
gulp.task('watch', function(){
    gulp.watch('./src/**/**/**.pcss', function(event) {
        gulp.run('css');
    });
});

gulp.task('default', function(){
    gulp.run('watch');
});
