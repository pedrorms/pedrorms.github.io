let gulp = require('gulp');
let imagemin = require('gulp-imagemin');
let usemin = require('gulp-usemin');
let uglify = require('gulp-uglify');
let cssmin = require('gulp-cssmin');
let pug = require('gulp-pug');
let stylus = require('gulp-stylus');

gulp.task('default', ['imagemin', 'pug', 'stylus', 'usemin', 'fonts']);

gulp.task('fonts', () => {
  gulp
    .src('node_modules/font-awesome/fonts/fontawesome-*')
    .pipe(gulp.dest('fonts/'))
});

gulp.task('imagemin', () => {
  gulp
    .src('src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('img'));
});

gulp.task('pug', () => {
  gulp
    .src('src/**/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('src'));
});

gulp.task('stylus', () => {
  gulp
    .src('src/**/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('src'));
});

gulp.task('usemin', () => {
  gulp
    .src('src/**/*.html')
    .pipe(usemin({
      js: [uglify],
      css: [cssmin]
    }))
    .pipe(gulp.dest('./'));
});