'use strict';

var gulp = require('gulp');
var helper = require('./helper');
var $ = require('gulp-load-plugins')();

var config = require('../config');

var defaultConfig = {
  srcFolder : config.srcFolder,
};

////////////////


/**
 *  Overrides
 *
 * config.build {[see defaultConfig here]}
 *
 **/
var buildConfig = defaultConfig;

if('build' in config) {
  buildConfig = helper.arrayConcatExtend(defaultConfig, config.build);
}

//__________________________________________________________________________________________________


////////////////////////


gulp.task('optimize:js',['clean-build'], function(done) {

  return gulp.src(buildConfig.srcFolder+'**/*.js')
      .pipe($.sourcemaps.init())
    // getBundleName creates a cache busting name
      .pipe($.concat(buildConfig.packageName))
      .pipe($.uglify())
      .pipe($.sourcemaps.write('./maps'))
      .pipe(gulp.dest(buildConfig.buildFolder))
      .on('error', function(error) {
        console.log(error);
      });

});

/**
 * Remove all fonts from the build folder
 * @param  {Function} done - callback when complete
 */
gulp.task('clean-build', function(done) {
  return helper.clean(buildConfig.buildFolder + '**/*.*', done);
});


