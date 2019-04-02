import React from 'react'

class ScoresList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    var numbers = [];
    for (var i = 1; i <= 30; i++) {
        numbers.push(i);
    }
    console.log('data in scoreslist page', this.props.data)

    const items = this.props.data.map((item, key) =>
        <li key={key}>Game {key} - {item.score} pts</li>
    );

    return (
      <div>
        Scores List
        <ul>
          {items}
        </ul>
      </div>
    )
  }

}

export default ScoresList;


