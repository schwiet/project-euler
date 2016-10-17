var isPrime = function( num ){

  var i,
      // don't need to iterate all the way to num
      limit = Math.floor( Math.sqrt( num )),
      result = true;

  for( i = 2; i <= limit; i += 1 ){

    if( num % i === 0 ){
      result = false;
      break;
    }
  }

  return result;
};

module.exports = isPrime;
