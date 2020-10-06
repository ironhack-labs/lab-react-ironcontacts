import React from 'react';
// import logo from './logo.svg';
import contacts from './contacts.json';
import './App.css';

class Contacts extends React.Component {
  state = {
    displayedContacts: contacts.slice(0, 5),
  };

  randomContact = () => {
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    console.log(randomContact);
    let copy = [...this.state.displayedContacts];
    copy.push(randomContact);
    this.setState({
      displayedContacts: copy,
    });
  };

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th className="th-title" colSpan="3">
              IronContacts
            </th>
          </tr>
          <tr>
            <th className="th-title" colSpan="3">
              <button onClick={this.randomContact}>add a random contact</button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td-title">Picture</td>
            <td className="td-title">Name</td>
            <td className="td-title">Popularity</td>
          </tr>
          {this.state.displayedContacts.map((contact, i) => (
            <tr key={i}>
              <td className="td-content">
                <img src={contact.pictureUrl} alt="contact-img" />
              </td>
              <td className="td-content">{contact.name}</td>
              <td className="td-content">{contact.popularity.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

function App() {
  return (
    <div>
      <Contacts />
    </div>
  );
}

export default App;
