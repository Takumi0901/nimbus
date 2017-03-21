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
    postcssMedia = require('postcss-custom-media'),
    postcssMixins = require('postcss-mixins'),
    postcssVars = require('postcss-simple-vars'),
    plumber = require('gulp-plumber'),
    reporter = require('postcss-reporter'),
    atVariables = require('postcss-at-rules-variables'),
    postcssFor = require('postcss-for'),
    cssNext = require('postcss-cssnext')
    scss = require('postcss-scss');


gulp.task('css', function() {
  var preProcessors = [
    postcssImport(),
    postcssNested(),
    cssNext()
  ];
  var postProcessors = [
    autoPrefixer
  ];

  return gulp.src('./src/**.pcss')
    .pipe(plumber())
    .pipe(postcss(preProcessors))
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
