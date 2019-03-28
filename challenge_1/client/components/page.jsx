import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

class EventsList extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }


  render() {
    console.log('props in Events List', this.props.data)
    let eventNodes = this.props.data.map(function(event, index) {
      console.log('event', event.description);
      return <div key={index}>
        <p>{event.date}<br />{event.description}</p>
      </div>;
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
          {console.log('props in Page class: ', this.props.data)}
          <EventsList data={this.props.data} />
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={this.props.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.props.handlePageClick}
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
