var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var ngHtml2Js = require('gulp-ng-html2js');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var del = require('del');

gulp.task('default',['cleanup', 'vendorStyle'], function() {
  return gulp.src('app/index.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('dist/'));
});

gulp.task('style',['vendorStyle'], function(){
  return gulp.src('app/style/**/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('./dist/'));
})

gulp.task('vendorStyle',['fonts'], function(){
  return gulp.src([
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/font-awesome/css/font-awesome.min.css'
  ])
  .pipe(concat('vendor.min.css'))
  .pipe(gulp.dest('./dist/'));
})

gulp.task('fonts', function(){
  gulp.src('node_modules/font-awesome/fonts/**')
    .pipe(gulp.dest('./dist/fonts'));
})
gulp.task('cleanup', function(){
  del.sync(['dist/**/*.js', 'dist/**/*.css', '!dist/app/vendor.min.js']);
})
