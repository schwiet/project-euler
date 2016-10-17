
var isPrime = require( '../util/is-prime' );

var getNthPrime = function( n ){

  var count = 0, i = 1;

  while( count < n ){

    i += 1;

    if( isPrime ( i ) ){
      count += 1;
    }
  }

  console.log( n, count, i );
  return i;
};

console.log( '10001th prime:', getNthPrime( 10001 ) );
