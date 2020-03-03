import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Celebrity from './Component/Celebrity';

class App extends Component {
  constructor() {
    super();
    this.state = {
      celebrity: contacts.splice(0, 5)
    };
    this.addCeleb = this.addCeleb.bind(this);
    this.sortCeleb = this.sortCeleb.bind(this);
    this.popCeleb = this.popCeleb.bind(this);
    this.deleteCeleb = this.deleteCeleb.bind(this);
  }

  addCeleb() {
    const addCelebrity = contacts[Math.floor(Math.random() * contacts.length)];

    this.setState({
      celebrity: [...this.state.celebrity, addCelebrity]
    });
  }

  sortCeleb() {
    let sortedArray = [...this.state.celebrity].sort(function(a, b) {
      let firstName = a.name;
      let secondName = b.name;
      if (firstName < secondName) {
        return -1;
      } else if (firstName > secondName) {
        return 1;
      } else return 0;
    });

    this.setState({
      celebrity: sortedArray
    });
  }

  popCeleb() {
    let popArray = [...this.state.celebrity].sort(function(a, b) {
      if (a.popularity > b.popularity) {
        return -1;
      } else if (a.popularity < b.popularity) {
        return 1;
      } else return 0;
    });

    this.setState({
      celebrity: popArray
    });
  }

  deleteCeleb(id) {
    this.setState(previousState => ({
      celebrity: previousState.celebrity.filter(item => item.name !== id)
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <button onClick={this.addCeleb}>Add Random Contact</button>
        <button onClick={this.sortCeleb}>Sort Alphabetically</button>
        <button onClick={this.popCeleb}>Sort Popularity</button>

        <table className="table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.celebrity.map(celeb => {
              return <Celebrity key={celeb.id} info={celeb} del={this.deleteCeleb} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
