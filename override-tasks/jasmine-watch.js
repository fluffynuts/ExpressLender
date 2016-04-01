var gulp = require('gulp')
    watch = require('gulp-watch'),
    jasmineRunner = require('gulp-jasmine'),
    gutil = require('gulp-util');

var entry = 'source/server.js';
var sourcePath = 'source/server/**/*.js';
var specPath = 'source/spec/server/**/*.js';

var runTests = function(dieOnError) {
    try {
        gulp.src(specPath)
            .pipe(jasmineRunner())
            .on('error', function(err) {
                if (dieOnError) {
                    throw err;
                }
            });
    } catch (e) {
        gutil.log('EPIC FAIL: ' + e);
        gutil.beep();       
    }
};
gulp.task('jasmine-watch', function() {
    runTests(false);
    watch([entry, sourcePath, specPath], function() {
        runTests(false);
    });
});

gulp.task('jasmine', function() {
    runTests(true);
});
