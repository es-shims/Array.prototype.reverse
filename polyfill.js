'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	if (!Array.prototype.reverse) {
		return implementation;
	}
	try {
		Array.prototype.reverse.call('abc');
		return implementation;
	} catch (e) {
		return Array.prototype.reverse;
	}
};
