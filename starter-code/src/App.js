import React, { Component } from 'react';
import Contact from './Contact/Contact'

import contacts from './contacts.json';

import './App.css';

class App extends Component {

  state = {

    famous: [
      {
        "name": "Idris Elba",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
        "popularity": 11.622713,
        "id": "11731993-0604-4bee-80d5-67ad845d0a38"
      },
      {
        "name": "Jessica Chastain",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/nkFrkn5NZVGWb4b2X0yIcXezhyt.jpg",
        "popularity": 8.324357,
        "id": "17980511-75ca-48b0-bea8-462fec2ee43d"
      },
      {
        "name": "Johnny Depp",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
        "popularity": 15.656534,
        "id": "7dad00f7-3949-477d-a7e2-1467fd2cfc06"
      },
      {
        "name": "Emilia Clarke",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/j7d083zIMhwnKro3tQqDz2Fq1UD.jpg",
        "popularity": 16.211837,
        "id": "e14aa81d-b812-412d-bc4d-4a0d2c9c66f4"
      },
      {
        "name": "Leonardo DiCaprio",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/A85WIRIKVsD2DeUSc8wQ4fOKc4e.jpg",
        "popularity": 11.245333,
        "id": "b4d2c7b8-fdd5-426a-85bd-011c3f50a6c6"
      },
    ]


  };


  //random button //

  randomContact() {
    let newState = {...this.state};

    newState.famous.push(contacts[Math.floor(Math.random() * 199)]);

    this.setState(newState);
  }


  // SORT BY NAME & SOR BY POPULARITY //

  sortByName() {

    let newState = { ...this.state };

    newState.famous.sort((a, b) => a.name.localeCompare(b.name));

    this.setState(newState);
  }


  sortByPopularity() {

    let newState = { ...this.state };

    newState.famous.sort((a, b) => b.popularity - a.popularity);

    this.setState(newState);
  }

    // REMOVE CONTACT //

    removeContact(specifyID) {

      let newState = {...this.state};

      let filtered = newState.famous.filter((famous) => famous.id !== specifyID);

      newState.famous = filtered;

      this.setState(newState);

    }

  render() {
    return (
      <div className="App">


        <h1>Iron Contacts</h1>
        <div className="btns">
          <button className="randomContact" onClick={() => this.randomContact()}>Add random contact.</button>
          <button className="sortByName" onClick={() => this.sortByName()}>Sort by name.</button>
          <button className="srtByPopularity" onClick={() => this.sortByPopularity()}>Sort by popularity</button>
        </div>

        <table className="tableContacts">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Remove</th>
            </tr>
          </thead>

          <tbody>
            {this.state.famous.map(famous => (

              <Contact deleteContact={() => this.removeContact(famous.id)} key={famous.id}  pictureUrl={famous.pictureUrl} name={famous.name} popularity={famous.popularity}></Contact>

            ))}

          </tbody>

        </table>

      </div>
    );
  }
}

export default App;
