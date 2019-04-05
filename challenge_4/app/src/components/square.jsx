// this is a class component as opposed to a functional component,
import React from 'react'

class Square extends React.Component {
 // eslint-disable-next-line
  constructor(props){
    super(props);
    this.state = {
      isClicked: false
    }

  this.display = this.display.bind(this);
  this.endGame = this.endGame.bind(this);
  this.clickHandler = this.clickHandler.bind(this);
  this.findConnectedSquares = this.findConnectedSquares.bind(this);
  // this.checkEightSquaresAround = this.checkEightSquaresAround.bind(this);
  this.isInArray = this.isInArray.bind(this);
 }

  clickHandler(e) {
    this.setState({isClicked : !this.state.isClicked});
    //console.log('board', this.props.gameboard);
    this.findConnectedSquares(e.target.id);
    if (this.props.val === 8){
      /* end game */ // boom
      this.endGame()
    }
  }

  updateVis(sq){
    console.log('sq', sq);
    this.props.isSquareVisible(sq);
  }

  isInArray(value, array){
    return array.indexOf(value) > -1;
  }

  findConnectedSquares(e){
    // console.log('e', e);
    let thus = this;
    let board = this.props.gameboard;
    let id = e.substr(1);
    let num1 = parseInt(id.charAt(0));
    let num2 = parseInt(id.charAt(1));
    let connectedSquares = [];
    // console.log('num1: ',num1);
    // console.log('num2: ',num2);
    // check value of the square at a or b
    // if it's a bomb do not run this function, if it has a number value no not run it.
    // next  the below in those checks

    /* refactor this to be proper recursion,
    take out the clicks,
    add to array if not already there,
    when done loop through the array and add clicks to those, possibly with a time delay if needed?
    */

    /*
    you know the size of the board and the value of a and b, you can check on the number value

    helper function to get the value at the square, is it a bomb or a number or empty?
    pass the board coordinates into this helper function

    make them objects, the coordinates, + can you see it?, have that as a value.
    it's rechecking visible squares - have a helper function that checks if it's been looked at.

    object:
    row
    col
    value
    visible

    */
    function checkEightSquaresAround(a,b){
      // console.log(a, ' ' ,b)
      // console.log(board[a][b].val);

      if (board[a][b].val !== 8){ //not a mine
        if(board[a][b].val === 0){

          // check left
          if(board[a]!== undefined && board[a][b -1] !== undefined){
            if(board[a][b -1].val !== 8){
              if(board[a][b -1].viz === false){
                let str = '_' + a + '' + (b -1);
                if(thus.isInArray(str, connectedSquares) === false){
                  connectedSquares.push(str);
                  thus.updateVis(a +'' + (b -1));
                }
                checkEightSquaresAround(a,b-1);
              }
            }
          }
          // check top left
          // if(board[a -1]!== undefined && board[a -1][b -1] !== undefined){
          //   if(board[a-1][b -1] !== 8){

          //       let str = '_' + (a-1) + '' + (b -1);
          //       if(thus.isInArray(str, connectedSquares) === false){
          //         connectedSquares.push(str);

          //       checkEightSquaresAround(a-1,b-1);
          //     }
          //   }
          // }
          // // // check top
          // if(board[a -1]!== undefined && board[a -1][b] !== undefined){
          //   if(board[a][b] !== 8 && board[a-1][b] !== 8){
          //     if (board[a][b] === 0){
          //       let str = '_' + (a-1) + '' + (b);
          //       if(thus.isInArray(str, connectedSquares) === false){
          //         connectedSquares.push(str);
          //       }
          //      // checkEightSquaresAround(a-1,b);
          //     }
          //   }
          // }
          // // check top right
          // if(board[a -1]!== undefined && board[a -1][b +1] !== undefined){
          //   if(board[a][b] !== 8 && board[a-1][b +1] !== 8){
          //     if (board[a][b] === 0){
          //       let str = '_' + (a-1) + '' + (b+1);
          //       if(thus.isInArray(str, connectedSquares) === false){
          //         connectedSquares.push(str);
          //       }
          //       checkEightSquaresAround(a-1,b+1);
          //     }
          //   }
          // }
          // // check right
          // if(board[a]!== undefined && board[a][b +1] !== undefined){
          //   if(board[a][b] !== 8 && board[a][b +1] !== 8){
          //     if (board[a][b] === 0){
          //       let str = '_' + (a) + '' + (b+1);
          //       if(thus.isInArray(str, connectedSquares) === false){
          //         connectedSquares.push(str);
          //       }
          //       checkEightSquaresAround(a, b+1);
          //     }
          //   }
          // }
          // // check bottom right
          // if(board[a +1]!== undefined && board[a +1][b +1] !== undefined){
          //   if(board[a][b] !== 8 && board[a+1][b +1] !== 8){
          //     if (board[a][b] === 0){
          //       document.getElementById('_' + (a+1) + '' + (b+1)).click();
          //       //console.log('thus target this: ', '_' + (a +1) + '' + (b+1));
          //     }
          //   }
          // }
          // // // check bottom
          // if(board[a +1]!== undefined && board[a +1][b] !== undefined){
          //   if(board[a][b] !== 8 && board[a+1][b] !== 8){
          //     if (board[a][b] === 0){
          //       document.getElementById('_' + (a+1) + '' + (b)).click();
          //       //console.log('thus target this: ', '_' + (a +1) + '' + (b));
          //     }
          //   }
          // }
          // // // check bottom left
          // if(board[a +1]!== undefined && board[a +1][b -1] !== undefined){
          //   if(board[a][b] !== 8 && board[a+1][b -1] !== 8){
          //     if (board[a][b] === 0){
          //       document.getElementById('_' + (a+1) + '' + (b-1)).click();
          //       //console.log('thus target this: ', '_' + (a +1) + '' + (b-1));
          //     }
          //   }
          // }
        }
      }
    }
    checkEightSquaresAround(num1,num2);

    console.log('connectedSquares', connectedSquares);
    for(let i = 0; i < connectedSquares.length; i++){
      document.getElementById(connectedSquares[i]).click();
    }
  }

