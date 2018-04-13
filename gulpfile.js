const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const javascript = require('gulp-uglify');
const pump = require('pump');
const html = require('gulp-htmlmin');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

// Server
gulp.task('default', ['sass'], function() {

    browserSync.init({
        server: "./www"
    });

    gulp.watch("./scss/**/*.scss", ['sass']);
    gulp.watch("./www/js/*.js", ['compressJs']).on('change', browserSync.reload);
    gulp.watch("./www/*.html").on('change', browserSync.reload);
    gulp.watch("./*.html", ['compressHtml']);
});

// Sass Compile
gulp.task('sass', function() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass({ outputStyle: ['compressed'] }).on('error', sass.logError))
        .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
        .pipe(concat('main.min.css'))
        .pipe(gulp.dest('./www/css'))
        .pipe(browserSync.stream());
});

// Javascript Compress
gulp.task('compressJs', function(cb) {
    pump([
            gulp.src('./www/js/*.js'),
            javascript(),
            gulp.dest('./www/js/dist')

        ],
        cb
    );
});

// Html Compress
gulp.task('compressHtml', function() {
    return gulp.src('./*.html')
        .pipe(html({ collapseWhitespace: 'true' }))
        .pipe(gulp.dest('./www'));
});
// observar todos los HTML 
gulp.task('observarHtml', function() {
    gulp.watch('./*.html', ['compressHtml']);
});