/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/
var fs = require('fs'), vm = require('vm'), merge = require('deeply'),
 chalk = require('chalk'), es = require('event-stream');

var gulp = require('gulp'), rjs = require('gulp-requirejs-bundler'),
    concat = require('gulp-concat'), clean = require('gulp-clean'),
    replace = require('gulp-replace'), uglify = require('gulp-uglify');

// Config
var requireJsRuntimeConfig = vm.runInNewContext(fs.readFileSync('wwwroot/app/require.config.js') + '; require;');
requireJsOptimizerConfig = merge(requireJsRuntimeConfig, {
    out: 'site.js',
    baseUrl: './wwwroot',
    name: 'app/startup',
    paths: {
        requireLib: 'lib/requirejs/require'
    },
    include: [
        'requireLib',
        'components/nav-bar/nav-bar',
        'components/home-page/home',
        'text!components/about-page/about.html'
    ],
    insertRequire: ['app/startup'],
    bundles: {
        // If you want parts of the site to load on demand, remove them from the 'include' list
        // above, and group them into bundles here.
        // 'bundle-name': [ 'some/module', 'another/module' ],
        // 'another-bundle-name': [ 'yet-another-module' ]
    }
});

// Discovers all AMD dependencies, concatenates together all required .js files, minifies them
gulp.task('js', function () {
    return rjs(requireJsOptimizerConfig)
        .pipe(gulp.dest('./wwwroot/js'));
});

gulp.task('default', ['js'], function(callback) {
    // place code for your default task here
    callback();
});