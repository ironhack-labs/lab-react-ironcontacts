import React, { Component } from "react";
import logo from "./logo.svg";
import Contact from "./components/Contact.js";
import contacts from "./contacts.json";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ourContacts: [
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
      contactArray: contacts
    };
  }

  randomContact() {
    const randomIndex = Math.floor(Math.random() * contacts.length);
    const addContact = contacts[randomIndex];

    const allContacts = this.state.ourContacts;
    allContacts.push(addContact);
    this.setState({ ourContacts: allContacts });
  }

  sortContactByName(contacts) {
    contacts.sort((contactA, contactB) => {
      if (contactA.name < contactB.name) {
        return -1;
      } else {
        return 1;
      }
    });
    this.setState({ ourContacts: contacts });
  }

  sortContactByPopularity(contacts) {
    contacts.sort((contactA, contactB) => {
      if (contactA.popularity < contactB.popularity) {
        return -1;
      } else {
        return 1;
      }
    });
    this.setState({ ourContacts: contacts });
  }

  render() {
    const { ourContacts } = this.state;

    return (
      <div className="App">
        <h2>IronContacts</h2>

        <button onClick={() => this.randomContact()}>Add Random Contact</button>

        <button onClick={() => this.sortContactByName(ourContacts)}>
          Sort By Name
        </button>

        <button onClick={() => this.sortContactByPopularity(ourContacts)}>
          Sort By Popularity
        </button>

        <div className="title">
          <p>Picture</p>
          <p>Name</p>
          <p>Popularity</p>
        </div>
        <div>
          {ourContacts.map(oneName => {
            return <Contact celebrityName={oneName.name} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
