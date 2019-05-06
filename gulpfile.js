'use strict';

var gulp = require('gulp');
var path = require('path');

var CWD = path.resolve('.');
var API_SPEC = path.resolve(CWD, './api/api.raml');
var API_DEST = path.resolve(CWD, './docs/');
var API_HTML = 'index.html';


const optionsTheme = {
  'logo': path.resolve(CWD, './docs/assets/images/taxonworks_logo-full.svg'),
  //'color-theme': 'path/to/my/color-theme.styl',
  'language-tabs': ['json']
}


function raml2html(options) {
  var gutil = require('gulp-util');
  var through = require('through2');
  var raml2html = require('raml2html');

  const slateConfig = raml2html.getConfigForTheme('raml2html-slate-theme', optionsTheme);

  var simplifyMark = function(mark) {
    if (mark) mark.buffer = mark.buffer.split('\n', mark.line + 1)[mark.line].trim();
  }

  options = options || {};

  switch (options.type) {
    case 'json':
      var Q = require('q');
      options.config = {processRamlObj: function(raml) { return Q.fcall(function() {
        return JSON.stringify(raml, options.replacer, 'indent' in options ? options.indent : 2);
      })}};
      break;
    case 'yaml':
      var Q = require('q');
      var yaml = require('js-yaml');
      options.config = {processRamlObj: function(raml) { return Q.fcall(function() {
        return yaml.safeDump(raml, {skipInvalid: true, indent: options.indent, flowLevel: options.flowLevel});
      })}};
      break;
    default:
      options.type = 'html';
      options.config = options.config || slateConfig;
  }

  var stream = through.obj(function(file, enc, done) {
    var fail = function(message) {
      done(new gutil.PluginError('raml2html', message));
    };
    if (file.isBuffer()) {
      var cwd = process.cwd();
      process.chdir(path.resolve(path.dirname(file.path)));
      raml2html.render(file.path, options.config).then(
        function(output) {
          process.chdir(cwd);
          stream.push(new gutil.File({
            base: file.base,
            cwd: file.cwd,
            path: gutil.replaceExtension(file.path, options.extension || '.' + options.type),
            contents: new Buffer(output)
          }));
          done();
        },
        function(error) {
          process.chdir(cwd);
          simplifyMark(error.context_mark);
          simplifyMark(error.problem_mark);
          process.nextTick(function() {
            fail(JSON.stringify(error, null, 2));
          });
        });
    }
    else if (file.isStream()) fail('Streams are not supported: ' + file.inspect());
    else if (file.isNull()) fail('Input file is null: ' + file.inspect());
  });

  return stream;
}

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

gulp.task('apijson', function() {
  return gulp.src(API_SPEC)
    .pipe(raml2html({type: 'json'}))
    .on('error', logErrorAndQuit)
    .pipe(gulp.dest(API_DEST));
});

gulp.task('apiyaml', function() {
  return gulp.src(API_SPEC)
    .pipe(raml2html({type: 'yaml'}))
    .on('error', logErrorAndQuit)
    .pipe(gulp.dest(API_DEST));
});

gulp.task('apilint', function() {
  var raml = require('gulp-raml');
  // Fails on Windows, until https://github.com/JohanObrink/gulp-raml/issues/4 is resolved.

  return gulp.src(API_SPEC)
    .pipe(raml())
    .pipe(raml.reporter('default'))
    .pipe(raml.reporter('fail'));
});