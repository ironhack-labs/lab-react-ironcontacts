import React, { Component } from "react";

class Artists extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, pictureUrl, popularity } = this.props;
    return (
      <div>
      <table>
          <tr>
            <td>
              <img src={pictureUrl} alt="artist" />
            </td>
            <td>
              <p>{name}</p>
            </td>
            <td>
              <p>{popularity}</p>
            </td>
          </tr>
      </table>
      </div>
    );
  }
}

export default Artists;
