// this is a class component as opposed to a functional component,
import React from 'react'


var switchClass;

class Square extends React.Component {
 // eslint-disable-next-line
 constructor(props){
  super(props);
  this.state = {
    isClicked: false
  }
  this.clickHandler = this.clickHandler.bind(this);
 }

clickHandler(e){
  // get id
  //console.log('this', this);
  this.setState({isClicked : !this.state.isClicked});
  this.props.revealClicked(e.target.id);
  // remove from

  // if is clicked show classNames
  }

  display(){
  /*
   if this.props.score = 1, 2, 3 different colors, if 0 don't show ,
   if 8 show background image
   change {this.props.score} in the render to the name of this function
  */
    if(this.props.score === 0){
      return
    } else if (this.props.score === 8){
      return
    } else {
      return this.props.score
    }
  }

  render() {

  //  var count = 0;

    // if(this.state.isClicked){
    //   if (count === 0){

        if (this.props.score === 8){
          switchClass = this.state.isClicked ? 'innersquare show bomb' : 'innersquare hide';
        } else if (this.props.score === 1){
          switchClass = this.state.isClicked ? 'innersquare show blue' : 'innersquare hide';
        } else if (this.props.score === 2){
          switchClass = this.state.isClicked ? 'innersquare show green' : 'innersquare hide';
        } else if (this.props.score === 3){
          switchClass = this.state.isClicked ? 'innersquare show red' : 'innersquare hide';
        }else {
          switchClass = this.state.isClicked ? 'innersquare show' : 'innersquare hide';
        }

    //   } else {
    //     count ++
    //     switchClass = this.state.isClicked ? 'innersquare show' : 'innersquare show';
    //   }
    // }

    return (
      <div className='square' id={'_' + this.props.id} onClick={this.clickHandler}>{/* content */}
        <div className={switchClass} id={'x' + this.props.id} >{this.display() /* replace with display function */}</div>
      </div>
    )
  }

}

export default Square;