import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search.jsx';
import Page from './components/page.jsx';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

class App extends React.Component{
  static propTypes = {
    url: PropTypes.string.isRequired,
    perPage: PropTypes.number.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      url: 'http://localhost:3000/historicaldata',
      offset: 0,
      perPage: 10,
      pageCount: 0,
      limit: 10,
      total_count: 0,
      next: '',
      previous: ''
    }
    this.searchRecords = this.searchRecords.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount(){

  }

  searchRecords(term){
    let that = this;
    axios.get(that.state.url, {
      params: {
        q: term,
        data: { limit: that.state.perPage, offset: that.state.offset }
      }
    })
    .then(function (response) {
     let data = response.data;
     //console.log('just data: ', data);
     // console.log('data + total count', data.meta.total_count);
     // console.log('data + limit', data.meta.limit);
      that.setState({
      results: data.comments,
      next: data.meta.next,
      previous: data.meta.previous,
      pageCount: parseInt(Math.ceil(data.meta.total_count / data.meta.limit))
      });
     // console.log('results', results);
      console.log('pageCount', that.state.pageCount);
    })
    .catch(function (error) {
      console.log('Error on client', error);
    });
  }

  handlePageClick = data => {
    console.log('******* handlePageClick-Clicked ******')
    let selected = data.selected;
    let offset = Math.ceil(selected * this.state.perPage);
    console.log('offset',offset)

    this.setState({
      offset: offset
    },
    () => {
      console.log('offset 2', this.state.offset)
      this.searchRecords();
    });
  };

  render (){
    return (
      <div>
        <h1>Historical Data Search App</h1>
        <Search searchRecords={this.searchRecords}/>
        <Page data={this.state.results} handlePageClick={this.handlePageClick} offset={this.state.offset} perPage={this.state.perPage} pageCount={this.state.pageCount}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));