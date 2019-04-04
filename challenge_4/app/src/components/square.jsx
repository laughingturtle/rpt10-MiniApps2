// this is a class component as opposed to a functional component,
import React from 'react'

class Square extends React.Component {
 // eslint-disable-next-line
  constructor(props){
    super(props);
    this.state = {
      isClicked: false,
      gameOver: false
    }

  this.display = this.display.bind(this);
  this.endGame = this.endGame.bind(this);
  this.clickHandler = this.clickHandler.bind(this);
  this.findConnectedSquares = this.findConnectedSquares.bind(this);
 }

  clickHandler(e) {
    this.setState({isClicked : !this.state.isClicked});
    let id = e.target.id.substr(1);
    let a = parseInt(id.charAt(0));
    let b = parseInt(id.charAt(1));

    this.findConnectedSquares(a, b);
    //this.props.revealClicked(e.target.id);
    if (this.props.score === 8){
      /* end game */ // boom
      this.endGame()
    }
  }

  findConnectedSquares(a,b){
      let board = this.props.gameboard;
      console.log('a: ', a);
      console.log('b: ', b);
      // check left
      if(board[a]!== undefined && board[a][b -1] !== undefined){
        if(board[a][b] !== 8 && board[a][b -1] !== 8){
         // console.log('thus target this: ', '_' + a + '' + (b -1));
           document.getElementById('_' + a + '' + (b -1)).click();
          if(board[a][b] < 1 && board[a][b -1] < 1){
            console.log('** we\'re in the recursion **');
            console.log('current board value: ', board[a][b]);
            console.log('board value one to the left : ', board[a][b -1]);
            console.log('a:', a, 'b:', b)
           // this.findConnectedSquares(a,b -1);
            console.log('** we\'re out of the recursion **');
          }
        }
      }
      // check top left
      // if(board[a -1]!== undefined && board[a -1][b -1] !== undefined){
      //   if(board[a][b] !== 8 && board[a-1][b -1] !== 8){
      //     console.log('thus target this: ', '_' + (a -1) + '' + (b -1));
      //     // /* what here?*/ ('_00').click(); // target the click event of this id
      //   }
      // }
      // // check top
      // if(board[a -1]!== undefined && board[a -1][b] !== undefined){
      //   if(board[a][b] !== 8 && board[a-1][b] !== 8){
      //     console.log('thus target this: ', '_' + (a -1) + '' + (b));
      //     // /* what here?*/ ('_00').click(); // target the click event of this id
      //   }
      // }
      // // check top right
      // if(board[a -1]!== undefined && board[a -1][b +1] !== undefined){
      //   if(board[a][b] !== 8 && board[a-1][b +1] !== 8){
      //     console.log('thus target this: ', '_' + (a -1) + '' + (b +1));
      //     // /* what here?*/ ('_00').click(); // target the click event of this id
      //   }
      // }
      // // check right
      // if(board[a]!== undefined && board[a][b +1] !== undefined){
      //   if(board[a][b] !== 8 && board[a][b +1] !== 8){
      //     console.log('thus target this: ', '_' + a + '' + (b +1));
      //     // /* what here?*/ ('_00').click(); // target the click event of this id
      //   }
      // }
      // // check bottom right
      // if(board[a +1]!== undefined && board[a +1][b +1] !== undefined){
      //   if(board[a][b] !== 8 && board[a+1][b +1] !== 8){
      //     console.log('thus target this: ', '_' + (a +1) + '' + (b +1));
      //     // /* what here?*/ ('_00').click(); // target the click event of this id
      //   }
      // }
      // // check bottom
      // if(board[a +1]!== undefined && board[a +1][b] !== undefined){
      //   if(board[a][b] !== 8 && board[a+1][b] !== 8){
      //     console.log('thus target this: ', '_' + (a +1) + '' + b);
      //     // /* what here?*/ ('_00').click(); // target the click event of this id
      //   }
      // }
      // // check bottom left
      // if(board[a +1]!== undefined && board[a +1][b -1] !== undefined){
      //   if(board[a][b] !== 8 && board[a+1][b -1] !== 8){
      //     console.log('thus target this: ', '_' + (a +1) + '' + (b -1));
      //     // /* what here?*/ ('_00').click(); // target the click event of this id
      //   }
      // }
    }


  display() {
   // console.log('gameboard: ', this.props.gameboard)
  /*
   if this.props.score = 1, 2, 3 different colors, if 0 don't show ,
   if 8 show background image. Change {this.props.score}
   in the render to the name of this function.
  */
    if(this.props.score !== 0 && this.props.score !== 8){
      return this.props.score;
    }
  }

  endGame(){
    this.setState({
      gameOver: true
    }, () => console.log('gameOver: ', this.state.gameOver))
  }

  render() {
    var switchClass;
    /* change css classes based on the the number in the square on the board and show if clicked */
    if (this.props.score === 8){
      switchClass = this.state.isClicked ? 'innersquare show backgroundTweak bomb' : 'innersquare hide';
    } else if (this.props.score === 1){
      switchClass = this.state.isClicked ? 'innersquare show blue' : 'innersquare hide';
    } else if (this.props.score === 2){
      switchClass = this.state.isClicked ? 'innersquare show green' : 'innersquare hide';
    } else if (this.props.score === 3){
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

       {  this.state.gameOver === true ?
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