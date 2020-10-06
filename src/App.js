import logo from './logo.svg';
import './App.css';
import Contact from './contacts.json';
import React, { Component } from 'react';

const ContactFive = [...Contact].slice(0, 5);

class App extends Component {
  state = {
    AllContact: ContactFive,
  };

  addNewStar = () => {
    let displayContact = [...this.state.AllContact];
    displayContact.push(
      Contact[Math.floor(Math.random() * Math.floor(Contact.length))]
    );
    this.setState({
      AllContact: displayContact,
    });
  };

  sortName = () => {
    let sortName = [...this.state.AllContact];
    sortName.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({
      AllContact: sortName,
    });
  };

  sortPop = () => {
    let sortPop = [...this.state.AllContact];
    sortPop.sort((a, b) => a.popularity - b.popularity);
    this.setState({
      AllContact: sortPop,
    });
  };

  deleteContact = (i) => {
    this.setState({
      AllContact: this.state.AllContact.filter((contact, index) => {
        return index !== i;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>IronContacts</h1>
          <button onClick={this.addNewStar}>Add Random Contact</button>
          <button onClick={this.sortName}>Add sort by Name</button>
          <button onClick={this.sortPop}>Add sort by Popularity</button>

          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.AllContact.map((person, i) => {
                return (
                  <tr>
                    <td>
                      <img
                        style={{ height: '20%' }}
                        src={person.pictureUrl}
                        alt=""
                      />
                    </td>
                    <td>{person.name}</td>
                    <td>{person.popularity.toFixed(2)}</td>
                    <td>
                      <button onClick={(event) => this.deleteContact(i)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </header>
      </div>
    );
  }
}

function Contacts(props) {
  return (
    <tr>
      <td>
        <img style={{ height: '20%' }} src={props.pictureUrl} alt="" />
      </td>
      <td>{props.name}</td>
      <td>{props.popularity.toFixed(2)}</td>
      <td>
        <button onClick={this.deleteContact}>Delete</button>
      </td>
    </tr>
  );
}

export default App;
