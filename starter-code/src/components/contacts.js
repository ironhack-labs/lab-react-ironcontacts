import React, { Component } from "react";

class Contact extends Component {
  render() {
    const { name, pictureUrl, popularity } = this.props.info;
    return (
      <div>
        <table>
          <tr class="actorName">{name}</tr>
          <tr>
            <img src={pictureUrl} alt={name} width="100" />
          </tr>
          <tr>{popularity}</tr>
        </table>
      </div>
    );
  }
}
export default Contact;
