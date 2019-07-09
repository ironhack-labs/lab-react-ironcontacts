import React, { Component } from "react";

export default class RandomButton extends Component {
  nameSort = evt => {
    let sortedContacts = this.props.contacts.sort(function(a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    this.props.clbk(sortedContacts);
  };

  popularitySort = evt => {
    let sortedContacts = this.props.contacts.sort(
      (a, b) => a.popularity - b.popularity
    );
    this.props.clbk(sortedContacts);
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.nameSort}>Sort By Name</button>
        <button onClick={this.popularitySort}>Sort By Popularity</button>
      </React.Fragment>
    );
  }
}
