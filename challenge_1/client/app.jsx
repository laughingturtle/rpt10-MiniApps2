import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search.jsx';
import axios from 'axios';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      term: term
    }
  }

  componentDidMount(){

  }

  search(){
    axios.post('/yourRouteHere', {
      term: this.state.term,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleSearch(){

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