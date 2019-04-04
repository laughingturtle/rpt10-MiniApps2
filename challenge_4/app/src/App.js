import React, { Component } from 'react';
import './App.css';
import Board from './components/board.jsx'
import makeGameBoard from './components/utils/makeGameBoard.js'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      gameboard:[],
      numberOfSquares: 99,
      mines: 7
    }
    this.revealClicked = this.revealClicked.bind(this)
  }

  componentDidMount() {
    this.setState({
      gameboard: makeGameBoard()
    })
  }

  revealClicked(e){
    // if not 8 change color /// how to change css on one id
    // if 8 show mine // how to chnage bg on one id?
    // show number if not 0 // do I need 100 states?

    //get
    console.log('my id', e);
    /*
    if e === one digit, board[0][e]
      show piece
    else if e === 100, board [9][9]
    show piece
    else
    [1st char][2nd char - 1]
    show piece
    */
   let numToString = e.toString();
   let checkLength = numToString.length;

   if(checkLength === 1){
     let num = e;
     // show board contents
     //board[0].splice(num,1,8);

     } else if(e === 100){
      // board[9].splice(9,1,8);
     } else {
     let strNum = e.toString();

     let aStr = strNum.charAt(0);
     let bStr = strNum.charAt(1);

     let a = parseInt(aStr);
     let b = parseInt(bStr);

      if(b === 0){
        //board[a].splice(9,1,8);
      } else {
      // board[a].splice(b -1,1,8);
      }
    }
    // change color
    // if e === odd, id bg = x , if e === even, id bg === y
  }

  render() {
    console.log('board in state: ', this.state.gameboard)
    return (
      <div className="App">
        <Board numberOfSquares={this.state.numberOfSquares} revealClicked={this.revealClicked} gameboard={this.state.gameboard}/>
      </div>
    );
  }
}

export default App;
