'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimArrayPrototypeReverse() {
	var polyfill = getPolyfill();

	define(
		Array.prototype,
		{ reverse: polyfill },
		{ reverse: function () { return Array.prototype.reverse !== polyfill; } }
	);

	return polyfill;
};
