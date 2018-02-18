var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Static server on port 8080
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }, port: 8080
    });
});

// Starts browserSync Server and Watches files
gulp.task('dev', ['browser-sync'], function () {
    gulp.watch("js/**/*.js").on('change', browserSync.reload);
    gulp.watch("components/**/*.*").on('change', browserSync.reload);
    gulp.watch("css/**/*.css").on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
});
