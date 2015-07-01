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

	hash = hash.split('').join('.');

	hash = hash.split('a').join('10');
	hash = hash.split('b').join('11');
	hash = hash.split('c').join('12');
	hash = hash.split('d').join('13');
	hash = hash.split('e').join('14');
	hash = hash.split('f').join('15');

	return hash.split('.');
}

/* Exports ********************************************************************/

module.exports = encrypt;