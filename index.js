'use strict';

module.exports = function(chai) {
  var assert = chai.assert;
  var Assertion = chai.Assertion;
  Assertion.addProperty('generator', function() {
    this.assert(this._obj.constructor.name === 'GeneratorFunction',
      'expected #{this} to be a generator',
      'expected #{this} not to be a generator'
    );
  });

  assert.isGenerator = function(value, msg) {
    new Assertion(value, msg).generator;
  };
};
