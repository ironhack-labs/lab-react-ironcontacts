import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';


class App extends Component {
  state = {
    firstFiveContacts: contacts.slice(0, 5),
  }
  
  selectRandom = () => {
    const contactsCopy =  [...this.state.firstFiveContacts]
    const newRandom = contacts[Math.floor(Math.random()*contacts.length)];
    if(!contactsCopy.includes(newRandom)){
      contactsCopy.push(newRandom)
    }
    this.setState({
      firstFiveContacts: contactsCopy
    })
  }

  sortByName = () => {
    const nameSortedArr = [...this.state.firstFiveContacts].sort((a,b) => {
      if (a.name > b.name){
        return 1;
      } else if (a.name < b.name){
        return -1
      } else {
        return 0
      }
    });
    this.setState({
      firstFiveContacts: nameSortedArr
    })
  }

  sortByPopularity = () => {
    const popSortedArr = [...this.state.firstFiveContacts].sort((a,b) => {
      if (a.popularity > b.popularity){
        return 1;
      } else if (a.popularity < b.popularity){
        return -1
      } else {
        return 0
      }
    });
    this.setState({
      firstFiveContacts: popSortedArr
    })
  }

  deleteContact = (contactIndex) => {
    const contactsCopy = [...this.state.firstFiveContacts]
    const filtered = contactsCopy.filter(oneContact => oneContact.id !== contactIndex)

    this.setState({
      firstFiveContacts: filtered
    })
  }


  
  render() {
    return (
      <div className="App">
        <h1>IconContacts</h1>
        <button onClick={this.selectRandom}>Add a random contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Delete</th>

            </tr>
          </thead>
          <tbody>
            {this.state.firstFiveContacts.map((oneContact, index) => {
              return (
                <tr key={index} {...oneContact}>
                  <td>
                    <img src={oneContact.pictureUrl} alt="" width="60" />
                  </td>
                  <td>{oneContact.name}</td>
                  <td>{Math.round(oneContact.popularity * 100) / 100}</td>
                  <td><button onClick={() => this.deleteContact(oneContact.id)}>Delete</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
