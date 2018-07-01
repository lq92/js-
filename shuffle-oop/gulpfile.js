let gulp = require('gulp');
let browserSync = require('browser-sync');
let reload = browserSync.reload;
let nodemon = require('gulp-nodemon');

gulp.task('node', () => {
  nodemon({
    script: './bin/www',
    ext: 'js html',
    env: {
      'NODE_ENV': 'development'
    }
  })
})
gulp.task('server', ['node'], () => {
  let files = [
    'views/**/*.html',
    'views/**/*.pug',
    'public/**/*.*',
    'routes/*.*'
  ];
  browserSync.init(files, {
    proxy: 'http://localhost:3000',
    browser: 'chrome',
    notify: false,
    port: 3001
  })
  gulp.watch(files).on('change', reload)
})