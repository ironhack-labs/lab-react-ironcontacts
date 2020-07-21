import React, { Component } from 'react';
import '../CSS/table.css';
import contacts from '../contacts.json';
var cloneContacts = [...contacts];
var fiveContacts = cloneContacts.splice(0,5);

export class Table extends Component {
  state = {
    contacts: fiveContacts,
  };

  tableDisplay = () => {
    return this.state.contacts.map((contact,i) => (
      <tr key={contact.id} className="tr_table">
        <td>
          {' '}
          <img src={contact.pictureUrl} className="img_table" alt="pic" />{' '}
        </td>
        <td className="name_table">{contact.name}</td>
        <td>{Math.round(contact.popularity * 100) / 100}</td>
        <td> <button onClick={(event) => this.delete(i)}> Delete </button> </td>
      </tr>
    ));
  };



addRandom = () => {
    let clone = [...this.state.contacts];  

    do {
    var randomIndex = Math.floor(Math.random()*cloneContacts.length-1)
    var newContact = cloneContacts[randomIndex]
    } while (clone.includes(newContact))  // To check if this star is already in the table and avoid doubles

    this.setState({ contacts : [...clone, newContact]})
}

sortByName = () => {
    let clone = [...this.state.contacts];  
    clone.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({contacts: clone });
  }

  sortByPopularity = () => {
    let clone = [...this.state.contacts];  
    clone.sort((a,b)=>b.popularity-a.popularity);
    this.setState({contacts: clone });
  }

delete = (index) => {
        this.setState({
          contacts: this.state.contacts.filter((contact, i) => i !== index),
        });
}


  render() {

    return (
      <div>
        <h2>Iron Contacts</h2>
        <button className="btn_addRandom" onClick={this.addRandom}>Add Random Contact</button>
        <button className="btn_sortName" onClick={this.sortByName}>Sort by name</button>
        <button className="btn_sortPopularity" onClick={this.sortByPopularity}>Sort by Popularity</button>
        <table className="center">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity </th>
            </tr>
          </thead>
          <tbody>{this.tableDisplay()}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;

/*
import contacts from './contacts.json';
var cloneContacts = [...contacts];
var fiveContacts = cloneContacts.splice(0,5);
*/
