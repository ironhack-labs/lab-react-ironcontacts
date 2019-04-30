import React from "react";
import "./App.css";
import contacts from "./contacts.json";
import Card from "./Card";
const contactArr = contacts.splice(0, 5);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      cont: contactArr
    };
  }
  addNewContact() {
    let allContacts = [...this.state.cont];
    const randomContact = Math.floor(Math.random() * 200);
    let newContact = contacts[randomContact];
    console.log(contacts[randomContact]);
    allContacts.push(newContact);
    this.setState({
      ...this.state,
      cont: allContacts
    });
  }
  sortByName() {
    let allContacts = [...this.state.cont];

    allContacts.sort(function(a, b) {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    });
    this.setState({
      ...this.state,
      cont: allContacts
    });
  }

  sortByPopularity() {
    let allContacts = [...this.state.cont];

    allContacts.sort(function(a, b) {
      if (a.popularity > b.popularity) {
        return 1;
      } else {
        return -1;
      }
    });
    this.setState({
      ...this.state,
      cont: allContacts
    });
  }
  deleteCard(name) {
    console.log(name)
    this.setState({
      ...this.state,
      cont: this.state.cont.filter(con => con.name !== name)
      
    })  
  }




  render() {

    const mappedCards = this.state.cont.map(contact => {
      return (
        <React.Fragment key={contact.popularity}>
          <Card
            name={contact.name}
            pictureUrl={contact.pictureUrl}
            popularity={contact.popularity}
          />
            <button onClick={() => this.deleteCard(contact.name)}>Delete</button>

          {/* <Card {...card} /> */}
        </React.Fragment>
      );
    });
    return (
      <React.Fragment>
        <h1>Iron contacts</h1>
        <div className="header">
          <div className="cardBody">
            <span>Picture</span>
            <span>Name</span>
            <span>Popularity</span>
          </div>
          <div className="buttons">
            <button onClick={() => this.addNewContact()}>Add new contact</button>
            <button onClick={() => this.sortByName()}>Sort by name</button>
            <button onClick={() => this.sortByPopularity()}>
              Sort by popularity
            </button>
          </div>

        </div>
        {mappedCards}
      </React.Fragment>
    );
  }
}

export default App;
