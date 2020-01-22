import React, { Component } from 'react';
import Contact from './Contact'

class Table extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <table className="App">
        <thead>
          <tr>
            <th><h3>Picture</h3></th>
            <th><h3>Name</h3></th>
            <th><h3>Popularity</h3></th>
            <th><h3>Action</h3></th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.contactsArr.map((contact, idx) => {
              return <Contact key={idx} AppFunction={this.props.AppFunction} {...contact}/>
            })
          }
        </tbody>
      </table>
    );
  }
}

export default Table;
