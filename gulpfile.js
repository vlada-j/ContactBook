var gulp	= require('gulp'),
//	sass	= require('gulp-sass'),
	cssmin	= require('gulp-minify-css'),
	concat	= require('gulp-concat'),
	rename	= require('gulp-rename'),
	uglify	= require('gulp-uglify'),
	size	= require('gulp-size'),
	del		= require('del'),
	seq		= require('run-sequence'),
	sh		= require('shelljs'),
	cordova	= require("cordova-lib").cordova,

	path	= {
		srcjs: ['src/**/*.js'],
		desjs: ''
	};


//--------------------------------------------------------------------------------------------------

// Set default task
gulp.task('default', ['build']);


//--------------------------------------------------------------------------------------------------

gulp.task('run', function(done) {
	seq('build', 'cordova-run', done);
});


//--------------------------------------------------------------------------------------------------

// Build cordova and run on device
gulp.task('cordova-run', function(done){
	var platform = process.argv[3];
	platform = platform === '--i' ? 'ios' : platform === '--w' ? 'windows' : 'android';

	cordova.run( {'platforms': [platform]}, done);
//	sh.exec('cordova run ' + platform, done);
});


//--------------------------------------------------------------------------------------------------

// Build app
gulp.task('build', function (callback) {
	var dev = process.argv.indexOf('--dev') > -1;
	if(dev) console.log('Dev Building...');

	seq('build-vendors', 'build-styles', 'build-js', callback);
});


//--------------------------------------------------------------------------------------------------

// Copy vendors
gulp.task('build-vendors', function () {
	gulp.src('src/lib/ionic/css/ionic.min.css')
		.pipe(concat('vendors.min.css'))
		.pipe(gulp.dest('www/css'));

	return gulp.src('src/lib/ionic/js/ionic.bundle.min.js')
		.pipe(concat('vendors.min.js'))
		.pipe(gulp.dest('www/js'));
});


//--------------------------------------------------------------------------------------------------

// Build styles
gulp.task('build-styles', function () {
	return gulp.src('src/css/*.css')
//		.pipe(sass())
		.pipe(concat('styles.min.css'))
		.pipe(cssmin())
		.pipe(gulp.dest('www/css'));
});


//--------------------------------------------------------------------------------------------------

// Build js
gulp.task('build-js', function () {
	var dev = process.argv.indexOf('--dev') > -1;

	var stream = gulp.src( path.srcjs )
		.pipe(concat('bundle.min.js'));

	stream = dev ? stream : stream.pipe(uglify());

	return stream.pipe(gulp.dest('www/js'));
});

//--------------------------------------------------------------------------------------------------

//
gulp.task('multi-task', function(callback) {
	seq('subtask', 'subtask2', callback);
});

gulp.task('clean', function(callback) {
	del('www', callback);
});

gulp.task('test', function(){
	console.log('process.argv', process.argv[3]);
	console.log('--zxc', getArg('--zxc'));
});

gulp.task('tt', ['test']);

function getArg(key) {
	var index = process.argv.indexOf(key);
	var next = process.argv[index + 1];
	return (index < 0) ? null : (!next || next[0] === "-") ? true : next;
}

/*

var livereload = require('gulp-livereload');

gulp.task('watch', function() {
	var livereloadServer = livereload();

	gulp.watch(paths["public"], ['copy_public']);
	gulp.watch(paths.scripts.app, ['scripts']);
	gulp.watch(paths.scripts.vendor, ['scripts']);
	gulp.watch(paths.styles, ['styles']);
	gulp.watch(paths.templates, ['templates']);

	return gulp.watch(destinations.livereload).on('change', function(file) {
		return livereloadServer.changed(file.path);
	});
});
*/
