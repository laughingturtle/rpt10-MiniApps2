function makeGameBoard() {
  let board = [];
  let mines = [];
  //console.log('board:', board);

  function generateBoard() {
    var count = 1;
    for (var i=0;i<10;i++){
      var data = [];
      for (var j=0;j<10;j++){
        data.push(0);
        count++;
      }
      board.push(data);

    }
   // console.log(board);
  }

  function generateMinesPlacementArray() {
    /* generate 10 unique numbers between 1 and 100 */
    while(mines.length < 8){
        let b = Math.floor(Math.random()*100) + 1;
        if(mines.indexOf(b) === -1) mines.push(b);
    }
    console.log('mines', mines);
  }


  function addMinesToBoard(){
     /* add the 10 random bombs to array matrix */
    for(let i = 0; i < mines.length; i++){
      let numToString = mines[i].toString();
      let checkLength = numToString.length;

      if(checkLength === 1){
        let num = mines[i]-1;
        board[0].splice(num,1,8);

        } else if(mines[i] === 100){
          board[9].splice(9,1,8);
        } else {
        let strNum = mines[i].toString();

        let aStr = strNum.charAt(0);
        let bStr = strNum.charAt(1);

        let a = parseInt(aStr);
        let b = parseInt(bStr);

          if(b === 0){
            board[a].splice(9,1,8);
          } else {
            board[a].splice(b -1,1,8);
          }
      }
    }
  }
  function addNumberHintsToBoard(){
      /*
      8 = a mine
      if board position === 8
      left, above left, above, above right, right,
      below right, below, below left = their current value +1
       */
    for(let i = 0; i < 10; i++){
      for(let j = 0; j < 10; j++){
        if(board[i][j] === 8){
          // left √
          if(board[i]!== undefined && board[i][j -1] !== undefined){
            if(board[i][j -1] !== 8){
              board[i][j -1] = board[i][j-1] + 1;
            }
          }

          // top left √
          if(board[i -1] !== undefined && board[i -1][j-1] !== undefined ){
            if(board[i -1][j-1] !== 8){
              board[i -1][j-1] = board[i -1][j-1] + 1;
            }
          }

          // top √
          if( board[i -1] !== undefined && board[i -1][j] !== undefined){
              if (board[i-1][j] !== 8){
                board[i -1][j] = board[i -1][j] + 1;
            }
          }

          // top right √
          if(board[i -1] !== undefined && board[i -1][j+1] !== undefined ){
            if(board[i -1][j+1] !== 8){
              board[i -1][j+1] = board[i -1][j+1] + 1;
            }
          }

          // right √
          if(board[i] !== undefined && board[i][j +1] !== undefined ){
            if(board[i][j+1] !== 8){
              board[i][j +1] = board[i][j+1] + 1;
            }
          }

          // bottom right √
          if(board[i +1] !== undefined && board[i +1][j+1] !== undefined ){
            if(board[i +1][j+1] !== 8){
              board[i +1][j+1] = board[i +1][j+1] + 1;
            }
          }

          // bottom  √
          if(board[i +1] !== undefined && board[i +1][j] !== undefined){
            if( board[i +1][j] !== 8 ){
              board[i +1][j] = board[i +1][j] + 1;
            }
          }

           // bottom left √
          if(board[i +1] !== undefined && board[i +1][j-1] !== undefined ){
            if(board[i +1][j-1] !== 8){
              board[i +1][j-1] = board[i +1][j-1] + 1;
            }
          }
        }
      }
    }
  }
  generateBoard();
  generateMinesPlacementArray();
  addMinesToBoard();
  addNumberHintsToBoard();
  // console.log('board with mines: ', board);

  return board;
  // add board to state / to redux
}
module.exports = makeGameBoard;