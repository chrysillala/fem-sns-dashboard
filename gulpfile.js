const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()

// compile scss to css
function style() {
  // 1. locate our scss files
  return gulp.src('./src/scss/*.scss')
    // 2. compile with sass compiler
    // if there are any error log only the sass error
    .pipe(sass().on('error', sass.logError))
    // 3. set compiled css destination
    .pipe(gulp.dest('./static/css'))
    // 4. stream changes to all browsers
    .pipe(browserSync.stream())
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './' // serve file from the root directory
    }
  })

  gulp.watch('./src/scss/*.scss', style)
  gulp.watch('./src/js/*.js').on('change', browserSync.reload)
  gulp.watch('./*.html').on('change', browserSync.reload)
}

exports.style = style
exports.watch = watch