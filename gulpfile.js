const gulp = require('gulp');
const sass = require('gulp-sass');
const clean_css = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('static', function (cb) {
    gulp.src('./node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest('./public/fonts/'));

    gulp.src('./src/assets/images/*').pipe(gulp.dest('./public/images/'));
    gulp.src('./src/index.html').pipe(gulp.dest('./public/'));

    cb();
});

gulp.task('css', function (cb) {
    gulp.src('./src/assets/css/index.scss')
        .pipe(sass().on('error', sass.logError))
        //.pipe(rename('index.bundle.css'))
        //.pipe(gulp.dest('./public/css/'))
        .pipe(clean_css())
        .pipe(rename('index.bundle.min.css'))
        .pipe(gulp.dest('./public/css/'));
    cb();
});

gulp.task('default', gulp.parallel(['static', 'css']));