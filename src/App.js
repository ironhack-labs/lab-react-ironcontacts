import React from 'react';
import logo from './logo.svg';
import './App.css';
import contactsAll from './contacts.json';
import Contacts from './components/Contact';

class App extends React.Component {
  state = {
    firstContact: contactsAll.slice(0, 5),
  };

  addRandomContact = () => {
    const selectRandomContact =
      contactsAll[Math.floor(Math.random() * contactsAll.length)];

    this.setState({
      firstContact: [...this.state.firstContact, selectRandomContact],
    });
  };

  sortByName = () => {
    //locale compare permet de comparer entre une valeur et une autre et redonner un chiffre - ou + en fonction de l'ordre alpha
    const sortedNameList = this.state.firstContact.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    this.setState({
      firstContact: [...sortedNameList],
    });
  };

  sortByPopularity = () => {
    //Sort si un chiffe est positif ou negatif donc si on soustrait...
    const sortedPopularity = this.state.firstContact.sort(
      (a, b) => b.popularity - a.popularity
    );

    this.setState({
      firstContact: [...sortedPopularity],
    });
  };

  deleteContact = (id) => {
    const deleteOneContact = this.state.firstContact.filter(contact => contact.id !== id,
    );

    this.setState({
      firstContact: deleteOneContact,
    });
  };

  render() {
    return (
      <div className= "App">
        <button className="add-contact" onClick={this.addRandomContact}>Add random Contact</button>
        <button className="sort-contact" onClick={this.sortByName}>Sort by Name</button>
        <button className="sort-contact" onClick={this.sortByPopularity}>Sort by popularity</button>
        {this.state.firstContact.map((contact, idx) => {
          return (
            <Contacts
              id = {contact.id}
              name={contact.name}
              popularity={contact.popularity.toFixed(2)}
              picture={contact.pictureUrl}
              deleteContact={this.deleteContact}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
