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

/*
gulp.task('watch', function() {
  gulp.watch('./plugins/ft-inventory/sass/**\/*.sass', ['watch-inventory']);
});

gulp.task('watch-inventory', function() {
  return gulp.src('./plugins/ft-inventory/sass/**\/*.scss')
    .pipe(sass(sassOptions))
    .on('error', function (err) {
      console.log(err.toString());

      this.emit('end');
    })
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./plugins/ft-inventory/css'));
});
*/
gulp.task('compress-css', function () {

  var paths = [
    //themes
    'themes/**/*.css',
    //specific
    'plugins/**/css/*.css',
    'plugins/stream-specials/css/vendor/*.css'
  ];

  return gulp.src(paths, { base: "./"})
    .pipe(uglifycss({
      /*"maxLineLen": 80,*/
      "uglyComments": true
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('scripts', function() {
  var paths = [
    //PLUGINS
    'plugins/ft-inventory/catalog/catalog.js'
    ,'plugins/ft-inventory/js/card-slider.js'
    ,'plugins/ft-inventory/admin/admin.js'
    ,'plugins/ft-filterwidget/filterwidget.js'
    ,'plugins/responsive-lightbox/js/front.js'
    //THEMES
    ,'themes/fullthrottle-disrupter/js/*.js'
    ,'themes/fullthrottle-group/js/*.js'
    ,'themes/fullthrottle-parallax/js/*.js'
    ,'themes/fullthrottle-simple/js/*.js'
    ,'plugins/**/js/*.js'
  ];
  return gulp.src(paths, { base: "./"} )
  .pipe(uglify())
  .pipe(gulp.dest('.'));
});

//Inventory SASS Compile
var input = 'plugins/ft-inventory/sass/**\/*.scss';
var output = 'plugins/ft-inventory/css';
var sassOptions = {
  errLogToConsole: true,
  outputStyle: outputStyle,
  sourceComments: true
};

gulp.task('sass', function () {
  return gulp.src(input)
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(output));
});
// End Inventory SASS Compile

//myBDC SASS Compile
var inputFeaturedmybdc = 'plugins/ft-mybdc/sass/style.scss';
var outputFeaturedmybdc = 'plugins/ft-mybdc';
var sassOptionsFeaturedmybdc = {
  errLogToConsole: true,
  outputStyle: outputStyle,
  sourceComments: true
};

gulp.task('mybdc', function () {
  return gulp.src(inputFeaturedmybdc)
    .pipe(sass(sassOptionsFeaturedmybdc).on('error', sass.logError))
    .pipe(gulp.dest(outputFeaturedmybdc));
});
//End myBDC

//Filter Widget SASS Compile
var inputFilterWidget = 'plugins/ft-filterwidget/sass/style.scss';
var outputFilterWidget = 'plugins/ft-filterwidget';
var sassOptionsFilterWidget = {
  errLogToConsole: true,
  outputStyle: outputStyle,
  sourceComments: true
};

gulp.task('filter-widget', function () {
  return gulp.src(inputFilterWidget)
    .pipe(sass(sassOptionsFilterWidget).on('error', sass.logError))
    .pipe(gulp.dest(outputFilterWidget));
});
//End Filter Widget SASS Compile

//Recently Viewed Form SASS Compile
var inputRecentlyViewedForm = 'plugins/full-throttle-theme/sass/style.scss';
var outputRecentlyViewedForm = 'plugins/full-throttle-theme/css';
var sassOptionsRecentlyViewedForm = {
  errLogToConsole: true,
  outputStyle: outputStyle,
  sourceComments: true
};

gulp.task('recently-viewed-form', function () {
  return gulp.src(inputRecentlyViewedForm)
    .pipe(sass(sassOptionsRecentlyViewedForm).on('error', sass.logError))
    .pipe(gulp.dest(outputRecentlyViewedForm));
});
//End Filter Widget SASS Compile