// this is a class component as opposed to a functional component,
import React from 'react'


var switchClass;

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
 }

  clickHandler(e){
    this.setState({isClicked : !this.state.isClicked});
    this.props.revealClicked(e.target.id);
    if (this.props.score === 8){
      /* end game */ // boom
      this.endGame()
    }
  }

  display(){
   // console.log('gameboard: ', this.props.gameboard)
  /*
   if this.props.score = 1, 2, 3 different colors, if 0 don't show ,
   if 8 show background image. Change {this.props.score}
   in the render to the name of this function.
  */
    if(this.props.score !== 0){
      return this.props.score;
    }
    if(this.props.score === 0){
      return;
    }
    if (this.props.score === 8){
      /* end game */ // boom
      //this.endGame()
      return;
    }
  }

  endGame(){
    this.setState({
      gameOver: true
    }, () => console.log('gameOver: ', this.state.gameOver))
  }

  render() {
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

      {/* This is not working yet */}
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