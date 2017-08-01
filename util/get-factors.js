var getFactors = function( number ){

  var factors = [], i;

  for( i = 0; i < number / 2; i += 1 ){
    if( number % i === 0 ){
      factors.push( i );
    }
  }

  return factors;
}

module.exports = getFactors;
