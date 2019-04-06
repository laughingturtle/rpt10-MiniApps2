// this is a class component, as opposed to a functional component
import React from 'react';
import Square from './square.jsx';
import viewMatrixValues from './utils/viewValues'
import _ from 'lodash';

class Board extends React.Component {
  // eslint-disable-next-line
  constructor(props){
    super(props);
  }

  makeBoard() {
    // console.log('props:', this.props)
    var squares = [];
    for (var i = 0; i <= this.props.squares; i++) {
      if (i < 10){
        i = 0 + i.toString()
      }
      squares.push(i);
    }
    // console.log('squares:', squares);
    // console.log('init:', this.props.init);

    if (this.props.init){
      var arr = viewMatrixValues(this.props.gameboard);
      let vals = _.flatten(arr);


      return _.zipWith(squares, vals, ((num, val) =>
        <Square id={num} val={val} gameOver={this.props.gameOver} gameboard={this.props.gameboard} isSquareVisible={this.props.isSquareVisible} endGame={this.props.endGame} />
      ))
    }
  }

  render() {
    return (
      <div className="board">
         {this.makeBoard()}
      </div>
    );
  }
}


export default Board;