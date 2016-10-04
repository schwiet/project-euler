
var findLargestPrimeFactor = function( n ){
  // start with zero
  var largest = 0, i = 0;

  if( n % 2 === 0 ){

    while( n % 2 === 0 ){
      n = n/2;
    }

    // start with 2 now
    largest = 2;
  }

  for( i = 3; i < Math.sqrt( n ); i += 2 ){

    while( n % i === 0 ){

      if( i > largest ){
        largest = i;
      }

      n = n / i;
    }
  }

  if( n > largest ){
    largest = n;
  }

  console.log( 'largest prime factor: ', largest );
};

findLargestPrimeFactor( 600851475143 );
