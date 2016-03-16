/**
 *  This file contains the variables used in other gulp files
 *  which defines tasks
 */
'use strict';

module.exports = (function() {

    //dir paths
    var root = './',
        srcFolder = root+'src/',

        buildFolder = root+'dist/',
        packageName = 'ng-drupal-7-services.js',

        docsFolder = root+'docs/';

    var config = {
        root : root,
        srcFolder : srcFolder,
        ngdoc : {
            docsFolder : docsFolder
        },
        build : {
            buildFolder: buildFolder,
            packageName : packageName
        }
    };

    return config;

    ////////////////

})();
