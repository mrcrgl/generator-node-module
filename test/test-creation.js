/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('node-module generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('node-module:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      '.jshintrc',
      '.editorconfig',
      'package.json',
      'gulpfile.js',
      'examples/example.js',
      'lib/index.js',
      'tests/index.js',
      'README.md'
    ];

    helpers.mockPrompt(this.app, {
      'moduleName': 'Test Module',
      'moduleVar': 'test',
      'moduleDescription': 'test description',
      'github': 'sample github'
    });
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});
