import React from "react";

export default class Contact extends React.Component {
  render() {
    return (
        <tr>
            <td><img src={this.props.img} alt="" height="150" /></td>
            <td>{this.props.name}</td>
            <td>{this.props.popularity.toFixed(2)}</td>
            <td><button onClick={() => this.props.clickToDelete()}>Delete</button></td>
        </tr>
    );
  }
}