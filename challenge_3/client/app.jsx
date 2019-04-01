import React from 'react'
import reactDOM from 'react-dom'
import Keypad from './components/keypad.jsx'
import ScoreDisplay from './components/ScoreDisplay.jsx'
import axios from 'axios'

var display = '';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      frame: 0,
      roll: 0,
      score: 0,
      pinsLeftThisFrame: 0,
      keyClicked: 0,
      gameInProgress: true,
      gameJustEnded: false
    }
  this.computeScore = this.computeScore.bind(this);
  this.gameReset = this.gameReset.bind(this);
  this.setPinsHit = this.setPinsHit.bind(this);
  this.getGameStats = this.getGameStats.bind(this);
  }

componentDidMount(){

}

computeScore(){

  var rollScore = 0;

  if(this.state.roll === 1) {
    if (this.state.keyClicked === 10){
      console.log('rollscore', rollScore)
      rollScore = 30;
      console.log('rollscore: ', rollscore);
    } else {
      console.log('key clicked typeof: ', typeof this.state.keyClicked)
      console.log('key clicked value: ', this.state.keyClicked)
      console.log('rollscore', rollScore)
      rollScore = this.state.keyClicked;
      console.log('rollscore: ', rollscore);
    }
  }
  if(this.state.roll === 2) {
    if (this.state.keyClicked === this.state.pinsLeftThisFrame){
      console.log('key clicked value: ', this.state.keyClicked)
      console.log('rollscore', rollScore)
      rollScore = 10 + this.state.keyClicked;
      console.log('rollscore: ', rollscore);
    } else {
      console.log('key clicked value: ', this.state.keyClicked)
      console.log('rollscore', rollScore)
      rollScore = parseInt(this.state.keyClicked);
      console.log('rollscore: ', rollscore);
    }
  }
  console.log('roll: ', this.state.roll);
  console.log('rollscore: ', rollscore);
  this.setState({
    score: this.props.score + rollScore
  })
}

setPinsHit(e){
  let pinsHit = e;
  // if(e === 13){
  //   pinsHit = Math.floor((Math.random() * 10) + 1);
  // }
  console.log('***** new roll *****')
  console.log('pinsHit: ', pinsHit);
  if(this.state.frame === 10 && this.state.roll === 1){
    this.setState({
      roll: this.state.roll + 1,
      gameJustEnded: true
    })
  } else {
    this.setState({
      keyClicked: pinsHit
    })
    if (this.state.roll === 2){
    this.setState({
      roll: 1,
      frame: this.state.frame + 1
    })
    } else {
      this.setState({
        pinsLeft: 10 - this.state.keyClicked,
        roll: this.state.roll + 1
      })
    }
  setTimeout(this.getGameStats(), 5000)
  }
}

gameReset(){
  this.setState({
      frame: 1,
      roll: 0,
      score: 0,
      gameInProgress: false,
      gameJustEnded: false
  })
}

getGameStats(){
  console.log('game in progress: ', this.state.gameInProgress);
  console.log('key clicked: ', this.state.keyClicked);
  console.log('frame: ', this.state.frame);
  console.log('roll: ', this.state.roll);
  this.computeScore();
  console.log('score: ', this.state.score);

}

render(){
  if(this.state.gameJustEnded) {
    display = <div className="replay" onClick={() => this.gameReset()}>Click to Play Again!</div>
  } else {

  }
    return (
      <div>
        <h1 className="noselect">Bowl Me Over!</h1>
        <Keypad setPinsHit={this.setPinsHit}/>
        <ScoreDisplay frame={this.state.frame} roll={this.state.roll} score={this.state.score} gameInProgress={this.gameInProgress}/>
        {display}
      </div>
    )
  }
}

reactDOM.render(<App/>, document.getElementById('app'));