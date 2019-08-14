import React, { Component } from "react";

import "./App.css";
import contacts from "./contacts.json";
import Card from "./components/Card";
import Button from "./components/Button";
class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          name: "Idris Elba",
          pictureUrl:
            "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
          popularity: 11.622713
        },
        {
          name: "Jessica Chastain",
          pictureUrl:
            "https://image.tmdb.org/t/p/w500/nkFrkn5NZVGWb4b2X0yIcXezhyt.jpg",
          popularity: 8.324357
        },
        {
          name: "Johnny Depp",
          pictureUrl:
            "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
          popularity: 15.656534
        },
        {
          name: "Emilia Clarke",
          pictureUrl:
            "https://image.tmdb.org/t/p/w500/j7d083zIMhwnKro3tQqDz2Fq1UD.jpg",
          popularity: 16.211837
        },
        {
          name: "Leonardo DiCaprio",
          pictureUrl:
            "https://image.tmdb.org/t/p/w500/A85WIRIKVsD2DeUSc8wQ4fOKc4e.jpg",
          popularity: 11.245333
        }
      ],
      showContacts: true
    };
  }

  addContacts = idx => {
    {
      const contactCopy = [...this.state.contacts];
      const newContact = contacts[Math.floor(Math.random() * contacts.length)];
      contactCopy.push(newContact);
      console.log(contactCopy);
      this.setState({
        ...this.state,
        contacts: contactCopy
      });
      //hacer una copia de contacts del state
      //contacts (seleccionar uno para pushearlo en el array copia)
      //this.setState({})
    }
  };

  render() {
    const filteredContacts = this.state.contacts;
    console.log(filteredContacts);
    return (
      <div className="row">
        />
        {filteredContacts.map((elm, idx) => {
          return (
            <Card
              key={idx}
              {...elm}
              picture={elm.pictureUrl}
              deleteContact={() => this.deleteOneContact(idx)}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
