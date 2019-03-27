import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

class EventsList extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  render() {
    let eventNodes = this.props.data.map(function(event, index) {
      return <div key={index}>{event.event}</div>;
    });

    return (
      <div id="project-events" className="eventList">
        <ul>{eventNodes}</ul>
      </div>
    );
  }
}

export class Page extends React.Component{
  static propTypes = {
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    perPage: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render(){
    console.log('props in page: ', this.props)
    return (
      <div>
        <h3>Search Results:</h3>
        <div className="commentBox">
          <EventsList data={this.props.data} />
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={this.props.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>
      </div>
    )
  }
}

export default Page;
