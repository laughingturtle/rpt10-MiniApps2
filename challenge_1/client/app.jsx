import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search.jsx';
import Page from './components/page.jsx';
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
    let that = this;
    //console.log('term in parent search func: ', term)
      axios.get('http://localhost:3010/events', {
        params: {
          q: term
        }
      })
    .then(function (response) {
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
      <div>
        <h1>Peruse some lovely historical data</h1>
        <Search searchRecords={this.searchRecords}/>
        <Page data={this.state.results}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));