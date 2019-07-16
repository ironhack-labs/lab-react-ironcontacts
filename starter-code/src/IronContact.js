import React from "react";
import "./IronContact.css";

export default class IronContact extends React.Component {
  render() {
    return (
      <tr>
        <td className="contacPict">
          <img src={this.props.pictureUrl} alt={this.props.name} />
        </td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity}</td>
      </tr>

      // <section className="contact-wrapper">
      //   <img src={this.props.pictureUrl} alt={this.props.name} />
      //   <h2>{this.props.name}</h2>
      //   <span className="popularity">{this.props.popularity}</span>
      // </section>
    );
  }
}
