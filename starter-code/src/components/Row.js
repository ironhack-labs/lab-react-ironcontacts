import React, { Component } from "react";
import Button from "./Button.js";

class Row extends Component {
  render() {
    const { pictureUrl, name, popularity } = this.props;
    return (
      <tr>
        <td>
          <img src={pictureUrl} alt="" width="80px" />
        </td>
        <td>{name}</td>
        <td>{popularity}</td>
        <td>
          <Button text={"Delete"} />
        </td>
      </tr>
    );
  }
}

export default Row;
