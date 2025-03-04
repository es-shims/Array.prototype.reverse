'use strict';

// var canDistinguishSparseFromUndefined = 0 in [undefined]; // IE 6 - 8 have a bug where this returns false.

module.exports = function (reverse, t) {
	t['throws'](function () { reverse('abc'); }, TypeError, 'can not mutate a string');

	t.deepEqual(reverse(['a', 'b', 'c']), ['c', 'b', 'a'], '["a", "b", "c"] -> ["c", "b", "a"]');

	var a = [1, 2, 3];
	var b = reverse(a);

	t.deepEqual(a, [3, 2, 1], 'original array is reversed');
	t.deepEqual(b, [3, 2, 1], 'returned array is reversed');
	t.equal(a, b, 'returned array is the original array');

	/* eslint no-sparse-arrays: 0, comma-spacing: 0 */
	var sparse = [1, , 3];
	var sparseR = reverse(sparse);
	t.deepEqual(sparse, [3, , 1], 'original sparse array is reversed');
	t.deepEqual(sparseR, [3, , 1], 'returned sparse array is reversed');
	t.equal(sparse, sparseR, 'returned sparse array is the original sparse array');

	var sparse2 = [, 2, 3];
	var sparse2R = reverse(sparse2);
	t.deepEqual(sparse2, [3, 2, ,], 'original sparse array is reversed');
	t.deepEqual(sparse2R, [3, 2, ,], 'returned sparse array is reversed');
	t.equal(sparse2, sparse2R, 'returned sparse array is the original sparse array');

	var sparse3 = [1, 2, ,];
	var sparse3R = reverse(sparse3);
	t.deepEqual(sparse3, [, 2, 1], 'original sparse array is reversed');
	t.deepEqual(sparse3R, [, 2, 1], 'returned sparse array is reversed');
	t.equal(sparse3, sparse3R, 'returned sparse array is the original sparse array');

	var sparse4 = [1, , , 4];
	var sparse4R = reverse(sparse4);
	t.deepEqual(sparse4, [4, , , 1], 'original sparse array is reversed');
	t.deepEqual(sparse4R, [4, , , 1], 'returned sparse array is reversed');
	t.equal(sparse4, sparse4R, 'returned sparse array is the original sparse array');
};
