// this is a class component, as opposed to a functional component
import React from 'react';
import Square from './square.jsx';

class Board extends React.Component {
  // eslint-disable-next-line
  constructor(props){
    super(props);

  }

  makeBoard() {
    var numberOfSquares = [];
    for (var i = 1; i <= this.props.numberOfSquares; i++) {
      numberOfSquares.push(i);
   }

    return numberOfSquares.map((item, key) =>
         <div><Square id={item} key={key}/></div>
    );
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