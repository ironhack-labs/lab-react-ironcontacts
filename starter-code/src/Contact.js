import React from "react";

export default class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>
          <img src={this.props.picture} alt='' height="100" weight="100" />
        </td>
        <td>
          <p>{this.props.name}</p>
        </td>
        <td>
          <p>{this.props.popularity}</p>
        </td>
      </React.Fragment>
    );
  }
}
