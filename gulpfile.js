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
  css: [
    'public/stylesheets/app/*.css',
    'public/stylesheets/vendor/*.css'
  ]
};

gulp.task('templates', function(){
  gulp.src(['./templates/partials/*.hbs'])
    .pipe(handlebars())
    .pipe(defineModule('node'))
    .pipe(gulp.dest('./compiled_templates'));
});

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(concat('build.js'))
    .pipe(uglify())
    .pipe(rename('build.min.js'))
    .pipe(gulp.dest('./public/build'));
});

gulp.task('less', function() {
  return gulp.src('public/stylesheets/app/base.less')
    .pipe(less())
    .pipe(prefix({ cascade: true }))
    .pipe(rename('app.css'))
    .pipe(gulp.dest('./public/stylesheets/app'));
});

gulp.task('styles', function() {
  return gulp.src(paths.css)
    .pipe(concat('build.css'))
    .pipe(minifyCSS({
      keepSpecialComments: false
    }))
    .pipe(rename('build.min.css'))
    .pipe(gulp.dest('./public/build'));
});

gulp.task('build-static-index', function () {
  var templateData = {};
  var options = {
  // ignorePartials: true, // ignores the unknown partial in the handlebars template, defaults to false
    partials : {
      header: require('./compiled_templates/header.js')(),
      nav: require('./compiled_templates/nav.js')(),
      footer: require('./compiled_templates/footer.js')(),
      section_demo: require('./compiled_templates/section_demo.js')(),
      section_get_started: require('./compiled_templates/section_get_started.js')(),
      section_docs: require('./compiled_templates/section_docs.js')()
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
  gulp.watch(['public/stylesheets/**/*.less', 'public/stylesheets/**/*.css'] ['less', 'styles']);
  gulp.watch(['templates/*.hbs', 'templates/partials/*.hbs'], ['templates', 'build-static-index']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts', 'less', 'styles', 'templates', 'build-static-index', 'watch']);