/**
 *  This file contains the variables used in other gulp files
 *  which defines tasks
 */
'use strict';

module.exports = (function() {

    //dir paths
    var root = './',
        buildFolder = root+'dist/',
        src = root+'src/',
        packageName = 'ng-drupal-7-services.js'
      ;

    var config = {
        root : root,
        src : src,
        build : {
            buildFolder: buildFolder,
            packageName : packageName
        }
    };

    return config;

    ////////////////

})();
