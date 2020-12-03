import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

let fiveContacts = contacts.slice(0, 5);
console.log(fiveContacts);
const contactNumbers = [1, 2, 3, 4, 5];
console.log('Contacts length', contacts.length);

class App extends React.Component {
  state = {
    pressed: '',
  };

  randomAdd = () => {
    if (contacts.length <= contactNumbers.length) {
      //if all the contacts are not already displayed
      return;
    }
    const numOfContact = Math.round(Math.random() * contacts.length); //generate random number
    console.log('contacts[numOfContact]', contacts[numOfContact]);
    console.log(
      `contaNumbers is ${contactNumbers} and numOfContact is ${numOfContact} (contactNumbers.includes(numOfContact)= ${contactNumbers.includes(
        numOfContact
      )}`
    );
    if (contactNumbers.includes(numOfContact)) {
      //if this number doesn't exist inside the array
      return this.randomAdd(); //why even I have this it is printing repeated contacts????
    }
    fiveContacts.push(contacts[numOfContact]);
    contactNumbers.push(numOfContact);
    // console.log('Array of fiveContacts', fiveContacts);
    this.setState({ pressed: '' });
  };

  sortByName = () => {
    fiveContacts.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    this.setState({ pressed: '' });
  };
  sortByPopularity = () => {
    fiveContacts.sort((b, a) =>
      a.popularity > b.popularity ? 1 : b.popularity > a.popularity ? -1 : 0
    );
    this.setState({ pressed: '' });
  };

  deleteAction = (value) => {
    console.log('this is the value', value);
    fiveContacts = fiveContacts.filter(function (ele) {
      //why when I do sort or push the array gets automatically changed but
      return ele != value; //in order to change fiveContacts I had to do fiveContacts =fiveContacts.filter?
    });
    this.setState({ pressed: '' }); //even we don't change the value to a different one, just the act of updating is enough?
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={() => this.randomAdd()}>Add random contact</button>
        <button onClick={() => this.sortByName()}>Sort by Name</button>
        <button onClick={() => this.sortByPopularity()}>
          Sort by Popularity
        </button>
        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
            {fiveContacts.map((contact) => (
              <tr key={contact.name}>
                <td>
                  <img src={contact.pictureUrl} width="100px" height="100px" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>
                  {' '}
                  <button onClick={() => this.deleteAction(contact)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;
