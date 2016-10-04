
var is_palindrome = function( num ){
  var n = num;
  var rev = 0;
  while (num > 0)
  {
      dig = num % 10;
      rev = rev * 10 + dig;
      num = Math.floor( num / 10 );
  }
  return n === rev;
};

var largestPalindromeProduct = function( digits ){

  var limit = Math.pow( 10, digits ) - 1,
      lower_limit = Math.pow( 10, digits-1 ),
      i = limit, x = limit,
      largest = 0,
      result_x, result_i,
      product;

  console.log( 'searching [ ', lower_limit, ', ', limit, ' ]' );

  while( i >= lower_limit ){

    while( x >= lower_limit ){

      product = x * i;

      if( is_palindrome( product ) ){

        if( product > largest ){
          largest = product;
          result_x = x;
          result_i = i;
        }
      }

      x -= 1;
    }

    i -= 1;
    x = limit;
  }

  console.log( largest, ' = ', result_x, ' * ', result_i );
};

largestPalindromeProduct( 3 );
