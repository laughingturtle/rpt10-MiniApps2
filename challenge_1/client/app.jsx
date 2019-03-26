import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search.jsx';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount(){

  }

  render (){
    return (
      <div><Search />
        <h1>This is your react app, waz up dawg?</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));