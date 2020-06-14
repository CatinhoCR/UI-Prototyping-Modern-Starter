'use strict';

var gulp  = require('gulp');
var browserSync  = require('browser-sync');

gulp.task('browser-sync', ['build'], () => {
  browserSync({
    server: {
      baseDir: 'dist'
    }
  });
});