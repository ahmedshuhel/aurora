System.register("src/app.js", ["npm:systemjs-plugin-babel@0.0.9/babel-helpers/classCallCheck.js", "npm:systemjs-plugin-babel@0.0.9/babel-helpers/createClass.js"], function($__export) {
  "use strict";
  var _classCallCheck,
      _createClass,
      App;
  return {
    setters: [function($__m) {
      _classCallCheck = $__m.default;
    }, function($__m) {
      _createClass = $__m.default;
    }],
    execute: function() {
      App = function() {
        function App() {
          _classCallCheck(this, App);
          this.firstName = 'Shuhel';
          this.lastName = 'Shuhel';
        }
        _createClass(App, [{
          key: 'fullName',
          get: function get() {
            return this.firstName + ' ' + this.lastName;
          }
        }]);
        return App;
      }();
      $__export("App", App);
    }
  };
});

System.register("src/main.js", [], function($__export) {
  "use strict";
  function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging();
    aurelia.start().then(function() {
      return aurelia.setRoot('src/app.js');
    });
  }
  $__export("configure", configure);
  return {
    setters: [],
    execute: function() {}
  };
});
