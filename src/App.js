import "./App.css";
import React from "react";
import contacts from "./contacts.json";
import Card from "./Card";

class App extends React.Component {
  state = {
    contacts: contacts.splice(0, 5)
  };

  addContactHandler = () => {
    this.setState((state) => {
      let randomNum = Math.floor(Math.random() * (contacts.length));
      let randomContact = contacts[randomNum];

      return {
        contacts: state.contacts.concat(randomContact),
      }
    });
  };

  sortContactHandler = (property) => {
    this.setState((state) => {

      return {
        contacts: state.contacts.sort((a, b) => (a[property] > b[property]) ? 1 : -1),
      }
    });
  };

  deleteContactHandler = (id) => {
    this.setState((state) => {
      return {
        contacts: state.contacts.filter((contact) => {
          return contact.id !== id;
        }),
      };
    });
  };


  render() {
    const { contacts } = this.state;

    return <div className="App">
      <ul>
        <h1>IronContacts</h1>
        <button onClick={this.addContactHandler} >Add a Random Contact</button>
        <button onClick={() => this.sortContactHandler("name")} >Sort by Name</button>
        <button onClick={() => this.sortContactHandler("popularity")} >Sort by Popularity</button>

        <div className="header">
          <span>Picture</span>
          <span>Name</span>
          <span>popularity</span>
          <span>Action</span>
        </div>

        {contacts.map((contact) => {
          return (
            <>
              <div>
                <Card key={contact.id} {...contact} removeContact={this.deleteContactHandler} />
              </div>
            </>

          )
        })}
      </ul>

    </div>;
  }
}
export default App;