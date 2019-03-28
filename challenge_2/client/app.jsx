import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      //data: data || 'no data'
    }
    this.getApi = this.getApi.bind(this);
  }

  componentDidMount(){
    this.getApi();
  }

  getApi(){
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(function (response) {
    console.log('api response: ', response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  render(){
    return (
      <div>
         This is your react app.
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));