import React, { Component } from "react";
import "../src/App.css";
import contacts from "./contacts.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contactsShown: contacts.slice(0, 5)
    };
  }

  addRandomContact() {
    let allContacts = contacts.filter((newContact, idx) => this.state.contactsShown.map(c => c.name).indexOf(newContact.name) < 0);

    let randomness = Math.round(Math.random() * allContacts.length);

    this.state.contactsShown.push(allContacts[randomness]);

    this.setState({
      ...this.state,
      contactsShown: this.state.contactsShown

    });
  }

  sortByName(x) {
    this.setState({
      ...this.state,
      contactsShown: this.state.contactsShown.sort((previousPop, currentPop) => {
        if (x === "name") {
          return previousPop.name.localeCompare(currentPop.name);
        }
      })
    });
  }

  sortByPopularity(x) {
    this.setState({
      ...this.state,
      contactsShown: this.state.contactsShown.sort((previousPop, currentPop) => {
        if (x === "popularity") {
          return previousPop.popularity - currentPop.popularity;
        }
      })
    });
  }


  render() {
    return (
      <div className="App">

        <h1>Iron Contacts</h1>
        <div>
          <button onClick={() => this.addRandomContact()}> Add Random Contact</button>
          <button onClick={() => this.sortByName("name")}>Sort by Name</button>
          <button onClick={() => this.sortByPopularity("popularity")}>Sort by Popularity</button>
        </div>
        <table>
          <div>

            <p>Picture</p>
            <p>Name</p>
            <p>Popularity</p>


          </div>
          <div>
            {this.state.contactsShown.map((contact, idx) => {
              return (
                <div className="imageB" key={idx}>
                  <img src={contact.pictureUrl} />
                  <p>{contact.name}</p>
                  <p>{contact.popularity.toFixed(2)}</p>

                  {/* Agregro boton pero no he hecho la logica -------------------------------------------------- */}
                  <button onClick>Delete Contact (do not click, no working yet :D )</button>

                </div>
              );
            })}
          </div>
        </table>
      </div>
    );
  }
}
export default App;