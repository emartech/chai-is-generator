'use strict';

var chai = require('chai');
chai.use(require('./'));

describe('chai-is-generator', function() {

  describe('subject is a generator', function() {

    const subject = function*() {};

    it('should pass for .generator', function() {
      chai.expect(subject).generator;
    });

    it('should fail for .not.generator', function(done) {
      try {
        chai.expect(subject).not.generator;
      } catch (e) {
        done();
      }
    });

  });

  describe('subject is a function', function() {

    const subject = function() {};

    it('should fail for .generator', function(done) {
      try {
        chai.expect(subject).generator;
      } catch (e) {
        done();
      }
    });

    it('should pass for .not.generator', function() {
      chai.expect(subject).not.generator;
    });

  });

});
