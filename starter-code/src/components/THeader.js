import React, { Component } from 'react';

class THeader extends Component {
  render() {
    return (
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Action</th>
      </tr>
    )
  }
}

export default THeader;