import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{this.props.body}</tbody>
          </table>
        );
    }
}

export default Table;