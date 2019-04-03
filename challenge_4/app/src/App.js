import React, { Component } from 'react';
import './App.css';
import Board from './components/board.jsx'
import makeGameBoard from './components/utils/makeGameBoard.js'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      gameboard:[] /* function that makes the board */,
      squares: 100
    }
  }

  componentDidMount() {
    makeGameBoard();
  }

  render() {
    return (
      <div className="App">
        <Board squares={this.state.squares}/>
      </div>
    );
  }
}

export default App;
