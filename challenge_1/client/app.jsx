import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search.jsx';
import Page from './components/page.jsx';
import axios from 'axios';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      offset: 0
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
      let data = response.data;
      that.setState({
        results: response.data,
        pageCount: Math.ceil(data.meta.total_count / data.meta.limit)
     });
    })
    .catch(function (error) {
      console.log('Error on client', error);
    });
  }

  handlePageClick = data => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.props.perPage);

    this.setState({
      offset: offset
    },
    () => {
      this.searchRecords();
    });
  };

  render (){
    return (
      <div>
        <h1>Historical Data Search App</h1>
        <Search searchRecords={this.searchRecords}/>
        <Page data={this.state.results} offset={this.state.offset} pageCount={this.state.pageCount}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));