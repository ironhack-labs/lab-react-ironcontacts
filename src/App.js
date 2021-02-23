import React, { Component } from 'react';

import './App.css';
import people from './contacts.json';

let allPeople = [...people]
let data = []

for (let i = 0; i <= 4; i++) {
    data.push(allPeople[i])
    const personToDelete = allPeople.indexOf(allPeople[i])
    if (personToDelete > -1) {
    allPeople.splice(personToDelete, 1);
    }
}
 

class App extends Component {

  state = {
    contacts: data
  }

  addContact () {
    const randomNum = Math.floor(Math.random() * allPeople.length)
    data.push(allPeople[randomNum])

    const personToDelete = allPeople.indexOf(allPeople[randomNum])
    if (personToDelete > -1) {
    allPeople.splice(personToDelete, 1);
    }

    if(allPeople.length === 0) {
      allPeople = [...people]
    }

    this.setState({ contacts: data });
  }

  sortByName () {
    data.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

    this.setState({ contacts: data });
  }

  sortByPopularity () {
      data.sort(function (a, b) {
      if (a.popularity < b.popularity) {
        return 1;
      }
      if (a.popularity > b.popularity) {
        return -1;
      }
      return 0;
    });
    this.setState({ contacts: data });
  }

  sort ([key]) {
          data.sort(function (a, b) {
      if (a[key] < b[key]) {
        return 1;
      }
      if (a[key] > b[key]) {
        return -1;
      }
      return 0;
    });
    this.setState({ contacts: data });
  }

  deleteContact (xxx) {

    data = this.state.contacts.filter((person) => {
      if (person.id !== xxx) {
        return true;
      }
      else if (person.id === xxx) {
        return false;
      }
    });

    this.setState({ contacts: data });
  }

  render () {
    return (
       <div className="App">
        <h1>IronContacts</h1>

        <button onClick={() => { this.addContact() }}>Add Random Contact</button>
        <button onClick={() => { this.sort('name') } }>Sort by name</button>
        <button onClick={() => { this.sort('popularity') } }>Sort by popularity</button>
        


        <table style={{ margin: '0 auto'}}>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
  
          <tbody>
            { this.state.contacts.map( (contact) => {
              return (
                <tr key={contact.id}>
                  <td> <img style={ { height: "50px" } } src={contact.pictureUrl}/></td>
                  <td>{ contact.name }</td>
                  <td>{ contact.popularity }</td>
                  <td>
                    <button onClick={() => { this.deleteContact( contact.id ) } }>Delete</button>
                  </td>  
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
