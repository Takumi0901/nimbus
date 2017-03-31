var gulp = require('gulp'),
    uglify = require("gulp-uglify"),
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

  return gulp.src('./src/css/**.pcss')
    .pipe(plumber())
    .pipe(postcss(preProcessors))
    .pipe(sourcemaps.init())
    .pipe(postcss([cssNano]))
    .pipe(rename('app.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./docs/css'))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('js:base', function() {
  return gulp.src('./src/js/**.js')
    .pipe(plumber())
    .pipe(gulp.dest('./assets/js'));
});

gulp.task('js:min', ['js:base'], function() {
  return gulp.src('./src/js/common.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(rename('common.min.js'))
    .pipe(gulp.dest('./docs/js'))
    .pipe(gulp.dest('./assets/js'));
});

gulp.task('js', ['js:base', 'js:min']);

/**
 * watch
 */
gulp.task('watch', function(){
  gulp.watch('./src/css/**/**/**.pcss', function(event) {
      gulp.run('css');
  });
  gulp.watch('./src/js/**.js', function(event) {
    gulp.run('js');
  });
});

gulp.task('default', function(){
    gulp.run('watch');
});
