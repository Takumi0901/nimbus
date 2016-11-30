var gulp = require('gulp'),
    postcss = require('gulp-postcss');

gulp.task('css', function() {
  var sourcemaps = require('gulp-sourcemaps');
  var rename = require("gulp-rename");
  var autoPrefixer = require('autoprefixer');
  var cssNano = require('cssnano');
  var customProperties = require('postcss-custom-properties');
  var postcssImport = require('postcss-import');
  var postcssNested = require('postcss-nested');
  var postcssCalc = require('postcss-calc');
  var postcssColorFunction = require('postcss-color-function');
  var postcssExtend = require('postcss-extend');
  var postcssMixins = require('postcss-mixins');


  var preprocessors = [
    postcssImport,
    autoPrefixer,
    customProperties,
    postcssCalc,
    postcssColorFunction,
    postcssExtend,
    postcssMixins,
    postcssNested,
    cssNano
  ];

  return gulp.src('./src/app.css')
    .pipe(sourcemaps.init())
    .pipe(postcss(preprocessors))
    .pipe(rename('app.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dest'));
});

/**
 * watch
 */
gulp.task('watch', function(){
    gulp.watch('./src/**/**.css', function(event) {
        gulp.run('css');
    });
});

gulp.task('default', function(){
    gulp.run('watch');
});
