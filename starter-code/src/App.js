import React, { Component } from 'react';
import './App.css';
import IdCards from './components/Card';
import contacts from './contacts.json';
import Boton from './components/Button';

class App extends Component {
  state = {
    cartas: contacts.slice(0, 5),
  };

  AddRandomContact = () => {
    const { cartas } = this.state;
    const randContact = contacts[Math.floor(Math.random() * (contacts.length - 1))];
    if (cartas.every(carta => randContact.id !== carta.id)) {
      cartas.push(randContact);
      this.setState({ cartas });
    } else {
      if (cartas.length === contacts.length) {
        return;
      } else {
        this.AddRandomContact();
      }
    }
  };

  SortByName = () => {
    const { cartas } = this.state;
    cartas.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({ cartas });
  };

  SortByPopularity = () => {
    const { cartas } = this.state;
    cartas.sort((a, b) => a.popularity > b.popularity ? 1 : -1);
    this.setState({ cartas });
  }

  DeleteCard = (e, id) => {
    const { cartas } = this.state;
    cartas.splice( id, 1)
    this.setState({ cartas });
  }

  render() {
    return (
      <div className="App">
        <div className="BarraBoton">
          <Boton function={this.AddRandomContact} texto="Add Random Character" />
          <Boton function={this.SortByName} texto="Sort By Name" />
          <Boton function={this.SortByPopularity} texto="Sort By Popularity" />
        </div>
        <div className="Cartas">
          <IdCards function={(e)=>this.DeleteCard(e)} contacts={this.state.cartas} />
        </div>
      </div>
    );
  }
}

export default App;
