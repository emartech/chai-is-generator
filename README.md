chai-is-generator
=================

> Generator assertions for [Chai](http://chaijs.com)

## Installation

Install using [npm](https://www.npmjs.org/):

```sh
npm install chai-is-generator
```

## Setup
```javascript
var chai = require('chai');
chai.use(require('chai-is-generator'));
```

## Assertions

### .generator

Assert that a value is a generator function.

```javascript
expect(myGenerator).to.be.generator
expect(myFunction).not.to.be.generator

myGenerator.should.be.generator
myFunction.should.not.be.generator

assert.isGenerator(myGenerator)
assert.isNotGenerator(myFunction)
```

## Contributing

Please submit all issues and pull requests to the [emartech/chai-is-generator](https://github.com/emartech/chai-is-generator) repository!

## Tests

Run tests using `npm test`.

## Support

If you have any problem or suggestion please open an issue [here](https://github.com/emartech/chai-is-generator/issues).
