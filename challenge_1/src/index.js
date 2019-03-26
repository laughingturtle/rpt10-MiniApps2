import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount(){

  }

  render (){
    return <h1>This is your react app, waz up dawg?</h1>
  }
}


ReactDOM.render(<App />, document.getElementById('app'));