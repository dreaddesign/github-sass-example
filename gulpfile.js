/*
npm install
npm install gulp
npm install gulp-uglify
npm install gulp-concat
npm install gulp-sass
npm install gulp-uglifycss
npm install gulp-autoprefixer
gulp scripts
gulp sass
gulp mybdc
gulp filter-widget
gulp recently-viewed-form
gulp compress-css
*/
/* Tasks to be performed on deployment*/
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
var outputStyle = 'expanded';
//Inventory SASS Compile
var input = 'plugins/ft-inventory/sass/**\/*.scss';
var output = 'plugins/ft-inventory/css';
var sassOptions = {
  errLogToConsole: true,
  outputStyle: outputStyle,
  sourceComments: true
};


gulp.task('watch', function() {
  gulp.watch('./sass/**\/*.sass', ['watch-inventory']);
});

gulp.task('watch-inventory', function() {
  return gulp.src('sass/**\/*.scss')
    .pipe(sass(sassOptions))
    .on('error', function (err) {
      console.log(err.toString());
      this.emit('end');
    })
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./dist'));
});