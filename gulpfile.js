const   gulp = require('gulp'),
        sass = require('gulp-sass'),
        cleanCSS = require('gulp-clean-css');

gulp.task('styles', () => {
    return gulp.src('./sass/styles.scss')
    .pipe(sass())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', () => {
    gulp.watch('./sass/**/*.scss', ['styles']);
});

gulp.task('default', ['styles']);