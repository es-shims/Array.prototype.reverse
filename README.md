# array.prototype.reverse <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ES spec-compliant `Array.prototype.reverse` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-array.prototype.reverse).

Because `Array.prototype.reverse` depends on a receiver (the “this” value), the main export takes the array to operate on as the first argument.

## Example

```js
var reverse = require('array.prototype.reverse');
var assert = require('assert');

var a = [1, 2, 3];
assert.deepEqual(reverse(a), [3, 2, 1]);
assert.deepEqual(a, [3, 2, 1]);
```

```js
var reverse = require('array.prototype.reverse');
var assert = require('assert');
/* when Array#reverse is not present */
delete Array.prototype.reverse;
var shimmed = reverse.shim();
assert.equal(shimmed, reverse.getPolyfill());
assert.equal(shimmed, Array.prototype.reverse);
assert.deepEqual([1, 2, 3].reverse(), reverse([1, 2, 3]));
```

```js
var reverse = require('array.prototype.reverse');
var assert = require('assert');
/* when Array#reverse is present */
var shimmed = reverse.shim();
assert.equal(shimmed, Array.prototype.reverse);
assert.deepEqual([1, 2, 3].reverse(), reverse([1, 2, 3]));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/array.prototype.reverse
[npm-version-svg]: https://versionbadg.es/es-shims/Array.prototype.reverse.svg
[deps-svg]: https://david-dm.org/es-shims/Array.prototype.reverse.svg
[deps-url]: https://david-dm.org/es-shims/Array.prototype.reverse
[dev-deps-svg]: https://david-dm.org/es-shims/Array.prototype.reverse/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Array.prototype.reverse#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/array.prototype.reverse.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/array.prototype.reverse.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/array.prototype.reverse.svg
[downloads-url]: https://npm-stat.com/charts.html?package=array.prototype.reverse
[codecov-image]: https://codecov.io/gh/es-shims/Array.prototype.reverse/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/Array.prototype.reverse/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/Array.prototype.reverse
[actions-url]: https://github.com/es-shims/Array.prototype.reverse/actions
