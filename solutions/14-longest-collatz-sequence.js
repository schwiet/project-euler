var seq_lengths = [];
var longest_seq = 0;
var start_num;
var i = 1000000;
var len;

function get_sequence( start ){

  var lenght;

  if( !seq_lengths[ start ] ) {
    if( start === 1 ){
      length = 1;
    }
    else if( start % 2 === 0 ){
      length = get_sequence( start / 2 ) + 1;
    }
    else{
      length = get_sequence( start * 3 + 1 ) + 1;
    }

    seq_lengths[ start ] = length;
  }
  else{
    length = seq_lengths[ start ];
  }

  return length;
}

for( i = 1; i <= 1000000; i += 1 ){

  len = get_sequence( i );

  if( len > longest_seq ){

    longest_seq = len;
    start_num = i;
  }
}

console.log( start_num, '>', longest_seq );
