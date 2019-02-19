import React, { Component } from "react";
import Line from "./line.jsx";
import contacts from "../../contacts.json"

class Table extends Component {
  render() {
    let arr = this.props.contacts.map((contact, index) => {
      return <Line deleteContacts={this.props.deleteContacts} contact={contact} key={index} />
    })

    
    return (
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {arr}
        </tbody>
      </table>
      
    );
  }
}

export default Table;
