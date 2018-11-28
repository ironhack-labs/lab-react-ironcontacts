import React, { Component } from 'react';
import contactsList from "../contacts.json";

import "./contactList.css";



class ContactList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: contactsList.slice(0,5),
      pool: contactsList.splice(5),
    }
  };

  addRandomContact() {
    const { contacts, pool } = this.state;
    const randomIndex = Math.floor(Math.random() * contactsList.length);
    
    if (pool.length > 0) {
      contacts.push(pool[randomIndex]);
      pool.splice(randomIndex, 1);
       console.log(pool.length);
      this.setState({ contacts });
    }
  };

  sortAlpha() {
    const { contacts } = this.state;
    contacts.sort((celebA, celebB) => {
      if (celebA.name < celebB.name)
      return -1;
      if (celebA.name > celebB.name)
      return 1;
    })
    this.setState({ contacts });
  };

  sortPop() {
    const { contacts } = this.state;
    contacts.sort((celebA, celebB) => {
      return celebB.popularity - celebA.popularity;
    })
    this.setState({ contacts });
  };

  deleteContact(contactIndex) {
    const { contacts } = this.state;
    contacts.splice(contactIndex, 1);
    this.setState({ contacts });
  };

  render() {
    const { contacts } = this.state;

    const displayContacts =
      contacts.map((oneContact, index) => {
        return (
          <tr key={ index }>
            <td><img src={ oneContact.pictureUrl } alt="Celebrity"/></td>
            <td>{ oneContact.name }</td> 
            <td>{ oneContact.popularity }</td> 
            <td><button onClick={ () => this.deleteContact(index) }>Delete</button></td> 
          </tr>
        )
      });

    return (
      <section>
        <h1>IronContacts</h1>  

        <button onClick={() => this.addRandomContact()}>
          Add Random Contact
        </button>
        <button onClick={ () => this.sortAlpha() }>
          Sort by Name
        </button>
        <button onClick={ () => this.sortPop() }>
          Sort by Popularity
        </button>
     
        <table className="ContactList">
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th> 
              <th>Popularity</th>
              <th>Action</th>
            </tr>
              { displayContacts }
            </tbody>
        </table>
      </section>
    );
  }
};

export default ContactList;