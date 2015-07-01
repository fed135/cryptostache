/**
 * Cryptostache
 *
 * The mustached-shaped barcode service!
 */

/* Requires *******************************************************************/

var encrypt = require('./src/encrypt');
var printer = require('./src/printer');
var template = require('./src/template');

/* Local variables ************************************************************/

/* Methods ********************************************************************/

function Cryptostache(code, secretKey) {
	this.value = this.encrypt(code, secretKey);

	this.template = template;
}

Cryptostache.prototype.encrypt = encrypt;
Cryptostache.prototype.barcode = printer;

/* Exports ********************************************************************/

module.exports = Cryptostache;