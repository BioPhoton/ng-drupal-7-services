'use strict';

var gulp = require('gulp');
var args = require('yargs').argv;
var helper = require('./helper');
var gulpDocs = require('gulp-ngdocs');
var $ = require('gulp-load-plugins')();


var config = require('../config'),
  srcFolder = config.srcFolder,
  desFolder = './docs';

var defaultConfig = {
  srcFolder :srcFolder,
  desFolder : desFolder,
  options : {
    //scripts: [docsConfig.srcFolder+'**/*.js'],
    //html5Mode: true,
    //startPage: '/api',
    //title: "My Awesome Docs",
    //image: "path/to/my/image.png",
    //imageLink: "http://my-domain.com",
    //titleLink: "/api"
  }
};

////////////////


/**
 *  Overrides
 *
 * config.inject {[see defaultConfig here]}
 *
 **/
var jsDocConfig = defaultConfig;

if('ngdoc' in config) {
  jsDocConfig = helper.arrayConcatExtend(defaultConfig, config.ngdoc);
}

//__________________________________________________________________________________________________


////////////////

gulp.task('ngdocs', [], function () {

  return gulp.src(jsDocConfig.srcFolder + '**/*.js')
    .pipe(gulpDocs.process(jsDocConfig.options))
    .pipe(gulp.dest(jsDocConfig.desFolder));
});

gulp.task('serve-ngdocs',['ngdocs'], function (done) {
   helper.startBrowserSync(jsDocConfig.desFolder);
});