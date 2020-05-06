import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";

export default class Contact extends Component {
  render() {
    return (
      <tr>
        <td>
          <img src={this.props.pictureUrl} alt="" style={{ width: "200px" }} />
        </td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity}</td>
        <td>
          <Button color="danger" onClick={this.props.handleDelete}>
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}
