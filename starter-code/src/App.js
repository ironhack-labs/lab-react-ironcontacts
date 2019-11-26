import React, { Component } from 'react';
import Contacts from './contacts.json'
import Contact from './Contact'
import './App.css';

class App extends Component {

  state = {
    Contacts: Contacts.slice(0, 5)
  }

  findOneRandomContact() {
    const randomContact = Contacts.slice(5)[9];
    return randomContact;
  }

  addRandomContact = evt => {
    const contactsArr = [this.state.Contacts];
    contactsArr.push(this.findOneRandomContact());
    this.setState({ Contacts: contactsArr });
  }

  render() {
    return (
      <>
        <section>
          <button onClick={this.addRandomContact}>Add random contact</button>
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
                picture={cont.pictureUrl}
                name={cont.name}
                popularity={cont.popularity.toFixed(2)}
              />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default App;
