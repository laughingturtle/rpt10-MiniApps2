import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search.jsx';
import axios from 'axios';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
    this.searchRecords = this.searchRecords.bind(this);
  }

  componentDidMount(){

  }

  searchRecords(term){
    console.log('this', this);
    let that = this;
    console.log('term in parent search func: ', term)
      axios.get('http://localhost:3010/events', {
        params: {
          q: term
        }
      })
    .then(function (response) {
      console.log('this again:', that)
      console.log('response: ', response.data);
      that.setState({
        results: response.data
     });
    })
    .catch(function (error) {
      console.log('Error on client', error);
    });
  }

  render (){
    return (
      <div><Search searchRecords={this.searchRecords}/>
        <h1>This is your react app, waz up dawg?</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));