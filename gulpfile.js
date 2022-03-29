const gulp = require('gulp')


const styles = require('./gulp/styles')
const script = require('./gulp/script')
const testScss = require('./gulp/testScssLint')

/** Dev check */
const isDev = function(){
    return !argv.prod;
}

/** Prod check */
const isProd = function(){
    return !!argv.prod;
}
function setMode(isProduction = false) {
  return cb => {
    process.env.NODE_ENV = isProduction ? 'production' : 'development'
    cb()
  }
}


function watch(){
    gulp.watch('src/**/*.scss', testScss);
    gulp.watch('src/**/*.scss', styles);
    gulp.watch('src/**/*.js', script);
}
const dev = gulp.parallel(styles,script)

const build = gulp.series(dev)

module.exports.dev = gulp.series(setMode(), build, watch)
module.exports.prod = gulp.series(setMode(true), build)
module.exports.tests = gulp.series(testScss)

