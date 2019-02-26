import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import ActorRow from "./components/ActorRow.js";
import { Table, Button } from "bloomer";
import "bulma/css/bulma.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5)
    };
  }

  // ADD A RANDOM CONTACT IN THE CONTACTS ARRAY
  addRandom = () => {
    // on crée une copie du tableau
    const contactsPlusOne = [...this.state.contacts];
    // on défini un nouveau contact en s'assurant qu'il n'existe pas déjà dans la liste
    let newContact = contactsPlusOne[0];
    while (contactsPlusOne.includes(newContact)) {
      newContact = contacts[Math.floor(Math.random() * contacts.length)];
    }
    // on ajoute le nouveau contact à la liste
    contactsPlusOne.push(newContact);
    // on change le state de la liste : on remplace l'ancienne liste pas la nouvelle
    this.setState({
      contacts: contactsPlusOne
    });
  };

  // SORT THE CONTACTS ALPHABETICALLY BY NAME
  sortByName = () => {
    const sortedByName = [...this.state.contacts];
    sortedByName.sort((a, b) => (a.name > b.name ? 1 : -1));
    this.setState({
      contacts: sortedByName
    });
  };

  // SORT THE CONTACTS BY POPULARITY (Most popular first)
  sortByPopularity = () => {
    const sortedByPopularity = [...this.state.contacts];
    sortedByPopularity.sort((a, b) => (a.popularity < b.popularity ? 1 : -1));
    this.setState({
      contacts: sortedByPopularity
    });
  };

  // DELETE A CONTACT FROM THE CONTACTS ARRAY
  deleteContact = index => {
    const newContacts = [...this.state.contacts];
    newContacts.splice(index, 1);
    this.setState({
      contacts: newContacts
    });
  };

  render() {
    return (
      <div className="everything">
        <h1 className="table-title"> IronContacts</h1>
        <div id="buttons">
          <Button className="center" onClick={this.addRandom}>
            Add Random
          </Button>
          <Button className="center" onClick={this.sortByName}>
            Sort by Name
          </Button>
          <Button className="center" onClick={this.sortByPopularity}>
            Sort by Popularity
          </Button>
        </div>

        <Table isBordered isStriped isNarrow>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th />
            </tr>
          </thead>

          <tbody>
            {/* ...contact prend toutes les clés valeurs de contact[index] et les envoie en props au children */}
            {this.state.contacts.map((contact, index) => {
              return (
                <ActorRow
                  clickToDelete={() => this.deleteContact(index)}
                  key={index}
                  {...contact}
                />
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
