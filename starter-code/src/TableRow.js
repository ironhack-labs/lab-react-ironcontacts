import React, { Component } from "react";

class TableRow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, pictureUrl, popularity, deleteRow } = this.props;
    return (
      <tr>
        <td>
          <img src={pictureUrl} alt="" />
        </td>
        <td>{name}</td>
        <td>{Math.round(popularity * 100) / 100}</td>
        <td>
          <button onClick={deleteRow}>Detele</button>{" "}
        </td>
      </tr>
    );
  }
}

export default TableRow;
