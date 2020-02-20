import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    searchText: ""
  };

  handleChange = e => {
    this.setState({
      searchText: e.target.value
    });
  };

  render() {
    return (
      <div>
        <input value={this.state.searchText} onChange={this.handleChange} />
      </div>
    );
  }
}
