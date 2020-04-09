import React, { Component } from 'react';
import Contacts from './contacts.json';
import ContactTable from './components/ContactTable';
import './App.css';

class App extends Component {
  state = {
    fiveContacts: Contacts.slice(0,5),
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  handleClickRandomProfile = () => {
    this.setState({
      fiveContacts: [
        ...this.state.fiveContacts,
        Contacts[this.getRandomIntInclusive(0, Contacts.length -1)]
      ]
    });
  }

  handleClickSortByName = () => {
    this.setState({
      fiveContacts: this.state.fiveContacts.sort((a, b) => a.name.localeCompare(b.name)),
    })
  }

  handleClickSortByDecreasingPopularity = () => {
    this.setState({
      fiveContacts: this.state.fiveContacts.sort((a, b) => b.popularity - a.popularity),
    })
  }

  handleClickSortByincreasingPopularity = () => {
    this.setState({
      fiveContacts: this.state.fiveContacts.sort((a, b) => a.popularity - b.popularity),
    })
  }

  handleClickRemoveProfile (index) {
    let newArray = [...this.state.fiveContacts];
      newArray.splice(index, 1);
      this.setState({fiveContacts: newArray });
    }

  //   handleClickRemoveProfile(index) {
  //     this.setState({fiveContacts: this.state.fiveContacts.filter(function(profile) { 
  //         return profile !== index.target.value 
  //     })});
  // }


  render() {
    return (
      <div className="App">
        <div className="buttons-box">
          <button className="buttons" onClick={ this.handleClickRandomProfile }>Add random profile</button>
          <button className="buttons" onClick={ this.handleClickSortByName }>Sort by name</button>
          <button className="buttons" onClick= { this.handleClickSortByDecreasingPopularity }>Sort by decreasing popularity</button>
          <button className="buttons" onClick= { this.handleClickSortByincreasingPopularity }>Sort by increasing popularity</button>
        </div>
        
        <table className="table-box">
          <tr className="header-table">
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
            {this.state.fiveContacts.map((profile, index) => (
              <ContactTable image={ profile.pictureUrl } name={ profile.name } popularity={ profile.popularity } buttonFunction={ () => this.handleClickRemoveProfile(index) } />
            ))}
        </table>
      </div>
    );
  }
}

export default App;
