/*Gulp modules
 * */

var gulp 		= require('gulp'),
	bundle = require('gulp-bundle-assets');

/*Gulp Tasks*/

/*This task creates a bundle of all js files*/
gulp.task('bundle', function() {
	  return gulp.src('./bundle.config.js')
	    .pipe(bundle())
	    .pipe(gulp.dest('./src/bundled'));
	});