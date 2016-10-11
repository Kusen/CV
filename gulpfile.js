var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    precss = require('precss'),
    notify = require('gulp-notify'),
    sourcemaps = require('gulp-sourcemaps'),
    stylelint = require('stylelint'),
    reporter = require('postcss-reporter'),
    cssnano = require('cssnano'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer');

gulp.task('default', function() {
  return gulp.src('src/css/index.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([precss(), autoprefixer(), cssnano(), stylelint(), reporter({clearMessages: true})]))
        .pipe( sourcemaps.write('.') )
        .pipe(gulp.dest('dist'))
        .pipe(notify(''))
});

gulp.task('javascript', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: './src/js/script.js',
    debug: true
  });

  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/js/'));
});
 /*
gulp.task('lint', function() {
  return gulp.src('src/css/index.css')
         .pipe(postcss([stylelint(), reporter({clearMessages: true})]))
})

function minify (stream) {
  return stream.pipe(postcss([cssnano()]))
}

gulp.task('minify', function(){
  return  gulp.src('src/css/index.css')
            .pipe(minify)
            .pipe(notify(''))
})

gulp.task('dev', function(){
  return  gulp.src('src/css/index.css')
            .pipe(sourcemaps.init())
            .pipe(postcss([press(), autoprefixer()]))
            .pipe(gulp.dest('min'))
            .pipe(notify(''))
})

gulp.task('prod', function(){
    gulp.src('src/css/index.css')
    .pipe()
})

// , stylelint() */
gulp.task('watch', function() {
  gulp.watch('src/css/**/*.css', ['default'])
})
