
var sumOfSquares = function( range ){
  var sum = 0, i;

  for( i = 1; i <= range; i += 1 ){
    sum += Math.pow( i, 2 );
  }

  return sum;
};

var squareOfSums = function( range ){
  var sum = 0, i;

  for( i = 1; i <= range; i += 1 ){

    sum += i;
  }

  return Math.pow( sum, 2 );
};

console.log( 'difference:', ( squareOfSums( 100 ) - sumOfSquares( 100 ) ) );
