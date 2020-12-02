import React from 'react';
import logo from './logo.svg';
import './App.css';
import allContacts from './contacts.json';
console.log(allContacts);
const contacts = allContacts.slice(0, 5);
console.log(contacts);

class App extends React.Component {
  state = {
    displayedContacts: contacts,
  };

  addRandomContact = () => {
    let randomContact =
      allContacts[Math.floor(Math.random() * allContacts.length)];
    let newArray = [...this.state.displayedContacts, randomContact];
    this.setState({
      displayedContacts: newArray,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div>
          <button onClick={() => this.addRandomContact()}>
            Add Random Contact
          </button>
        </div>

        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>

          {this.state.displayedContacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt="contact pic"
                  style={{ height: '100px' }}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default App;
