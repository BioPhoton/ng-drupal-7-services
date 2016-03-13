/**
 *  This file contains the variables used in other gulp files
 *  which defines tasks
 */
'use strict';

module.exports = (function() {

    //dir paths
    var root = './',
        buildFolder = root+'dist/',
        resources = root+'resources/',
        bower = {
            json: require('../bower.json'),
            directory: './bower_components/',
            ignorePath: '../../'
        },
        src = './src/',
        //optional wrapper folder here (src+'client/')
        client = src,
        app = 'app/',
        assetsFolder = 'assets/',
        clientAssets = client + assetsFolder,
        baseDirs = ['./', client],
        clientApp = client + app,

        assetsFontsFolder = 'fonts/',
        assetsImagesFolder = 'images/',
        indexFileName = 'index.html';


    //file copy sets
    var fontCopies = [
        {
            src:bower.directory + 'font-awesome/fonts/**.*',
            dest:clientAssets + assetsFontsFolder + 'fontawesome',
            name : 'fontawesome'
        },
        {
            src:bower.directory + 'bootstrap-sass/assets/fonts/bootstrap/**.*',
            dest:clientAssets + assetsFontsFolder + 'bootstrap',
            name : 'bootstrap'
        },
    ];

    var imageCopies = [
            {
                src:[
                    resources+assetsImagesFolder+'default-avatar.jpg'
                ],
                dest:clientAssets +assetsImagesFolder,
                name : 'defaultImages'
            }
        ];

    var staticBuildCopies = [
        {
            src:[
                clientAssets+assetsImagesFolder+'**/*.*',
            ],
            dest:buildFolder + assetsFolder + assetsImagesFolder,
            name : 'assetImages'
        },
        {
            src:[
                clientAssets+assetsFontsFolder+'**/*.*',
            ],
            dest:buildFolder + assetsFolder + assetsFontsFolder,
            name : 'assetFonts'
        }
    ];

    //default envs
    var env = {
        local : 'local',
        staging : 'staging',
        live : 'live'
    };

    var config = {
        app : app,
        clientApp : clientApp,
        styles : {
            fontCopies : fontCopies,
            imageCopies : imageCopies
        },
        //templateCache : {},
        inject : {
            injectJsSrc : ['./app.js'],
            injectJsOrder: [
                '**/app/app.js',
                '**/app/*.js',
                '**/app/**/*.js',
                '**/assets/html/tempaltes.js'
            ]
        },
        manifest : {
            //manifestCopies : fontCopies.concat(imageCopies),
        },
        build : {
            staticBuildCopies : staticBuildCopies
        },
        env:env,
        //versioConfig : {},
        root : root,
        baseDirs:baseDirs,
        client: client,
        buildFolder: buildFolder,
        resources : resources,
        assetsFolder : assetsFolder,
        clientAssets : clientAssets,
        index: client + indexFileName,

        /**
         * browser sync
         */
        browserReloadDelay: 1000,

        /**
         * Bower and NPM files
         */
        bower: bower,

    };

    return config;

    ////////////////

})();
