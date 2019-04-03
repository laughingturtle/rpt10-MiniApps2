import React, { Component } from 'react';
import './App.css';
import Board from './components/board.jsx'
import makeGameBoard from './components/utils/makeGameBoard.js'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      gameboard:[],
      numberOfSquares: 100
    }
  }

  componentDidMount() {
    this.setState({
      gameboard: makeGameBoard()
    })
  }

  render() {
    console.log('board in state: ', this.state.gameboard)
    return (
      <div className="App">
        <Board numberOfSquares={this.state.numberOfSquares}/>
      </div>
    );
  }
}

export default App;
