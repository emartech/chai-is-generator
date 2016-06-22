'use strict';

const chai = require('chai');
chai.should();
chai.use(require('./'));

describe('chai-is-generator', function() {
  const generatorFunction = function*() {};
  const plainFunction = function() {};


  describe('framework', function() {

    describe('assert', function() {

      it('should pass for a generator function', function() { chai.assert.isGenerator(generatorFunction); });

      it('should pass "not" for a function', function() { chai.assert.isNotGenerator(plainFunction); });

    });


    describe('expect', function() {

      it('should pass for a generator function', function() { chai.expect(generatorFunction).to.be.generator; });

      it('should pass "not" for a function', function() { chai.expect(plainFunction).not.to.be.generator; });

    });


    describe('should', function() {

      it('should pass for a generator function', function() { generatorFunction.should.be.generator; });

      it('should pass "not" for a function', function() { plainFunction.should.not.be.generator; });

    });

  });

});
