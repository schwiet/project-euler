var getFactors = require( '../util/get-factors' ),
    getTriangleNumber;

var i = 0, triangle = 0, factors = [];


while( factors.length <= 500 ){
  i += 1;
  triangle += i;
  factors = getFactors( triangle );
}

console.log( triangle, 'has over 500 divisors' );
