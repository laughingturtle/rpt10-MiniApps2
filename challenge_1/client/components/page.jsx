import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

class Page extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  render(){
    console.log('props in page: ', this.props)
    return (
      <div>
        <h3>Search Results:</h3>

      </div>
    )
  }
}

export default Page;
