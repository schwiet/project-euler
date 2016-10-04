
var isEvenlyDivisibleByAll = function( number, range ){

  var result = true;

  while( range > 0 && result ){

    result = number % range === 0;
    range -= 1;
  }

  return result;
}

var i = 0, found = false;

while( !found ){

  i += 1;
  found = isEvenlyDivisibleByAll( i, 20 );
}

console.log( i );
