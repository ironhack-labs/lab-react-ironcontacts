import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import React from "react";
class App extends React.Component {
  state = {
    contacts: contacts.slice(0, 5),
  };
  //display the first 5 contacts

  addRandom = () => {
    let randomItem = contacts[Math.floor(Math.random() * contacts.length)];
    let copyContacts = [...this.state.contacts];
    copyContacts.push(randomItem);
    this.setState({
      contacts: copyContacts,
    });
  };

  byName = () => {
    let copyList = [...this.state.contacts];
    let sortNames = copyList.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({
      contacts: sortNames,
    });
  };

  byPop = () => {
    let copyList = [...this.state.contacts];
    let sortPop = copyList.sort((a, b) => (a.popularity < b.popularity ? 1 : -1));
    this.setState({
      contacts: sortPop,
    });
  };

  delete = (contactId) => {
    let copyList = [...this.state.contacts];
    let deleteContact = copyList.filter((contact) => contact.id !== contactId);
    this.setState({
      contacts: deleteContact,
    });
  };

  // handleDelete = itemId => {
  //   const items = this.state.items.filter(item => item.id !== itemId);
  //   this.setState({ items: items });
  // };

  render() {
    return (
      <div className="App">
        <div>
          <div className="title">
            <h1>IronContacts</h1>
          </div>
          <div className="tableContainer">
          <div >
            <button onClick={this.addRandom}>Add random contact</button>
            <button onClick={this.byName}>Sort By Name</button>
            <button onClick={this.byPop}>Sort By Popularity</button>
          </div>
          <div className="contactTable">
            <table>
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.contacts.map((contact) => {
                  return (
                    <tr key={contact.id}>
                      <td>
                        <img src={contact.pictureUrl} style={{ width: "30px" }} className="imgShadow"/>
                      </td>
                      <td>{contact.name}</td>
                      <td>{contact.popularity}</td>
                      <td>
                        <button onClick={() => this.delete(contact.id)}>Delete</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
