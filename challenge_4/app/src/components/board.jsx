// this is a class component, as opposed to a functional component
import React from 'react';
import Square from './square.jsx';
import _ from 'lodash';

class Board extends React.Component {
  // eslint-disable-next-line
  constructor(props){
    super(props);
  }

  makeBoard() {
    var numberOfSquares = [];
    for (var i = 0; i <= this.props.numberOfSquares; i++) {
      //let num = i.toString().length;
      if (i < 10){
        i = 0 + i.toString()
      }
      numberOfSquares.push(i);
    }

     let scores = _.flatten(this.props.gameboard);
     console.log('scores in board component: ', scores)

    return _.zipWith(numberOfSquares, scores, ((item, score) =>
      <Square id={item} score={score} revealClicked={this.props.revealClicked} gameboard={this.props.gameboard}/>
    ))
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