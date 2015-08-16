var gulp = require('gulp');
var gm = require('gulp-gm');
var clean = require('gulp-clean');

gulp.task('clean', function () {
  return gulp.src('./dist', {read: false})
          .pipe(clean());
});

gulp.task('default', ['clean'], function () {
  gulp.src('./cards/**/*.svg')
      .pipe(gm(function (gmfile) {
          return gmfile.setFormat('png');
      }))
      .pipe(gulp.dest('./dist'));
});