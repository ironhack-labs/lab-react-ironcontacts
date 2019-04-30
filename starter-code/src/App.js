import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Movie from "./Components/Movie";
import contacts from "./contacts.json";

let x = contacts.map(
  (contact,idx) =>
    (contact = {
      name: contact.name,
      pictureUrl: contact.pictureUrl,
      popularity: contact.popularity,
      key: idx
    })
);
let z = [...x];

function dynamicSort(property) {
  var sortOrder = 1;

  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }

  return function (a,b) {
      if(sortOrder == -1){
          return b[property].localeCompare(a[property]);
      }else{
          return a[property].localeCompare(b[property]);
      }        
  }
}



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      allContacts: z.slice(0, 5),
      counter: contacts.lenght
    };
  }

  delteContact(id) {
    console.log(id),
      this.setState({
        ...this.state,
        allContacts: this.state.allContacts.filter(movie => movie.key !== id)
      });
  }

  nuevoContacto() {
    let nuevoContact = [...this.state.allContacts];
    nuevoContact.push(z[Math.floor(Math.random() * z.length)]);
    this.setState({
      ...this.state,
      allContacts: nuevoContact
    });
  }

  sortPopularity(){
    let ordenar = [...this.state.allContacts]
    ordenar= ordenar.sort(function (a, b) {
      return a.popularity - b.popularity;
    })
    this.setState({
      ...this.state,
      allContacts: ordenar
    });

  }

  sortName(){

    let ordenar = [...this.state.allContacts]
    ordenar=ordenar.sort(dynamicSort("name"))
    this.setState({
      ...this.state,
      allContacts: ordenar
    });
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Welcome to React Contacts {this.state.counter}
          </h1>
        </header>
        <hr />

        <button onClick={() => this.nuevoContacto()}>Add new Contact</button>

        <button onClick={() => this.sortPopularity()}>Sort popularity</button>
        <button onClick={() => this.sortName()}>Sort name</button>
        <hr />
        {this.state.allContacts.map(contact => {
          return (
            <div key={contact.key}>
              <Movie
                name={contact.name}
                src={contact.pictureUrl}
                popularity={contact.popularity}
              />

              <button onClick={() => this.delteContact(contact.key)}>
                Borrar
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

