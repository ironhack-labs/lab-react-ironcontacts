import React, { Component } from "react";

export default class RandomButton extends Component {
  getRandom = evt => {
    let randomIndex = Math.floor(
      Math.random() * (this.props.contacts.length + 1)
    );
    let contact = this.props.contacts[randomIndex];
    this.props.clbk(contact);
  };

  render() {
    return <button onClick={this.getRandom}>Add Random Contact</button>;
  }
}
