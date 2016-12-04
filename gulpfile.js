var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require("gulp-rename"),
    autoPrefixer = require('autoprefixer'),
    cssNano = require('cssnano'),
    customProperties = require('postcss-custom-properties'),
    postcssImport = require('postcss-import'),
    postcssNested = require('postcss-nested'),
    postcssCalc = require('postcss-calc'),
    postcssColorFunction = require('postcss-color-function'),
    postcssExtend = require('postcss-extend'),
    postcssMixins = require('postcss-mixins');


gulp.task('css', function() {
  var preProcessors = [
    postcssImport,
    customProperties,
    postcssCalc,
    postcssColorFunction,
    postcssExtend,
    postcssMixins,
    postcssNested,
  ];
  var postProcessors = [
    autoPrefixer
  ];

  return gulp.src('./src/**.css')
    .pipe(postcss(preProcessors))
    .pipe(postcss(postProcessors))
    .pipe(gulp.dest('./dest/css'));
});

gulp.task('css:min', function() {

  return gulp.src('./dest/css/app.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([cssNano]))
    .pipe(rename('app.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/css'));
});

/**
 * watch
 */
gulp.task('watch', function(){
    gulp.watch('./src/**/**.css', function(event) {
        gulp.run('css');
    });
    gulp.watch('./dest/css/**.css', function(event) {
        gulp.run('css:min');
    });
});

gulp.task('default', function(){
    gulp.run('watch');
});
