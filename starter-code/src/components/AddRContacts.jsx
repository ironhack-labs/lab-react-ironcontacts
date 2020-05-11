import React, { Component } from "react";

export class AddRContacts extends Component {
  render() {
    return (
      <div>
        <button onClick={this.addContact}>Add Random contact</button>
      </div>
    );
  }
}

export default AddRContacts;
