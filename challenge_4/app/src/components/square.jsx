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
    var coords = e.target.id.substr(1);
    //console.log('coords in click handler: ', coords);
    this.updateVis(coords);
    if (this.props.val === 8){
      /* end game */ // boom

    }
   this.findConnectedSquares(coords);
  }

  updateVis(coords){
    /* update state on top level */
    //console.log('coords in update vis: ', coords);
    this.props.isSquareVisible(coords);
  }

  isInArray(value, array){
    return array.indexOf(value) > -1;
  }

  findConnectedSquares(e){
    // console.log('e', e);
    let thus = this;
    let board = this.props.gameboard;
    let num1 = parseInt(e.charAt(0));
    let num2 = parseInt(e.charAt(1));
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
          if (a >= 0 && b-1 >= 0){
            if(board[a][b -1].val !== 8){
              if(board[a][b -1].viz === false){
                let coords = a + '' + (b -1);
                let id = '_' + coords;
                if(thus.isInArray(id, connectedSquares) === false){
                  connectedSquares.push(id);
                  thus.updateVis(coords);
                  checkEightSquaresAround(a,b-1);
                }
              }
            }
          }
          // check top left
          if (a-1 >= 0 && a-1 <= 9 && b-1 >= 0 && b+1 <= 9){
            if(board[a-1][b -1].val !== 8){
              if(board[a-1][b -1].viz === false){
                let coords = (a-1) + '' + (b -1);
                let id = '_' + coords;
                if(thus.isInArray(id, connectedSquares) === false){
                  connectedSquares.push(id); // into array for clicks to be added
                  thus.updateVis(coords); // updateisvisible
                  checkEightSquaresAround(a-1,b-1);
                }
              }
            }
          }
          // // // check top
          if (a-1 >= 0 && a-1 <= 9 && b >= 0){
            if(board[a-1][b].val !== 8){
              if(board[a-1][b].viz === false){
                let coords = (a-1) + '' + (b);
                let id = '_' + coords;
                if(thus.isInArray(id, connectedSquares) === false){
                  connectedSquares.push(id); // into array for clicks to be added
                  thus.updateVis(coords); // updateisvisible
                  checkEightSquaresAround(a-1,b);
                }
              }
            }
          }
          // // check top right
          if (a-1 >= 0 && a-1 <= 9 && b+1 >= 0 && b+1 <= 9){
            if(board[a-1][b+1].val !== 8){
              if(board[a-1][b+1].viz === false){
                let coords = (a-1) + '' + (b+1);
                let id = '_' + coords;
                if(thus.isInArray(id, connectedSquares) === false){
                  connectedSquares.push(id); // into array for clicks to be added
                  thus.updateVis(coords); // updateisvisible
                  checkEightSquaresAround(a-1,b+1);
                }
              }
            }
          }
          // // check right
          if (a <= 9 && b+1 >= 0 && b+1 <= 9){
            if(board[a][b+1].val !== 8){
              if(board[a][b+1].viz === false){
                let coords = (a) + '' + (b+1);
                let id = '_' + coords;
                if(thus.isInArray(id, connectedSquares) === false){
                  connectedSquares.push(id); // into array for clicks to be added
                  thus.updateVis(coords); // updateisvisible
                  checkEightSquaresAround(a,b+1);
                }
              }
            }
          }
          // // check bottom right
          if (a+1 >= 0 && a+1 <= 9 && b+1 >= 0&& b+1 <= 9){
            if(board[a+1][b+1].val !== 8){
              if(board[a+1][b+1].viz === false){
                let coords = (a+1) + '' + (b+1);
                let id = '_' + coords;
                if(thus.isInArray(id, connectedSquares) === false){
                  connectedSquares.push(id); // into array for clicks to be added
                  thus.updateVis(coords); // updateisvisible
                  checkEightSquaresAround(a+1,b+1);
                }
              }
            }
          }
          // check bottom
          if (a+1 >= 0 && a+1 <= 9 && b >= 0&& b <= 9){
            if(board[a+1][b].val !== 8){
              if(board[a+1][b].viz === false){
                let coords = (a+1) + '' + (b);
                let id = '_' + coords;
                if(thus.isInArray(id, connectedSquares) === false){
                  connectedSquares.push(id); // into array for clicks to be added
                  thus.updateVis(coords); // updateisvisible
                  checkEightSquaresAround(a+1,b);
                }
              }
            }
          }
          // check bottom left
          if (a+1 >= 0 && a+1 <= 9 && b-1 >= 0&& b-1 <= 9){
            if(board[a+1][b-1].val !== 8){
              if(board[a+1][b-1].viz === false){
                let coords = (a+1) + '' + (b-1);
                let id = '_' + coords;
                if(thus.isInArray(id, connectedSquares) === false){
                  connectedSquares.push(id); // into array for clicks to be added
                  thus.updateVis(coords); // updateisvisible
                  checkEightSquaresAround(a+1,b-1);
                }
              }
            }
          }
        }
      }
    }
    checkEightSquaresAround(num1,num2);

    console.log('connectedSquares', connectedSquares);
    for(let i = 0; i < connectedSquares.length; i++){
      document.getElementById(connectedSquares[i]).click();
    }
    connectedSquares = [];
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