import React from 'react';
import './App.css';
import contacts from './contacts.json';
import { render } from '@testing-library/react';
// let newContacts = contacts.map((contacts) => contacts.name);
// console.log(contacts);
//console.log('contacts', contacts[0], contacts[1]);

// let newContacts = contacts.slice(0, 5);

// console.log(randomContact(contacts));

class App extends React.Component {
  /*first we have to set the initial state, this is so we can
   change the appearance when we change the state, by setting the state
   to contacts.slice we dont need to let newContacts above*/
  state = {
    actors: contacts.slice(0, 5),
  };

  /*to get the random contact for the button on click, 
  first have to find a random contact, then using the spread operator
  we can make a shallow copy of the current state of actors and add on the 
  the random contact  */

  //still need to check and make sure its not a duplicate

  randomContact(contacts) {
    let randomAddition = contacts[Math.floor(Math.random() * contacts.length)];
    // if(randomAddition.name === )

    console.log(randomAddition.name, this.state.actors);
    let newContactList = [...this.state.actors, randomAddition];
    /*then we need to update the state so we can render the page with 
the most up to date information, we use this.setState and update 
the actors wuth the newContactList */
    this.setState({
      actors: newContactList,
    });
  }

  /*again we have another function that we can call inside the app
  via onClick, first copy the current state using spread operators again
  so we arent mutating the original, then we can sort through this array
  alphabetically. Using the conditional terniary operator we check if a is greater 
  than be then sort the list from a-z( if we instead put ? -1 : 1  then we
    would have the list sorted from z-a) */
  sortContacts() {
    let currentList = [...this.state.actors];
    let sortedList = currentList.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
    /*same as before the next thing we need to do is change the state
    so that when this function is called after the button is clicked 
    we render the latest state and display the updates on the browser */

    // console.log(sortedList);
    this.setState({
      actors: sortedList,
    });
  }
  /*same logic as above, copy and paste but changed the sort function
  to instead of search by name search by populartity */
  popularityContacts() {
    let currentList = [...this.state.actors];
    let sortedPopularList = currentList.sort((a, b) => {
      return a.popularity < b.popularity ? 1 : -1;
    });
    //console.log(sortedPopularList);
    this.setState({
      actors: sortedPopularList,
    });
  }

  /*to delete the contact from the array we use the filter method which will return 
  an array with all the elements that pass the test, for this case we return 
  the current contact list  that does not equal the specific contact, we go through
  and check against each person in the array and make sure they are not the same a
  as the person we want to delete, then filter returns the array without the current contact*/
  deleteContact(thisContact) {
    let currentList = [...this.state.actors];
    let filteredContactList = currentList.filter((currentConatctsList) => {
      // console.log(
      //   'this is the current list of contacts were checking against',
      //   currentConatctsList,
      //   'this is the current contact we are trying to delete',
      //   thisContact
      // );
      return currentConatctsList !== thisContact;
    });

    // console.log(filteredContactList);
    this.setState({
      actors: filteredContactList,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={() => this.randomContact(contacts)}>
          Add Random Contact
        </button>
        <button onClick={() => this.sortContacts(contacts)}>
          Sort by NAme
        </button>
        <button onClick={() => this.popularityContacts(contacts)}>
          Sort by Popularity
        </button>
        <div>
          <table>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
            {this.state.actors.map((contacts) => (
              <tr>
                <td>
                  <img
                    className="contact__picture"
                    key={contacts.pictureUrl}
                    src={contacts.pictureUrl}
                    alt=""
                  />
                </td>
                <td key={contacts.name}>{contacts.name}</td>
                <td key={contacts.popularity}>{contacts.popularity}</td>
                <td>
                  <button onClick={() => this.deleteContact(contacts)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }
}

export default App;
