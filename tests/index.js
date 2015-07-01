var assert = require('chai').assert;
var cryptostache = require('../index');

describe('Cryptostache', function() {
	var product_code;

	it('#constructor', function() {
		product_code = new cryptostache('some_product_code', 'secret_key');

		assert.isString(product_code.value);
	});

	it('#barcode()', function() {
		var barcode = product_code.barcode();

		assert.isString(barcode);
	});
});
