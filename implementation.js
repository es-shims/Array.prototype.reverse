'use strict';

var DeletePropertyOrThrow = require('es-abstract/2024/DeletePropertyOrThrow');
var floor = require('es-abstract/2024/floor');
var Get = require('es-abstract/2024/Get');
var HasProperty = require('es-abstract/2024/HasProperty');
var LengthOfArrayLike = require('es-abstract/2024/LengthOfArrayLike');
var Set = require('es-abstract/2024/Set');
var ToObject = require('es-object-atoms/ToObject');
var ToString = require('es-abstract/2024/ToString');

var $TypeError = require('es-errors/type');

module.exports = function reverse() {
	var O = ToObject(this); // step 1
	var len = LengthOfArrayLike(O); // step 2

	var middle = floor(len / 2); // step 3

	var lower = 0; // step 4

	while (lower !== middle) { // step 5
		var upper = len - lower - 1; // step 5.a
		var upperP = ToString(upper); // step 5.b
		var lowerP = ToString(lower); // step 5.c
		var lowerExists = HasProperty(O, lowerP); // step 5.d
		if (lowerExists) { // step 5.e
			var lowerValue = Get(O, lowerP); // step 5.e.i
		}
		var upperExists = HasProperty(O, upperP); // step 5.f
		if (upperExists) { // step 5.g
			var upperValue = Get(O, upperP); // step 5.g.i
		}
		if (lowerExists && upperExists) { // step 5.h
			Set(O, lowerP, upperValue, true); // step 5.h.i
			Set(O, upperP, lowerValue, true); // step 5.h.ii
		} else if (!lowerExists && upperExists) { // step 5.i
			Set(O, lowerP, upperValue, true); // step 5.i.i
			DeletePropertyOrThrow(O, upperP); // step 5.i.ii
		} else if (lowerExists && !upperExists) { // step 5.j
			DeletePropertyOrThrow(O, lowerP); // step 5.j.i
			Set(O, upperP, lowerValue, true); // step 5.j.ii
		} else { // step 5.k
			// istanbul ignore if
			if (lowerExists || upperExists) { // eslint-disable-line no-lonely-if
				throw new $TypeError('Assertion failed: this should be unreachable'); // step 5.k.i
			}
			// NOTE: No action is required. // step 5.k.ii
		}
		lower += 1; // step 5.l
	}
	return O; // step 6
};
