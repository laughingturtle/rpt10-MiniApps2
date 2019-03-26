import React from 'react';

class Search extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render (){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Search" />
      </form>
      </div>
    )
  }
}

export default Search;
