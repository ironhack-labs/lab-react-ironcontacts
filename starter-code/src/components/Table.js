import React, { Component } from 'react';
import Contacts from './Contacts'

class Table extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <table className="App">
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {
            this.props.contactsArr.map((contact, idx) => {
              return <Contacts key={idx} {...contact}/>
            })
          }
      </table>
    );
  }
}

export default Table;