import React, { Component } from 'react';
import contacts from './contacts.json';
import ListElement from './components/ListElement';
import './App.css';

class App extends Component {

  state = {
    movieStars: contacts.slice(0, 5),
  }

  addRandomToArray = () => {
    this.setState({
      movieStars: this.state.movieStars.concat(contacts[Math.floor(Math.random() * contacts.length)]),
    });
  }

  sortByName = () => {
    this.setState({
      movieStars: this.state.movieStars.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)),
    });
  }

  sortByPopularity = () => {
    this.setState({
      movieStars: this.state.movieStars.sort((a,b) => (a.popularity > b.popularity) ? -1 : ((b.popularity > a.popularity) ? 1 : 0)),
    });
  }

  deleteContact = (id) => {
    const moviesCopy = [...this.state.movieStars];
    const movieIndex = moviesCopy.findIndex(item => item.id === id);
    moviesCopy.splice(movieIndex, 1);
    this.setState({
      movieStars: moviesCopy,
    });
  }

  render() {
    const { movieStars } = this.state;
    return (
      <div className="App">
      {console.log(movieStars)}
      <h1 className="homepage-title">IronContacts</h1>
      <div>
        <button onClick={this.addRandomToArray} className='add-random-btn'>Add Random Contact</button>
        <button onClick={this.sortByName} className='add-random-btn'>Sort by Name</button>
        <button onClick={this.sortByPopularity} className='add-random-btn'>Sort by Popularity</button>
      </div>
        <table className="homepage-table">
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
            {movieStars.map(item => (
             <ListElement key={item.id} img={item.pictureUrl} name={item.name} popularity={item.popularity} deleted={() => this.deleteContact(item.id)}/>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
