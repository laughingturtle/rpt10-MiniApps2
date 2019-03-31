import React from 'react';
import reactDOM from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }

  }

componentDidMount(){

}

render(){
    return (
      <div>
        Reacting
      </div>
    )
  }
}







reactDOM.render(<App/>, document.getElementById('app'));