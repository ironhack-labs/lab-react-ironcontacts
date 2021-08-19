import React from "react";
import contacts from "./contacts.json";
import "./App.css";

function getRandomContact() {
  return contacts[Math.floor(Math.random() * contacts.length)];
}
class Contact extends React.Component {
  render() {
    return (
      <tr key={this.props.id}>
        <td>
          <img src={this.props.pictureUrl} alt={this.props.name + "photo"} />
        </td>
        <td>{this.props.name}</td>
        <td>{Math.round(this.props.popularity * 100) / 100}</td>
      </tr>
    );
  }
}
class App extends React.Component {
  state = {
    contactList: contacts.slice(0, 5),
  };

  addContact = () => {
    console.log("click");
    console.log(getRandomContact());
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.push(getRandomContact()),
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <button onClick={this.addContact}>Add Random Contact</button>
        <table>
          <thead>
            <tr className="header-row">
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactList.map((contactObj) => {
              return <Contact key={contactObj.id} {...contactObj} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
