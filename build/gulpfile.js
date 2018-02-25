'use strict';

var gulp = require('gulp');
var path = require('path');
var raml2html = require('gulp-raml2html');

var CWD = path.resolve('.');
var API_SPEC = path.resolve(CWD, '../api/api.raml');
var API_DEST = path.resolve(CWD, '../docs/');
var API_HTML = 'index.html';


function logErrorAndQuit(err) {
  console.error(err.toString());
  this.emit('end');
}

gulp.task('apidoc', function() {
  var rename = require('gulp-rename');

  return gulp.src(API_SPEC)
    .pipe(raml2html())
    .on('error', logErrorAndQuit)
    .pipe(rename(API_HTML))
    .pipe(gulp.dest(API_DEST));
});

//Watch for changes on raml files and build locally 
gulp.task('watch', function() {
	gulp.watch(API_SPEC, ['apidoc']);
});

gulp.task('default', ['watch']);