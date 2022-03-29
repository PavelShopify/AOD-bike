const gulp = require('gulp')
const gulpStylelint = require('gulp-stylelint')
const paths = {
  scss: './src/**/*.scss',
};
module.exports = function testScssLint() {
  return gulp.src(paths.scss).
  pipe(gulpStylelint({
    reporters: [
      {
        failAfterError: true,
        formatter: 'string',
        console: true,
      },
    ],
  }));
}
