/**
 * Cryptostache
 *
 * The mustached-shaped barcode service!
 */

/* Requires *******************************************************************/

var encrypt = require('./encrypt');
var printer = require('./printer');

/* Local variables ************************************************************/

/* Methods ********************************************************************/

console.log(printer(encrypt('test')));