
var find_special_triplet = function( a, b, sum ){

  var found = false, c;

  while( !found ){
    c = Math.sqrt( Math.pow( a, 2 ) + Math.pow( b, 2 ) );

    if( a + b === sum - c ){

      console.log( a, b, c );
      found = true;
    }
    else if( a + b > sum - c ){

      if( a > sum / 3 ){
        console.log( 'no pythagorean triplet for', sum );
        return;
      }

      a += 1;
      b = a + 1;
    }
    else{

      b += 1;
    }
  }
};


find_special_triplet( 3, 4, 1000 );