  display() {
   // console.log('gameboard: ', this.props.gameboard)
  /*
   if this.props.val = 1, 2, 3 different colors, if 0 don't show ,
   if 8 show background image. Change {this.props.val}
   in the render to the name of this function.
  */
    if(this.props.val !== 0 && this.props.val !== 8){
      return this.props.val;
    }
  }

  // this is on one sqaure not the board, how will the other suquares know?
  endGame(){
    // this.setState({
    //   gameOver: true
    // }, () => console.log('gameOver: ', this.props.gameOver))
  }


  render() {
    // console.log('this.props', this.props);

    var switchClass;
    /* change css classes based on the the number in the square on the board and show if clicked */
    if (this.props.val === 8){
      switchClass = this.state.isClicked ? 'innersquare show backgroundTweak bomb' : 'innersquare hide';
    } else if (this.props.val === 1){
      switchClass = this.state.isClicked ? 'innersquare show blue' : 'innersquare hide';
    } else if (this.props.val === 2){
      switchClass = this.state.isClicked ? 'innersquare show green' : 'innersquare hide';
    } else if (this.props.val === 3){
      switchClass = this.state.isClicked ? 'innersquare show red' : 'innersquare hide';
    } else {
      switchClass = this.state.isClicked ? 'innersquare show' : 'innersquare hide';
    }

    /* remove rollover color change */
    var switchSquare = this.state.isClicked ? 'squareNoHover' : 'square';

    return (
       <div className={switchSquare}>

      {/* This is not working yet -- or it is and is not doing what I thought it would,
      it's only acting on those that are clicked after it becomes true
      */}

       {  this.props.gameOver === true ?
         (
            <div className={switchClass}>{this.display()}</div>
          )
          :
            this.state.isClicked === false ?
          (
            <div className={switchClass} id={'_' + this.props.id} onClick={this.clickHandler}>{this.display()}</div>
          )
          :
          (
           <div className={switchClass}>{this.display()}</div>
        )
      }
      </div>
    )
  }

}

export default Square;