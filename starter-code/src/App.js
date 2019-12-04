import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import CardComponent from './components/CardComponent'

class App extends Component {
  state = {
    directors:[
      contacts[0],
      contacts[1],
      contacts[2],
      contacts[3],
      contacts[4],
    ]
  };

  addRandomDirector = () => {
    let randomNum = Math.floor(Math.random() * 199);
    const { name, popularity, pictureUrl} = contacts[randomNum];

    this.setState({
      directors: [...this.state.directors, { name, popularity, pictureUrl }],
    });
  };

  sortByName = () => {
    const sorted = this.state.directors.sort(function(a, b) {
      var nameA = a.name.toUpperCase(); 
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      return 0;
    });

    this.setState({
      directors : sorted
    });
  };

  sortByPopularity = () => {
    const sorted = this.state.directors.sort(function (a, b) {
      return a.popularity - b.popularity;
    });

    this.setState({
      directors: sorted
    });
  }

  removeDirector = index => {
    const directorsCopy = this.state.directors;
    directorsCopy.splice(index, 1);

    this.setState({
      directors: directorsCopy
    });
  };

  render() {
    return (
      <>
        <button onClick={this.addRandomDirector}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
            { this.state.directors.map((item, index) => (
              <CardComponent
                {...item}
                key={index}
                index={index}
                removeDirector={this.removeDirector}
              />
            )) }
          </tbody>
        </table>
      </>
    );
  }
}

export default App;
