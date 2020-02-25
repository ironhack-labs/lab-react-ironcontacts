import React from "react";

export default class IronContact extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <img width="200" src={this.props.pictureUrl} alt="" />
        </td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity}</td>
        <td>{this.props.id}</td>
        <td><button onClick={() => this.props.clickToDelete()}>Delete</button></td>
      </tr>
    );
  }
}
