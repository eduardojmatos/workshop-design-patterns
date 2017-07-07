# workshop-design-patterns 

[![npm version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![Coverage Status][coverage-badge]][coverage-url]
[![Code Climate][codeclimate-badge]][codeclimate-url]
[![Dependency Status][david-badge]][david-url]

Lessons from my workshop about design patterns. The master branch has all design patterns with tests.

# Installation

To install the project, just clone the repo and run `npm install`. 

To start, there is some scripts like:

- `npm run dev`
  Executes two other tasks, `watch:src` and `watch:test`. This two tasks observes `src` and `test` folders and executes some scripts, like babel transpiler and mocha.
- `npm test`
  Default task to run mocha tests and istanbul coverage analysis.
  
# Design Patterns

Initially, there are 6 JavaScript Design Patterns on this repo (constructor has a variation, the prototype). The idea is to add all known JS design patterns.

Link to all patterns:

- [Constructor](https://github.com/eduardojmatos/workshop-design-patterns/blob/master/src/constructor/common/animal.js);
- [Constructor Prototype](https://github.com/eduardojmatos/workshop-design-patterns/blob/master/src/constructor/prototype/animal.js);
- [Module](https://github.com/eduardojmatos/workshop-design-patterns/blob/master/src/module/common/player.js);
- [Singleton](https://github.com/eduardojmatos/workshop-design-patterns/tree/master/src/singleton/common);
- [Observer](https://github.com/eduardojmatos/workshop-design-patterns/tree/master/src/observer);
- [Facade](https://github.com/eduardojmatos/workshop-design-patterns/blob/master/src/facade/jcare.js);

All patterns have a specific test on `./test` folder using mocha.
 
[npm-badge]: https://img.shields.io/npm/v/codeclimate-test-reporter.svg
[npm-url]: https://www.npmjs.com/package/codeclimate-test-reporter
[codeclimate-url]: https://codeclimate.com/github/eduardojmatos/workshop-design-patterns
[codeclimate-badge]: https://codeclimate.com/github/eduardojmatos/workshop-design-patterns/badges/gpa.svg
[coverage-badge]: https://codeclimate.com/github/eduardojmatos/workshop-design-patterns/badges/coverage.svg
[coverage-url]: https://codeclimate.com/github/eduardojmatos/workshop-design-patterns/coverage
[travis-badge]: https://travis-ci.org/eduardojmatos/workshop-design-patterns.svg?branch=master
[travis-url]: https://travis-ci.org/eduardojmatos/workshop-design-patterns
[david-badge]: https://david-dm.org/eduardojmatos/workshop-design-patterns/dev-status.svg
[david-url]: https://david-dm.org/eduardojmatos/workshop-design-patterns?type=dev


## Links:
- Book in pt-BR JavaScript Design Patterns:
https://github.com/fhferreira/aprendendo-padroes-de-projeto-javascript/blob/master/README.md
