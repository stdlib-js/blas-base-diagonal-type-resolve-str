/** @license Apache-2.0 */

'use strict';

/**
* Return the diagonal type string associated with a supported BLAS diagonal type value.
*
* @module @stdlib/blas-base-diagonal-type-resolve-str
*
* @example
* var str2enum = require( '@stdlib/blas-base-diagonal-type-str2enum' );
* var resolve = require( '@stdlib/blas-base-diagonal-type-resolve-str' );
*
* var v = resolve( str2enum( 'unit' ) );
* // returns 'unit'
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
