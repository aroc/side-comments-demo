var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var less = require('gulp-less');;
var prefix = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var handlebars = require('gulp-handlebars');
var compileHandlebars = require('gulp-compile-handlebars');
var defineModule = require('gulp-define-module');
var minifyCSS = require('gulp-minify-css');

var paths = {
  scripts: [
    'public/javascripts/vendor/*.js',
    'public/javascripts/app/*.js'
  ],
  less: 'public/stylesheets/app/base.less'
};

gulp.task('templates', function(){
  gulp.src(['./templates/partials/*.hbs'])
    .pipe(handlebars())
    .pipe(defineModule('node'))
    .pipe(gulp.dest('build/templates/'));
});

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(concat('build.js'))
    .pipe(uglify())
    .pipe(rename('build.min.js'))
    .pipe(gulp.dest('./build'));
});

gulp.task('less', function() {
  return gulp.src(paths.less)
    .pipe(less({ paths: paths.less }))
    .pipe(prefix({ cascade: true }))
    .pipe(minifyCSS())
    .pipe(rename('build.min.css'))
    .pipe(gulp.dest('./build'));
});

gulp.task('build-static-index', function () {
  var templateData = {};
  var options = {
  // ignorePartials: true, // ignores the unknown partial in the handlebars template, defaults to false
    partials : {
      header: require('./build/templates/header.js')(),
      nav: require('./build/templates/nav.js')(),
      footer: require('./build/templates/footer.js')(),
      section_demo: require('./build/templates/section_demo.js')(),
      section_get_started: require('./build/templates/section_get_started.js')(),
      section_docs: require('./build/templates/section_docs.js')()
    }
  };

  return gulp.src('templates/main.hbs')
    .pipe(compileHandlebars(templateData, options))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch('public/stylesheets/app/*.less', ['less']);
  gulp.watch(['templates/*.hbs', 'templates/partials/*.hbs'], ['templates', 'build-static-index']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts', 'less', 'templates', 'build-static-index', 'watch']);