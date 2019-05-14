import React, { Component } from 'react';
import logo from './logo.svg';
import contacts from './contacts.json'
import './App.css';

class App extends Component {
  //Functions

  state = {
    counter: 0,
    // loggedIn: false,
    // color: null,
    contacts: contacts.splice(0, 5),
    filteredContacts: contacts
  };


  showArray = () => {
    console.log(this.state.contacts)
    let contactsCopy = this.state.contacts.map((person, i) => {
      return (
        <tr key={i}>
          <th>{person.name}</th>
          <th>
            <img src={person.pictureUrl} width="75em" alt="img" />
          </th>
          <th>{person.popularity}</th>
        </tr>
      )
    })
    console.log('')

    return contactsCopy.splice(0, 5)
  }

  //Creates new celeb on click
  celebClick = e => {
    let randomNumber = Math.floor((Math.random() * this.state.contacts.length) + 1);
    let contactArray = this.state.contacts

    contactArray.push(contacts[randomNumber])

    this.setState({ contacts: contactArray })
  }

  //Deletes the corresponding contact
  deleteCeleb = (something) => {
    //Copy array is the same as all other copy arrays. Name is different to avoid confusion
    let copyArray = this.state.contacts
    copyArray.splice(something, 1)

    this.setState({
      contacts: copyArray
    })

  }

  //Sorts by both pop and name depending on input 
  sortBy = (field, x, y) => {
    let sortedContacts = this.state.contacts.sort((a, b) => (a[field] < b[field] ? x : y));

    this.setState({
      contacts: sortedContacts
    });
  }


  //Shows the page
  render() {
    return (
      <div className="App">


        <button onClick={this.celebClick}>Add Random Contact</button>
        <button onClick={_ => this.sortBy('name', '-1', '1')}>Sort By Name</button>
        <button onClick={_ => this.sortBy('popularity', '1', '-1')}>Sort By Popularity</button>


        <table>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Populariy</th>
          </tr>
          {this.state.contacts.map((celeb, i) => {
            return (
              <tr key={i}>
                <td><img width="70px" src={celeb.pictureUrl} /></td>
                <td>{celeb.name}</td>
                <td>{celeb.popularity}</td>
                <td><button onClick={_ => this.deleteCeleb(i)}>Delete</button></td>
              </tr>
            )
          })}
        </table >




      </div >
    );
  }
}

export default App;