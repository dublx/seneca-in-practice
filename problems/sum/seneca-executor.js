'use strict';

/**
 * Executes the submitted and the solution, to compare the stdout.
 * The module to be require s the first param.
 */

 var mod = require(process.argv[2]);
 require( 'seneca' )()
   .use( mod )
   .act( 'role:math,cmd:sum,left:1,right:2', console.log )
