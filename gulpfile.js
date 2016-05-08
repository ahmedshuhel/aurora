var gulp = require('gulp');
var bundler = require('aurelia-bundler');

var bundles = {
  "app-build": {                   // Should be within `baseURL`
    "includes": [
      "src/*.js",
      "src/*.html!text",
        "aurelia-framework",
        "aurelia-bootstrapper",
        "aurelia-templating-binding",
        "aurelia-polyfills",
        "aurelia-templating-resources",
        "aurelia-templating-router",
        "aurelia-loader-default",
        "aurelia-history-browser",
        "aurelia-logging-console",
    ],
    "options": {
      "inject": true,                   // Default is true
      "minify": false
    }
  }
};

var config = {
  force: true,                    // Force overwrite bundle file if already exists. Default false
  baseURL: '.',                   // `baseURL of the application` 
  configPath: ['jspm.browser.js', 'jspm.config.js'],      // `config.js` path. Must be within `baseURL` 
  injectionConfigPath: './jspm.config.js',               // `config.js` path. Must be within `baseURL` 
  bundles: bundles
};

gulp.task('bundle', function() {
  return bundler.bundle(config);
});

gulp.task('unbundle', function() {
  return bundler.unbundle(config);
});

