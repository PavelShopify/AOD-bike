const gulp = require('gulp')
const plumber = require('gulp-plumber')
const sass  = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')
const shorthand = require('gulp-shorthand')
const autoprefixer = require('gulp-autoprefixer')
const gulpStylelint = require('gulp-stylelint')
const rename = require("gulp-rename")
const gulpif = require('gulp-if')
const argv = require('yargs').argv;

const isDev = function(){
  return !argv.prod;
}

/** Prod check */
const isProd = function(){
  return !!argv.prod;
}

module.exports = function styles() {
  return gulp.src('src/scss/*.scss')
    .pipe(plumber())
    .pipe(gulpif(isDev(), sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(shorthand())
    .pipe(cleanCSS({
      debug: true,
      compatibility: '*'
    }))
    .pipe(gulpif(isDev(),sourcemaps.write()))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('assets'))
}

