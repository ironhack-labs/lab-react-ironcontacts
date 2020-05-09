import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json"; // Importing contacts
// import FiveCharacters from './components/FiveCharacters';
// import AddButton from './components/AddButton';

class App extends Component {

  state = { // Creating the state
    fiveContacts:contacts.slice(0,5)
  }

// Iteration 2 : Random element added to the previous array
  handleRandom = (event) => {
    // Number between 0 and stars.length
    const min = Math.ceil(5)
    const max = Math.floor(contacts.length)
    const randomStar = Math.floor(Math.random() * (max - min) + min)
    // Getting the person related to the index from the array
    let newCelebrity = contacts[randomStar]
    // Cannot mutate directly the state, so need setState() + a copy
    let currentStars = [... this.state.fiveContacts]
    currentStars.push(newCelebrity)
    // Redefine the state to that contact (but everytime we refresh the page)
    // this will be deleted
    this.setState({ fiveContacts: currentStars })
  }

  // Iteration 3 : slice and map are also creating a copy : same as [... this.state.fiveContacts]
  // const copy = this.state.fiveContacts.slice()
  // const copy = this.state.fiveContacts.map((contact) => contact);
  handleSortByName = (event) => {
    const copy = [...this.state.fiveContacts];
    copy.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({ fiveContacts: copy });
  };

  handleSortByPopularity = (event) => {
    const copy = [...this.state.fiveContacts];
    copy.sort((a, b) => {
      return a.popularity - b.popularity;
    });
    this.setState({ fiveContacts: copy });
  };

  // handleDelete = (index) => {
  //   const copy = [...this.state.fiveContacts];
  //   copy.splice(index, 1);
  //   this.setState( { fiveContacts: copy } );
  // };

  // we could also do :
  // handleDelete = (theSelectedContactIndex) => {
  //   const newArray = this.state.fiveContacts.filter((contact, index) => index !== theSelectedContactIndex);
  //   this.setState({ fiveContacts: newArray} )
  // }

  // or like this: (filter makes a copy and doesn't mutate the original array)
  deleteButton = (idFromCelebrityToDelete) => {
    let filteredArray = this.state.fiveContacts.filter((contact, index) => {
      return idFromCelebrityToDelete !== index;  // filter() needs a condition to filter the elements allowed inside the new array
      // ici on veut tous ceux avec un id différent car celui choisi sera supprimé, donc on retournera tous ceux non supprimés
    });
    this.setState({ fiveContacts: filteredArray})
  };

  render() {
    return (
      <div className="App">
          {/* Iteration 2/3/4 : on every change it renders the entire render() again,
          so that they appear inside the table */}
          <div>
            <button onClick={this.handleRandom}>Add Random Contact</button>
            <button onClick={this.handleSortByName}>Sort by name</button>
            <button onClick={this.handleSortByPopularity}>Sort by popularity</button>
          </div>
  {/* Iteration 1 : map method renders first 5 elements */}
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
              {this.state.fiveContacts.map((contact, index) =>
                <tr key={index}>
                  <td><img src={contact.pictureUrl} alt =""/></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>

                  {/* Iteration 5 */}

                  {/* For every click we have a function, it's like document.getElementById.onclick = function () {} */}
                  {/* Also, we need to add the anonymous function in order to target a specific element, and not
                      a global method such as adding or sorting */}
                  <td><button onClick={() => this.deleteButton(index)}>Delete</button></td>

                  {/* These are doing the same, but the anonymous function allows us to pass an argument*/}
                  {/* <td><button onClick={this.deleteButton}>Delete</button></td> */}
                </tr>
              )}
            </tbody>
          </table>

      </div>
    );
  }
}

export default App;
