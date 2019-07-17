import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Contacts from './components/Contacts';

class App extends Component {
  constructor() {
    super()

    this.state = {
      Listado: [...contacts].slice(0, 5)
    }
  }

  addRandom() {
    console.log("fuckmaer")
    let Contactscopy = [...this.state.contacts]
    let Listadocopy = [...this.state.Listado]

    Contactscopy.forEach(contactShowed => {
      Listadocopy.splice(Listadocopy.indexOf(contactShowed), 1)
    });
    console.log(Listadocopy)

    let random = Math.floor(Math.random() * Listadocopy.length)

    Contactscopy.push(Listadocopy[random])

    this.setState({
      ...this.state.Listadocopy

      // Listado: Listadocopy
      // contacts: Contactscopy
    })
  }


  sortByName() {
    let orderedList = [...this.state.Listado];

    orderedList.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

    this.setState({
      ...this.state,
      Listado: orderedList
    })
  }

  sortByPopularity() {
    let orderedList = [...this.state.Listado];

    orderedList.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (a.popularity < b.popularity) {
        return 1;
      }
      return 0;
    })

    this.setState({
      Listado: orderedList
    })
  }

  deleteContact = idx => {
    const Contactscopy = [...this.state.contacts]
    Contactscopy.splice(idx, 1)

    this.setState({
      Listado: Contactscopy
    })
  }

  render() {
        return(
      <div className = "Listado" >
            <button onClick={() => this.addRandom()}>Add random contact</button>
            <button onClick={() => this.sortByName()}>Sort by Name</button>
            <button onClick={() => this.sortByPopularity()}>Sort by Popularity</button>

            <Contacts Listado={this.state.Listado} />
      </div>
    );
  }
}

export default App;
