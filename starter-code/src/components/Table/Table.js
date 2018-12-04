import React, { Component } from "react";
import "./Table.css";

class Table extends Component {
  render() {
    let contacts = this.props.contacts;
    contacts = contacts.map((contact, index) => {

      return (
      <tr key={index}>
        <td> <img src={contact.pictureUrl} alt=""/></td>
        <td> {contact.name}</td>
        <td> {contact.popularity}</td>
        <td><button data-index={index} onClick={()=>this.props.deleteHandler(index)} >Delete</button></td>
      </tr>)
    });
  
    return (
      <table className="Table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts}
        </tbody>
      </table>
    );
  }
}

export default Table;
