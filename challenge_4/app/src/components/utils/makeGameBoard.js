function makeGameBoard(n) {
  let board = [];
  let mines = [];

  function generateBoard() {
    var count = 1;
    for (var i=0;i<10;i++){
      var data = [];
      for (var j=0;j<10;j++){
        data.push({val:0, viz:false});
        count++;
      }
      board.push(data);
    }
  }

  function generateMinesPlacementArray() {
    /* generate n unique numbers between 0 and 99 */
    //var n = 10;
    while(mines.length < n){
        var b = Math.floor(Math.random()*99) + 0;
        if(mines.indexOf(b) === -1) {
          var str = b.toString();
          if(str.length === 1){
            str = '0' + str;
          }
          mines.push(str);
        }
    }
    console.log('mines', mines);
  }


  function addMinesToBoard(){
     /* add the 10 random bombs to array matrix */
    for(let i = 0; i < mines.length; i++){
      let a = mines[i].charAt(0);
      let b = mines[i].charAt(1);
      board[a][b].val = 8;
    }
  }

  function addNumberHintsToBoard(){
    for(let i = 0; i < 10; i++){
      for(let j = 0; j < 10; j++){
        if(board[i][j].val === 8){
          // left √
          if(board[i]!== undefined && board[i][j -1] !== undefined){
            if(board[i][j -1].val !== 8){
              board[i][j -1].val = board[i][j-1].val + 1;
            }
          }
          // top left √
          if(board[i -1] !== undefined && board[i -1][j-1] !== undefined ){
            if(board[i -1][j-1].val !== 8){
              board[i -1][j-1].val = board[i -1][j-1].val + 1;
            }
          }
          // top √
          if( board[i -1] !== undefined && board[i -1][j] !== undefined){
              if (board[i-1][j].val !== 8){
                board[i -1][j].val = board[i -1][j].val + 1;
            }
          }
          // top right √
          if(board[i -1] !== undefined && board[i -1][j+1] !== undefined ){
            if(board[i -1][j+1].val !== 8){
              board[i -1][j+1].val = board[i -1][j+1].val + 1;
            }
          }
          // right √
          if(board[i] !== undefined && board[i][j +1] !== undefined ){
            if(board[i][j+1].val !== 8){
              board[i][j +1].val = board[i][j+1].val + 1;
            }
          }
          // bottom right √
          if(board[i +1] !== undefined && board[i +1][j+1] !== undefined ){
            if(board[i +1][j+1].val !== 8){
              board[i +1][j+1].val = board[i +1][j+1].val + 1;
            }
          }
          // bottom  √
          if(board[i +1] !== undefined && board[i +1][j] !== undefined){
            if( board[i +1][j].val !== 8 ){
              board[i +1][j].val = board[i +1][j].val + 1;
            }
          }
           // bottom left √
          if(board[i +1] !== undefined && board[i +1][j-1] !== undefined ){
            if(board[i +1][j-1].val !== 8){
              board[i +1][j-1].val = board[i +1][j-1].val + 1;
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
  return board;
}

module.exports = makeGameBoard;