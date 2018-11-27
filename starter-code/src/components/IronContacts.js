import React, { Component } from 'react';
import contacts from '../contacts.json';




class ContactList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ironContacts: contacts.slice(0, 5),
    }
  }

  addContact() {
    const { ironContacts } = this.state;
    const randomIndex = Math.floor(Math.random() * contacts.length);
    const randomNumber = contacts.splice(randomIndex, 1);

    ironContacts.push(randomNumber[0]);
    this.setState({ironContacts});
  }



  render() {
    const { ironContacts } = this.state;

    const contactHtml =
      ironContacts.map((oneContact, index) => {
        return (
          <li key={index}>
            <h3>{oneContact.name}</h3>
            <img src={oneContact.pictureUrl} alt=""/>
            <p>{oneContact.popularity}</p>
          </li>
        )
      })

    return (
      <section className="ContactList">
        <h2>IronContacts</h2>
        
      <button onClick={() => this.addContact()}>Add random Contact</button>


        <ul>
          {contactHtml}
        </ul>
      </section>
    );
  }
}

export default ContactList;