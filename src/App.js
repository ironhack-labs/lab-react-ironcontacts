import React from 'react';
// import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  state = {
    contactFive: contacts.slice(0, 5),
  };

  randomIncrementClick = () => {
    let contactRandom = contacts[Math.floor(Math.random() * contacts.length)];
    this.setState({
      contactFive: [...this.state.contactFive, contactRandom],
    });
  };

  sortByName = () => {
    let sortName = this.state.contactFive.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    this.setState({
      contactFive: [...sortName],
    });
  };

  sortByPopularity = () => {
    let sortPopularity = this.state.contactFive.sort(
      (a, b) => b.popularity - a.popularity
    );

    this.setState({
      contactFive: [...sortPopularity],
    });
  };

  deleteContact = (i) => {
    this.setState({
      contactFive: this.state.contactFive.filter((contact, index) => {
        return index !== i;
      }),
    });
  };

  render() {
    return (
      <div className="contact-container">
        <h1>IronContacts</h1>
        <div className="btn-div">
          <button onClick={this.randomIncrementClick}>
            Add a random contact
          </button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
        </div>
        <table className="contact-table">
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>popularity</th>
            <th>Action</th>
          </tr>

          {this.state.contactFive.map((contact, i) => (
            <tr className="row-contact">
              <td className="pouet">
                <img src={contact.pictureUrl} alt={contact.name} />
              </td>
              <td>{contact.name}</td>

              <td>{contact.popularity.toFixed(2)}</td>
              <td>
                {' '}
                <button className="btn-delete" onClick={(event) => this.deleteContact(i)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default App;
