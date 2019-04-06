import React, { Component } from 'react';
import './App.css';
import Board from './components/board.jsx'
import makeGameBoard from './components/utils/makeGameBoard.js'
import viewMatrixValues from './components/utils/viewValues'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      gameboard:[],
      squares: 99,
      mines: 7,
      gameOver: false,
      init: false
    }
    this.init = this.init.bind(this);
    this.isSquareVisible = this.isSquareVisible.bind(this);
    this.endGame = this.endGame.bind(this);
  }

  componentDidMount() {
    this.init();
  }

  init(){
    this.setState({
      gameboard: makeGameBoard(),
      init: true
    }, () => {
      console.log('gameboard', this.state.gameboard);
      console.log(viewMatrixValues(this.state.gameboard));
    })
  }

  isSquareVisible(coords){
    let board = this.state.gameboard;
    console.log('coords', coords)
    let num1 = parseInt(coords.charAt(0));
    let num2 = parseInt(coords.charAt(1));
    board[num1][num2].viz = true
    //console.log

    this.setState({
      gameboard: board
    })
  }

  endGame(){
    this.setState({
      gameOver: false
    })
  }
  render() {
    return (
      <div className="App">
        <Board squares={this.state.squares} gameOver={this.state.gameOver} gameboard={this.state.gameboard} init={this.state.init} isSquareVisible={this.isSquareVisible} endGame={this.endGame}/>
      </div>
    );
  }
}

export default App;
