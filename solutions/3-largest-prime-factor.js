
var findLargestPrimeFactor = function( n ){
  // start with zero
  var largest = 0, i = 0;

  if( n % 2 === 0 ){

    while( n % 2 === 0 ){
      console.log( '2' );
      n = n/2;
    }

    // start with 2 now
    largest = 2;
  }

  for( i = 3; i < Math.sqrt( n ); i += 2 ){

    while( n % i === 0 ){

      console.log( i );

      if( i > largest ){
        largest = i;
      }

      n = n / i;
      console.log( n );
    }
  }

  if( n > largest ){
    largest = n;
  }

  console.log( 'largest prime factor: ', largest );
};

findLargestPrimeFactor( 2432 );
