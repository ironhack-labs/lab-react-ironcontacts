import React, { Component } from 'react';
import Contacts from './contacts.json'
import Contact from './Contact'
import './App.css';

class App extends Component {

  state = {
    Contacts: Contacts.slice(0, 5)
  }

  findOneRandomContact() {
    const randomContact = Contacts.slice(5)[Math.floor(Math.random() * Contacts.length)];
    return randomContact;
  }

  addRandomContact = evt => {
    const contactsArr = [...this.state.Contacts];
    contactsArr.push(this.findOneRandomContact());
    this.setState({ Contacts: contactsArr });
  }

  sortByName = evt => {
    const sortContactsArr = [...this.state.Contacts]
    sortContactsArr.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (b.name > a.name) {
        return 1;
      }
      return 0;
    });
    this.setState({ Contacts: sortContactsArr })
  }

  sortByPopularity = evt => {
    const sortContactsArr = [...this.state.Contacts];
    sortContactsArr.sort((a, b) => b.popularity - a.popularity);
    this.setState({ Contacts: sortContactsArr })
  }

  deleteOneContact = evt => {
    const deletedContactArr = [...this.state.Contacts];
    deletedContactArr.splice(evt, 1);
    this.setState({ Contacts: deletedContactArr })
  }

  render() {
    return (
      <>
        <section>
          <button onClick={this.addRandomContact}>Add random contact</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
        </section>
        <table>
          <thead>
            <tr className="tableHead">
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.Contacts.map((cont, i) => (
              <Contact key={i}
                index={i}
                picture={cont.pictureUrl}
                name={cont.name}
                popularity={cont.popularity.toFixed(2)}
                clbk={this.deleteOneContact}
              />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default App;
