import React, { Component, Fragment } from 'react';

class Table extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="content">
      <h1>IronContacts</h1>
      <button onClick = {this.props.addOne}>Add Random Contact</button>
      <button onClick = {this.props.sortName}>Sort by name</button>
      <button onClick = {this.props.sortPopularity}>Sort by popularity</button>
      <table className="tableCelebs">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.children}
        </tbody>
      </table>
      </div>
    );
  }
}

export default Table;
