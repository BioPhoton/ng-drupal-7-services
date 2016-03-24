'use strict';

var gulp = require('gulp'),
    args = require('yargs').argv,
    helper = require('./helper'),
    $ = require('gulp-load-plugins')();

var config = require('../config');

var defaultConfig = {
    root : config.root,
    packages :  [
        './package.json',
        './bower.json',
        //'./manifest.json'
    ]
};

//////////////////


var  versionConfig = defaultConfig;

/**
 *  Overrides
 *
 *  config.styles {[see defaultConfig here]}
 *
 **/

if('versionConfig' in config) {
    versionConfig = helper.arrayConcatExtend(defaultConfig, config.versionConfig);
}

//__________________________________________________________________________________________________

/**
 * Bump the version
 * --type=pre will bump the prerelease version *.*.*-x
 * --type=patch or no flag will bump the patch version *.*.x
 * --type=minor will bump the minor version *.x.*
 * --type=major will bump the major version x.*.*
 * --version=1.2.3 will bump to a specific version and ignore other flags
 */
gulp.task('bump', function(done) {
    var msg = 'Bumping versions ',
        type = args.type,
        version = args.version,
        options = {};

    if (version) {
        options.version = version;
        msg += 'to ' + version;
    } else {
        if(type != undefined) {
            options.type = type;
            msg += 'for a ' + type;
        }
        else {
            helper.log('No param to bump version to. Task stopped!');
            return;
        }
    }

    helper.log(msg);

    return gulp
        .src(versionConfig.packages)
        .pipe($.print())
        .pipe($.bump(options))
        .pipe(gulp.dest(versionConfig.root), done);
});