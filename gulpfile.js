'use strict';

var raml2htmlLib = require('raml2html');
var through2 = require('through2');
var gutil = require('gulp-util');
var util = require('util');
var path = require('path');
var gulp = require('gulp');

var PLUGIN_NAME = 'gulp-raml2html';

var PluginError = gutil.PluginError;
var File = gutil.File;

var CWD = path.resolve('.');
var API_SPEC = path.resolve(CWD, './api/api.raml');
var API_DEST = path.resolve(CWD, './docs/');
var API_HTML = 'index.html';

function raml2html(filename, source, https, callback) {
  var cwd = process.cwd();
  var nwd = path.resolve(path.dirname(filename));
  process.chdir(nwd);
  const config = raml2htmlLib.getConfigForTheme();
  config.https = https;
  raml2htmlLib.render(filename, config)
    .then(function (html) {
      process.chdir(cwd);
      process.nextTick(function () {
        callback(null, html);
      });
    },
    function (ramlError) {
      process.chdir(cwd);
      process.nextTick(function () {
        var mark = ramlError.problem_mark;
        mark = mark ? ':' + (mark.line + 1) + ':' + (mark.column + 1) : '';
        var context = ('' + [ramlError.context]).trim();
        context = context ? ' ' + context : '';
        var message = util.format('%s%s: Parse error%s: %s', filename, mark, context, ramlError.message);
        callback(new Error(message));
      });
    });
}

function convertFile(file, source, https, self, callback) {
  raml2html(file.path, source, https, function (error, html) {
    if (error) {
      self.emit('error', new PluginError(PLUGIN_NAME, error));
    } else {
      var htmlFile = new File({
        base: file.base,
        cwd: file.cwd,
        path: gutil.replaceExtension(file.path, '.html'),
        contents: new Buffer(html)
      });
      self.push(htmlFile);
    }
    callback();
  });
}

function parseJSON(buffer) {
  try {
    return JSON.parse('' + buffer);
  } catch (error) {
    return undefined;
  }
}

function gulpRaml2html(options) {
  options = options || {};
  var supportJsonInput = !!options.supportJsonInput;
  var https = options.https || false;

  return through2.obj(function (file, enc, callback) {

    if (file.isNull()) {
      // do nothing if no contents
    }

    if (file.isBuffer()) {
      if (file.contents.slice(0, 11).toString('binary') === '#%RAML 1.0\n' ||
        file.contents.slice(0, 12).toString('binary') === '#%RAML 1.0\r\n') {
        return convertFile(file, file.contents, https, this, callback); // got RAML signature
      } else if (supportJsonInput) {
        var json = parseJSON(file.contents);
        if (json) {
          return convertFile(file, json, https, this, callback); // valid JSON
        }
      }
    }

    if (file.isStream()) {
      this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
    }

    this.push(file);
    return callback();
  });
}

gulp.task('apidoc', function() {
  var rename = require('gulp-rename');

  return gulp.src(API_SPEC)
    .pipe(gulpRaml2html())
    .pipe(rename(API_HTML))
    .pipe(gulp.dest(API_DEST));
});

