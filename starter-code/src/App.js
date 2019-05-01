import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import contactsList from "./contacts.json";
import Contact from "./Contact/Contact";
import Button from "./Button/Button";

class App extends Component {
  constructor() {
    super(); // il faut absolument un super car ma classe App prend les méthodes de son parent qui est React (cf. ligne 1), dont une des méthodes est state, dont j'ai besoin
    // this.handleClick = this.handleClick.bind(this);
    // this.getRandom = this.getRandom.bind(this);
    this.state = {
      // "state" original c'est à dire que quand j'affiche, de base ça ne m'affiche que 5 acteurs
      contacts: contactsList.slice(0, 5) // à mon objet this.state, je donne un key "contacts"
    };
  }

  // Iteration 2 - Add random contacts
  handleClick = () => {
    const randomContact = this.getRandom();
    const newContactsList = [...this.state.contacts];
    newContactsList.push(randomContact);
    this.setState({ contacts: newContactsList });
  };

  getRandom = () => {
    const randomIndex =
      contactsList[Math.floor(Math.random() * contactsList.length)];
    console.log(randomIndex);
    return randomIndex;
  };

  // Iteration 3 - Sort by name & popularity
  sortByName = () => {
    const sortedContacts = [...this.state.contacts];
    sortedContacts.sort((a, b) => {
      if (a.name < b.name) return -1;
      else if (a.name > b.name) return 1;
      else return 0;
    });
    this.setState({ contacts: sortedContacts });
  };

  sortByPopularity = () => {
    const sortedContacts = [...this.state.contacts];
    sortedContacts.sort((a, b) => {
      if (a.popularity < b.popularity) return 1;
      else if (a.popularity > b.popularity) return -1;
      else return 0;
    });
    this.setState({ contacts: sortedContacts });
  };

  // Iteration 4 - Delete a contact
  deleteOne = index => {
    // ici, index est le paramètre de la fonction deleteOne (prettier enlève les parenthèses)
    const clickedContact = [...this.state.contacts];
    clickedContact.splice(index, 1);
    this.setState({ contacts: clickedContact });
  };

  render() {
    // méthode utilisée pour tout composant alimenté par React qui retourne un JSX avec des données back-end
    return (
      <div className="App">
        <h1 className="title">Iron Contacts</h1>
        <Button text="Add random contact" onClick={this.handleClick} />
        {/* j'insère le composant Button qui a 2 props: un texte et un événement onClick. Le onClick appelle la méthode handleClick de la classe App */}
        <Button text="Sort by name" onClick={this.sortByName} />
        <Button text="Sort by popularity" onClick={this.sortByPopularity} />
        <table className="actors">
          <div className="column-header">Picture</div>
          <div className="column-header">Name</div>
          <div className="column-header">Popularity</div>
          <div className="column-header">Action</div>
        </table>
        <Contact contacts={this.state.contacts} whenClicked={this.deleteOne} />
        {/* dans mon component "Contact", on passe comme props "contacts" avec son state actuel qui est dans ce cas de "slicer" après 5 acteurs */}
      </div>
    );
  }
}

export default App;
