var gulp = require('gulp');
var flatten = require('gulp-flatten');
var notify = require('gulp-notify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var webserver = require('gulp-webserver');
var autoprefixer = require('gulp-autoprefixer');

// Task for moving index.html 
gulp.task('move-index', function(){

	//	Set the source
	gulp.src(['./src/index.html'])
	//	Pipe it and store it in the dist folder
	.pipe(gulp.dest('./dist'))
	//	Notify the user
	.pipe(notify('Moved index.html'));

});

// Task for moving html templates to the dist folder
gulp.task('move', function(){

	// Set the source. You can exclude files with !
	gulp.src(['!./src/index.html', './src/components/**/*.html'])
	// Remove any relative folders, subfolders
	.pipe(flatten())
	.pipe(gulp.dest('./dist/templates'))
	.pipe(notify('Moved templates'));

});

// Move vendor files
gulp.task('vendor', function(){
	//	Set the source of files
	var ng_files = [
    './bower_components/angular/angular.min.js',
    './bower_components/angular-ui-router/release/angular-ui-router.min.js',
    './src/tl.min.js'
  ];
	gulp.src(ng_files)
	//	Pipe it and store it in the dist folder
	.pipe(gulp.dest('./dist/js'))
	//	Notify the user
	.pipe(notify('Moved Vendor files'));

});

//	Task for concating and moving all js files
gulp.task('scripts', function(){

	gulp.src(['./src/app.js', './src/**/*.js', '!./src/tl.min.js'])
	// Concat all the js files into a single all.js file
	.pipe(concat('all.js'))
	.pipe(gulp.dest('./dist/js'))
	.pipe(notify('Generated all.js'));

});

//	Task for compiling SASS
gulp.task('sass', function () {
  gulp.src('./src/style.sass')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
  .pipe(gulp.dest('./dist/css'))
	.pipe(notify('Compiled CSS'));
});

//	Task for compiling Boostrap
gulp.task('bootstrap', function () {
  gulp.src('./src/bootstrap.scss')
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(rename(function (path) {
		path.basename += ".min";
		path.extname = ".css"
	}))
  .pipe(gulp.dest('./dist/css'))
	.pipe(notify('Compiled Minified Bootstrap'));
});

//	Task for running a webserver
gulp.task('serve', function(){

	gulp.src('.')
	// Start a webserver with livereload on localhost:48080
	.pipe(webserver({
		port: 48080,
		livereload: true,
		open: 'http://localhost:48080/dist/'
	}));

});

//	Task for running watchers. When watch is called
//	the serve task will be called as well
gulp.task('default', ['serve'], function(){

	//	Run tasks on start
	gulp.start(['move-index', 'move', 'vendor', 'scripts', 'sass', 'bootstrap']);

	//	Create a watcher that will run the scripts task
	//	anytime a .js file changes
	gulp.watch(['./src/**/*.js'], ['scripts']);
  gulp.watch(['./src/**/*.html'], ['move-index', 'move']);
  gulp.watch(['./src/**/*.sass'], ['sass']);
  gulp.watch(['./src/**/*.scss'], ['bootstrap']);
});




















