import React, { Component } from "react"

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
      </tr>

    )
  }
}

export default Row