var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css')
var less = require('gulp-less');;
var prefix = require('gulp-autoprefixer');

var paths = {
  scripts: [
    'public/javascripts/vendor/*.js',
    'public/javascripts/build/build/*.js',
    'public/javascripts/app/*.js'
  ],
  less: ['public/stylesheets/app/base.less']
};

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/javascripts'));
});

gulp.task('less', function() {
  return gulp.src(paths.less)
    .pipe(less({ paths: paths.less }))
    .pipe(concat('style.css'))
    .pipe(prefix({ cascade: true }))
    .pipe(gulp.dest('public/stylesheets'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch('public/stylesheets/app/*.less', ['less']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts', 'less', 'watch']);