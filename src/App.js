// import logo from './logo.svg';
// import './App.css';
import contacts from "./contacts.json"

import React, { Component } from 'react'

class Contacts extends Component {
  state = {
    movieStars: contacts.slice(0, 5),
  };

  handleAddRandom = (evt) => {
    console.log("hello");
    const randomMovieStar =
      contacts[Math.floor(Math.random() * contacts.length)];
    console.log(randomMovieStar);
    // const copyMovieStars = [...this.state.movieStars]; ==> c'est la meme chose qu'en ligne19
    // copyMovieStars.unshift(randomMovieStar)
    this.setState({ movieStars: [randomMovieStar, ...this.state.movieStars] });
  };

  handleSortByName = (evt) => {
    console.log("sorting in progress");
    const sortMovieStar = this.state.movieStars.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    console.log(sortMovieStar);
    this.setState({ movieStars: [sortMovieStar, ...this.state.movieStars] });
  };


  handleSortByPopularity = (evt) => {
    console.log("sorting by popularity in progress");
    const sortPopularity = this.state.movieStars.sort((a,b)=>{return a.popularity-b.popularity})
    console.log(sortPopularity);
    this.setState({ movieStars: [sortPopularity, ...this.state.movieStars]})
  }

  render() {
    return (
      <div className="Contacts">
        {/* {console.log(this.state)} */}
        <h1>IronContacts</h1>
        <button onClick={this.handleAddRandom}>Add Random contact</button>
        <button onClick={this.handleSortByName}>Sort By Name</button>
        <button onClick={this.handleSortByPopularity}>
          Sort by Popularity
        </button>
        <table>
          <thead>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
            </tr>
          </thead>
          <tbody>
            {this.state.movieStars.map((contact) => (
              <tr>
                <td>
                  <img className="picture" src={contact.pictureUrl} alt="pic" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}





function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    <Contacts/>
    </div>
  );
}

export default App;
