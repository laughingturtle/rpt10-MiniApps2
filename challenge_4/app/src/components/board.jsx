import React from 'react';
import Square from './square.jsx';

class Board extends React.Component {
  // eslint-disable-next-line
  constructor(props){
    super(props);

  }

  makeBoard() {
    return new Array(this.props.squares).fill(<Square /* pass id */ />);
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