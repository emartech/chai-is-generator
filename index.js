'use strict';

var isGenerator = require('is-generator').fn;

module.exports = function(chai) {
  var Assertion = chai.Assertion;

  Assertion.addProperty('generator', function() {
    this.assert(isGenerator(this._obj), 'expected #{this} to be a generator', 'expected #{this} not to be a generator');
  });

  chai.assert.isGenerator = function(value, msg) {
    new Assertion(value, msg).generator;
  };
};
