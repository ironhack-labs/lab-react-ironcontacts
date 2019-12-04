import React, { Component } from "react";
import contacts from "../contacts.json";
import ContactInfo from "./contactInfo";
import "./styles/contacts.css";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.splice(0, 5)
    };
  }
  randomContact = () => {
    let cont = 0;
    let ran = 0;
      const contactsCopy = [...this.state.contacts]


    do {
      ran = Math.floor(Math.random() * contacts.length)
      cont = 0;
      this.state.contacts.forEach(elm => {
        elm.id === contacts[ran].id ? cont-- : cont++;
      });
     
    } while (cont < this.state.contacts.length);
      contactsCopy.push(contacts[ran])
      this.setState({ contacts: contactsCopy })
  };

    sortByName = () => { 
        
        const contactsCopy = [...this.state.contacts]
        contactsCopy.sort((a,b)=>a.name.localeCompare(b.name))
        this.setState({ contacts: contactsCopy })
    }
    sortByPopularity = () => { 
        const contactsCopy = [...this.state.contacts]
        contactsCopy.sort((a, b) => a.popularity - b.popularity)
        this.setState({ contacts: contactsCopy })
    }
    deleteContactHandler = id => {
        const contactsCopy = [...this.state.contacts]
        contactsCopy.splice(id, 1)
        this.setState({ contacts: contactsCopy})
    }

  render = () => {
    return (
      <>
        <h1>IronContacts</h1>
            <button className="" onClick={this.randomContact}>Random Contact</button>
            <button className="" onClick={this.sortByName}>Sort By Name</button>
            <button className="" onClick={this.sortByPopularity}>Sort ByPopularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Acttion</th>
            </tr>
          </thead>

          <tbody>
            {this.state.contacts.map((contact, idx) => (
                <ContactInfo key={idx} {...contact} deleteContact={() => this.deleteContactHandler(idx)}/>
            ))}
          </tbody>
        </table>
      </>
    );
  };
}

export default Contacts;
