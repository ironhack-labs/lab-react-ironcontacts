import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <h2>IronContacts</h2>
        <button onClick={this.props.add}>Add Random Contact</button>
        <button onClick={this.props.nameSort}>Sort by Name</button>
        <button onClick={this.props.popSort}>Sort by Popularity</button>
      </div>
    );
  }
}

export default Header;
