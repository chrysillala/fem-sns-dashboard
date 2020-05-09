const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const autoprefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync').create()

const paths = {
  styles: {
    src: './src/scss/*.scss',
    dest: './static/css'
  }
}

// compile scss to css
function style() {
  // 1. locate our scss files
  return gulp.src(paths.styles.src, {sourcemaps: true})
    // 2. compile with sass compiler
    // if there are any error log only the sass error
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    // 3. set compiled css destination
    .pipe(gulp.dest(paths.styles.dest, {sourcemaps: '.'}))
    // 4. stream changes to all browsers
    .pipe(browserSync.stream())
}

function browserInit() {
  return browserSync.init({
    server: {
      baseDir: './' // serve file from the root directory
    }
  })
}

function reload() {
  return browserSync.reload
}

function watch() {
  style()
  browserInit()

  gulp.watch('./src/scss/*.scss', style)
  gulp.watch('./src/js/*.js').on('change', reload)
  gulp.watch('./*.html').on('change', reload)
}

exports.style = style
exports.watch = watch