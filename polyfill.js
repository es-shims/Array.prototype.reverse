'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	if (!Array.prototype.reverse) {
		return implementation;
	}
	var a = [1, 2]; // safari 12.0
	if (String(a) === String(a.reverse())) {
		return implementation;
	}

	try {
		// node < 4
		Array.prototype.reverse.call('abc');
		return implementation;
	} catch (e) {
		return Array.prototype.reverse;
	}
};
