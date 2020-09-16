import React, { Component } from "react";
import "./App.css";
import Row from "./components/Row";
import contacts from "./contacts.json";

class App extends Component {
    constructor() {
        super();
        this.contactosIniciales = [...contacts];
        this.primerosActores = this.contactosIniciales.splice(0, 5);
        this.state = { contacts: this.primerosActores };
    }
    addRandom = () => {
        const actoresFiltrados = this.contactosIniciales.filter((e) => !this.primerosActores.includes(e));
        let randomContact = actoresFiltrados[Math.floor(Math.random() * (actoresFiltrados.length - 1))];
        this.primerosActores.push(randomContact);
        this.setState({ contacts: this.primerosActores });
    };
    removeContact = (index) => {
        const copiaActores = [...this.state.contacts];
        copiaActores.splice(index, 1);
        this.setState({ contacts: copiaActores });
    };

    sortByName = () => {
        this.primerosActores.sort(function(a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });
        this.setState({ contacts: this.primerosActores });
    };

    sortByPopularity = () => {
      this.primerosActores.sort(function (a, b) {
        if (a.popularity < b.popularity) {
          return 1;
        }
        if (a.popularity > b.popularity) {
          return -1;
        }
        return 0;
      });
      this.setState({ contacts: this.primerosActores });
    };

    render() {
        return (

          <>
        <header>
          <h1>Famous Actors</h1>
        </header>
        <main>
          <div>
            <button onClick={this.addRandom}>Random contact</button>
            <button onClick={this.sortByName}>Sort by Name</button>
            <button onClick={this.sortByPopularity}>Sort by Popularity</button>
          </div>
          <table>
            <thead>
              <tr>
                <td>
                  <h3>Picture</h3>
                </td>
                <td>
                  <h3>Name</h3>
                </td>
                <td>
                  <h3>Popularity</h3>
                </td>
                <td>
                  <h3>Action</h3>
                </td>
              </tr>
            </thead>
            <tbody>
              {this.state.contacts.map((e, index) => (
                <Row {...e} key={e.id} removeContact={() => this.removeContact(index)} />
              ))}
            </tbody>
          </table>
        </main>
      </>
    );
  }
}

export default App;