import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import React from "react";

const data = contacts.slice(0, 5);
const dataList = data.map((contact) => (
  <tr key={contact.id}>
    <td>
      <img src={contact.pictureUrl} alt="pic" />
    </td>
    <td>{contact.name}</td>
    <td>{contact.popularity}</td>
  </tr>
));

class App extends React.Component {
  state = {
    contactsToDisplay: dataList,
  };

  addContact = () => {
    var ranIndex = Math.floor(Math.random() * contacts.length);
    var contactToAdd = contacts[ranIndex];
    var addedContactRow = (
      <tr key={contactToAdd.id}>
        <td>
          <img src={contactToAdd.pictureUrl} alt="pic" />
        </td>
        <td>{contactToAdd.name}</td>
        <td>{contactToAdd.popularity}</td>
      </tr>
    );
    this.setState((state) => ({
      contactsToDisplay: [addedContactRow, ...state.contactsToDisplay],
    }));
  };

  sortAlphabetically = () => {
    const sortedData = JSON.parse(JSON.stringify(this.state.contactsToDisplay))
console.log(sortedData)
    //   .sort((a, b) => a.name.localeCompare(b.name))
    //   .map((item) => (
    //     <tr key={item.id}>
    //       <td>
    //         <img src={item.pictureUrl} alt="pic" />
    //       </td>
    //       <td>{item.name}</td>
    //       <td>{item.popularity}</td>
    //     </tr>
    //   ));
    // this.setState((state) => ({
    //   contactsToDisplay: [...sortedData],
    // }));
  };
  sortPopularity = () => {};
  render() {
    return (
      <div className="App">
        <h1>Contacts</h1>
        <table>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
          </tr>
          {this.state.contactsToDisplay}
        </table>
        <button onClick={this.addContact}>Add Random Contact</button>
        <button onClick={this.sortAlphabetically}>Sort by Name</button>
      </div>
    );
  }
}

export default App;
