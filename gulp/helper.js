'use strict';

module.exports = (function() {
    var gulp = require('gulp');
    var del = require('del');
    var notify = require('gulp-notify');
    var extendify = require('extendify');
    var merge = require('merge-stream');
    var cheerio = require('gulp-cheerio');
    var browserSync = require('browser-sync').create();
    var $ = require('gulp-load-plugins')();


  var arrayMergeExtend = extendify({
      inPlace: false,
      isDeep: true
    }),
    arrayReplaceExtend = extendify({
      inPlace: false,
      isDeep: true,
      arrays : 'replace'
    }),
    arrayConcatExtend = extendify({
      inPlace: false,
      isDeep: true,
      arrays : 'concat'
    });

    var helper = {
      arrayMergeExtend : arrayMergeExtend,
      arrayReplaceExtend : arrayReplaceExtend,
      arrayConcatExtend : arrayConcatExtend,
      log : log,
      bulkCopy : bulkCopy,
      htmlEdit : htmlEdit,
      clean :clean,
      watch : watch,
      startBrowserSync : startBrowserSync,
      inject : inject,
      errorHandler : errorhandler,
      orderSrc : orderSrc,
      bytediffFormatter : bytediffFormatter
    };

  return helper;

    /**
     * Log a message or series of messages using chalk's blue color.
     * Can pass in a string, object or array.
     */
    function log(msg) {
        if (typeof(msg) === 'object') {
            for (var item in msg) {
                if (msg.hasOwnProperty(item)) {
                    $.util.log($.util.colors.lightblue(msg[item]));
                }
            }
        } else {
            $.util.log($.util.colors.blue(msg));
        }
    }

    /**/
    function bulkCopy(copyArray, done) {
        log('Performing bulk copy: ' + $.util.colors.blue(copyArray.length) + ' tasks');
        var merged = merge();

        for(var i = 0; i<=copyArray.length-1; i++) {
            log('copy '+ ((copyArray[i].name)?copyArray[i].name:'') +' files from '+ copyArray[i].src +' to '+ copyArray[i].dest);
            var move = gulp.src(copyArray[i].src)
                .pipe(gulp.dest(copyArray[i].dest));

            merged.add(move);
        }

        return merged;
    }


    function htmlEdit(src,dest,callback,done) {
        return gulp.src(src)
            .pipe(cheerio(function ($, file, done) {
                callback($);
                done();
            }))
            .pipe(gulp.dest(dest));
    }


    /**
     * Delete all files in a given path
     * @param  {Array}    path - array of paths to delete
     * @param  {Function} done - callback when complete
     */
    function clean(path, done) {
        log('Cleaning: ' + $.util.colors.blue(path));
        return del(path, done);
    }


    function watch(src, tasks) {
        log('watch: ' + $.util.colors.blue(src));
        return gulp.watch(src, tasks);
    }

  /**
   * Start BrowserSync
   */
  function startBrowserSync(baseDir, options) {

    baseDir = (baseDir)?baseDir:'./src';

    var options = {
      port: 8010,
      server: {
        baseDir: baseDir
      },
      reloadDelay: 1000
    } ;

    log('Starting BrowserSync on port ' + options.port);

    browserSync.init(options);

  }

    /**
     * Inject files in a sorted sequence at a specified inject label
     * @param   {Array}  src   glob pattern for source files
     * @param   {String} label The label name
     * @param   {Array}  order glob pattern for sort order of the files
     * @returns {Stream} The stream
     */
   function inject(src, label, order) {
        var options = { read: false, relative : true};
        if (label) {
            options.name = 'inject:' + label;
        }

        return $.inject(orderSrc(src, order), options);
    }

   function errorhandler(title) {

        return notify.onError({
            title: title + ' error(s)',
            message: '<%= error.message %>'
        });
    }


    /**
     * Order a stream
     * @param   {Stream} src   The gulp.src stream
     * @param   {Array}  order Glob array pattern
     * @returns {Stream} The ordered stream
     *
     *
     */
    function orderSrc (src, order) {
        //order = order || ['**\/*'];
        return gulp
            .src(src)
            .pipe($.if(order, $.order(order)));
    }

  /**
     * Formatter for bytediff to display the size changes after processing
     * @param  {Object} data - byte data
     * @return {String} Difference in bytes, formatted
     */
   function bytediffFormatter(data) {
        var difference = (data.savings > 0) ? ' smaller.' : ' larger.';
        return data.fileName + ' went from '
            + (data.startSize / 1000).toFixed(2) + ' kB to '
            + (data.endSize / 1000).toFixed(2) + ' kB and is '
            + formatPercent(1 - data.percent, 2) + '%' + difference;
    }

    /**
     * Format a number as a percentage
     * @param  {Number} num       Number to format as a percent
     * @param  {Number} precision Precision of the decimal
     * @return {String} Formatted perentage
     */
    function formatPercent(num, precision) {
        return (num * 100).toFixed(precision);
    }

})();
