import React, { Component } from 'react';
import contacts from '../contacts.json';


class List extends Component {
  render() {
    return (
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
      </table>
    );
  }
}

export default List;