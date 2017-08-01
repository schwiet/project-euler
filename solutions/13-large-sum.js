var sum = 0;

var lineReader = require( 'readline' ).createInterface({
  input: require( 'fs' ).createReadStream( '13-numbers.txt' ),
});



lineReader.on( 'line', function( line ){
  sum += +line;
});

lineReader.on( 'close', function(){
  console.log( 'sum is:', sum );
});
