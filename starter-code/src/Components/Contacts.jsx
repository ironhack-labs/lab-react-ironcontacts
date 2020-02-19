import React from "react";

import contactData from "../contacts.json";

const Contact = props => {
  return (
    <tr>
      <td>
        <img
          className="contact-image"
          src={props.contact.pictureUrl}
          alt={props.contact.name}
        />
      </td>
      <td>{props.contact.name}</td>
      <td>{props.contact.popularity}</td>
    </tr>
  );
};

let startContacts = [];
for (let i = 0; i < 5; i++) {
  let contact = contactData[i];

  startContacts.push(contact);
}

class Contacts extends React.Component {
  state = {
    contacts: startContacts
  };

  randomClick = () => {
    let randomNumber = Math.floor(Math.random() * (contactData.length - 0) + 0);
    let randomContact = contactData[randomNumber];
    this.setState({ contacts: this.state.contacts.concat(randomContact) });
  };

  sortByName = () => {
    console.log("unsorted:", this.state.contacts);
    
    this.setState({
      contacts: [...this.state.contacts].sort((a, b) => {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
    });
  };

  sortByPopularity = () => {
    this.setState({
      contacts: [...this.state.contacts].sort((a, b) => {
        return b.popularity - a.popularity;
      })
    });
  };

  render() {
    console.log(this.state.contacts);
    return (
      <React.Fragment>
        <button onClick={this.randomClick}>Add Random Contact </button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map(contact => {
              return <Contact key={contact.id} contact={contact} />;
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Contacts;
