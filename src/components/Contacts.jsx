import React, { Component } from 'react';
import contacts from '../contacts.json';
import TableRow from './TableRow';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [...contacts],
    };

    this.numberList = 5;
  }

  createContacts = () => {
    return this.state.contactList
      .filter((c, i) => i < this.numberList)
      .map((contact) => <TableRow {...contact} key={contact.id} />);
  };

  //Agregar contacto

  addRandomContact = () => {
    this.numberList += 1;
    const initialState = contacts.filter((c, i) => i < this.numberList);
    this.setState(() => ({ contactList: initialState }));
  };

  render() {
    console.log(this.state.contactList);

    return (
      <div>
        <button onClick={this.addRandomContact}>Add random contact</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {this.createContacts()}
        </table>
      </div>
    );
  }
}
export default Contacts;
