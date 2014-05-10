var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');

var paths = {
  scripts: ['public/javascripts/app/build/*.js'],
  styles: ['public/stylesheets/vendor/*.css', 'public/javascripts/app/build/*.css']
};

gulp.task('scripts', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  return gulp.src(paths.scripts)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/javascripts'));
});

gulp.task('styles', function() {
  return gulp.src(paths.styles)
    .pipe(concat('style.css'))
    .pipe(gulp.dest('public/stylesheets'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.styles, ['styles']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts', 'styles', 'watch']);