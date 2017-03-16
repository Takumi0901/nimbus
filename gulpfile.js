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
    postcssMedia = require('postcss-custom-media'),
    postcssMixins = require('postcss-mixins'),
    postcssVars = require('postcss-simple-vars'),
    plumber = require('gulp-plumber'),
    stylelint = require('stylelint'),
    stylefmt = require('stylefmt'),
    reporter = require('postcss-reporter');


gulp.task('css', function() {
  var preProcessors = [
    plumber,
    postcssVars,
    postcssImport,
    customProperties,
    postcssMixins,
    postcssCalc,
    postcssColorFunction,
    postcssMedia,
    postcssNested
  ];
  var postProcessors = [
    autoPrefixer
  ];

  return gulp.src('./src/**.pcss')
    .pipe(postcss(preProcessors))
    .pipe(postcss(postProcessors))
    .pipe(sourcemaps.init())
    // .pipe(postcss([cssNano]))
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
