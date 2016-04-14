var gulp = require('gulp');
var bundler = require('aurelia-bundler');

var bundles = {
  "app-build": {                   // Should be within `baseURL`
    "includes": [
      "[src/*.js]"                         // Module names to be included in the bundle. May be a pattern too. eg. `*`, `**/**/*`, `[*]`
    ],
    "options": {
      "inject": true,                   // Default is true
      "minify": false,                   // Default is false
    }
  }
};

var config = {
  force: true,                    // Force overwrite bundle file if already exists. Default false
  baseURL: '.',                   // `baseURL of the application` 
  configPath: './system-cfg.js',      // `config.js` path. Must be within `baseURL` 
  bundles: bundles
};

gulp.task('bundle', function() {
  return bundler.bundle(config);
});
