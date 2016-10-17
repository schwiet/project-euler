var isPrime = require( '../util/is-prime' );

var getSumOfPrimes = function( limit ){

  var i, sum = 0;

  for( i = 2; i < limit; i += 1 ){

    if( isPrime( i ) ){
      sum += i;
    }
  }

  return sum;
};

console.log( 'sum: ', getSumOfPrimes( 2000000 ) );
