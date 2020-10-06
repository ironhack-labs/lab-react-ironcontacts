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
    let copy = [...this.state.displayedContacts];
    copy.push(randomContact);
    this.setState({
      displayedContacts: copy,
    });
  };

  sortContactbyName = () => {
    let copy = [...this.state.displayedContacts];
    let sortedByName = copy.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    this.setState({
      displayedContacts: sortedByName,
    });
  };

  sortContactbyPopularity = () => {
    let copy = [...this.state.displayedContacts];
    let sortedByPopularity = copy.sort(
      (a, b) => parseFloat(b.popularity) - parseFloat(a.popularity)
    );
    this.setState({
      displayedContacts: sortedByPopularity,
    });
  };

  removeContact = (i) => {
    console.log(i);
    this.setState({
      displayedContacts: this.state.displayedContacts.filter(
        (contact, index) => {
          return index !== i;
        }
      ),
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
              <button onClick={this.sortContactbyName}>sort by name</button>
              <button onClick={this.sortContactbyPopularity}>
                sort by popularity
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td-title">Picture</td>
            <td className="td-title">Name</td>
            <td className="td-title">Popularity</td>
            <td className="td-title">Action</td>
          </tr>
          {this.state.displayedContacts.map((contact, i) => (
            <tr key={i}>
              <td className="td-content">
                <img src={contact.pictureUrl} alt="contact-img" />
              </td>
              <td className="td-content">{contact.name}</td>
              <td className="td-content">{contact.popularity.toFixed(2)}</td>
              <td className="td-content">
                <button onClick={(event) => this.removeContact(i)}>
                  delete
                </button>
              </td>
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
