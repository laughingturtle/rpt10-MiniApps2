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
  }

  componentDidMount() {
    this.init();
  }

  isSquareVisible(sq){
    let board = this.state.gameboard;
    // update viz of coords sq
    console.log('newboard', board);

    this.setState({
      gameboard: board
    })
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

  render() {
    return (
      <div className="App">
        <Board squares={this.state.squares} gameOver={this.state.gameOver} init={this.state.init} gameboard={this.state.gameboard} isSquareVisible={this.isSquareVisible}/>
      </div>
    );
  }
}

export default App;
