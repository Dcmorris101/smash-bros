import React, { Component } from 'react';

class Search extends Component {

  filterUpdate() {
    const val = this.myValue.value;
    this.props.filterUpdate(val); // Calling property from App.js parent
  }

  render () {
    return (
      <div className="main-container">
        <form>
          <input
          type="text"
          ref={ (value) => {this.myValue = value} }
          placeholder="Type to filter..."
          onChange={this.filterUpdate.bind(this)}
          />
        </form>
      </div>
    )
  }
}

export default Search;
