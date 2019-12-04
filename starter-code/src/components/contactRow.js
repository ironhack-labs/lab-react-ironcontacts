import React, { Component } from "react";
import { Contact } from "../styles/components";

export default class ContactRow extends Component {
  render() {
    return (
      <Contact>
        <img src={this.props.pictureUrl} alt={this.props.name} />
        <p>{this.props.name}</p>
        <p>{this.props.popularity}</p>
        <button onClick={() => this.props.deleteContact(this.props.index)}>
          Delete
        </button>
      </Contact>

      /*<div className="table-row">
        <div className="table-image">
          
        </div>
        <div className="table-char-name">{this.props.name}</div>
        <div className="table-char-popularity"></div>
        <div className="table-button">
          
        </div>
      </div>*/
    );
  }
}
