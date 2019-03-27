import React from 'react';

class Search extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit(){
    //console.log('in child:', this.state.value);
    this.props.searchRecords(this.state.value);
  }

  render (){
    return (
      <div>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <button onClick={this.handleSubmit}> Search </button>
      </div>
    )
  }
}

export default Search;
