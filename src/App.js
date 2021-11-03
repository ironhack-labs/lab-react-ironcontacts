import React from "react";
import "./App.css";
import contacts from "./contacts.json";

const firstFiveContacts = contacts.slice(0, 5);
console.log(firstFiveContacts);

function getRandomContact() {
  return contacts[Math.ceil(Math.random()*contacts.length)];
};

class Contact extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <img src={this.props.pictureUrl} alt="profile" />
        </td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity.toFixed(2)}</td>
      </tr>
    );
  }
}

class App extends React.Component {
  state = {
    contactsDisplayed: firstFiveContacts
  };

  addRandomContact = () => {
    this.setState((prevState, props) => {
      let randomContact = getRandomContact();
      return {
        contactsDisplayed: [...prevState.contactsDisplayed, randomContact],
      };
    })
  }

  render() {
    return (
      <div className="container">
        <h1>IronContacts</h1>
        <div className="buttons">
          <button onClick={this.addRandomContact}>Add Random Contact</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactsDisplayed.map((contact) => {
              return <Contact key={contact.id} {...contact} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
