var gulp = require('gulp'),
    server = require('gulp-express'),
    open = require('gulp-open'),
    config = require('../source/config'),
    browserSync = require('browser-sync');
    
gulp.task('express-server', function() {
    server.run(['source/server.js']);
    gulp.watch(['source/server/**/*.js'], ['jshint']);
    gulp.watch(['source/server/routes/**/*.js'], [server.run]);
    

});

gulp.task('serve', ['express-server'], function() {
    browserSync.init(null, {
            proxy: 'http://localhost:' + config.port,
            files: ['source/public/**/*.*'],
            browser: 'google chrome',
            port: 4444
    })
});

