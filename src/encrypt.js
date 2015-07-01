/**
 * Cryptostache barcode encryptor
 *
 * The encryptor class
 */

/* Requires *******************************************************************/

var crypto = require('crypto');

/* Local variables ************************************************************/

/* Methods ********************************************************************/

function encrypt(str, key) {

	var hash;
	var hmac;

	hmac = crypto.createHmac('sha1', key || 'you should put a key');

	hmac.setEncoding('hex');
	hmac.write(str);
	hmac.end();
	hash = hmac.read();

	return hash;
}

/* Exports ********************************************************************/

module.exports = encrypt;