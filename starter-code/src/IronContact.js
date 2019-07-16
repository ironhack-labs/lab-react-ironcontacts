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
        <td>
          <button
            onClick={() => {
              this.props.deleteContact(this.props.idx);
            }}
          >
            DELETE
          </button>
        </td>
      </tr>
    );
  }
}
