'use strict';

const calcLatticePaths = ( gridSize ) => {

  let i, num = gridSize * 2, sum = 1, choose = 1;

  for( i = num; i > gridSize; i -= 1 ){

    sum *= i;
  }
  
  for( i = gridSize; i > 0; i -= 1 ){
    choose *= i;
  }

  sum /= choose;
  console.log( 'Paths:', sum );
};

calcLatticePaths( 2 );
calcLatticePaths( 3 );
calcLatticePaths( 20 );
