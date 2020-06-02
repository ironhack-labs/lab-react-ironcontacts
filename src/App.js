import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contactsFromJSOM from './contacts.json';
import Tr from './components/Tr';

class App extends Component {

  state = {
    firstVisibleContacts: contactsFromJSOM.slice(0,5)
  };

  // Iteration 2
  addContactHandler = () => {
    let i = contactsFromJSOM.length - 1;
    let randomIndex = Math.floor(Math.random() * i);

    const stateCopy = this.state.firstVisibleContacts;

    if (!this.state.firstVisibleContacts.includes(contactsFromJSOM[randomIndex])) {
      stateCopy.push(contactsFromJSOM[randomIndex]);

      this.setState({
        firstVisibleContacts: stateCopy
      });
    }
  };

  // Iteration 3
  sortByNameHandler = () => {
    const stateCopy = this.state.firstVisibleContacts;

    stateCopy.sort((a, b) => (a.name > b.name) ? 1 : -1)

    this.setState({
      firstVisibleContacts: stateCopy
    });
  };

  sortByPopularityHandler = () => {
    const stateCopy = this.state.firstVisibleContacts;

    stateCopy.sort((a, b) => (a.popularity < b.popularity) ? 1 : -1)

    this.setState({
      firstVisibleContacts: stateCopy
    });
  };

  // Iteration 4
  deleteContactHandler = (id) => {
    const stateCopy = this.state.firstVisibleContacts;
    const indexToDelete = stateCopy.findIndex((contact) => contact.id === id);

    stateCopy.splice(indexToDelete, 1);

    this.setState({
      firstVisibleContacts: stateCopy
    });
  };



  render() {
    return (
      <div className="App">
        <h1>Iron Contacts</h1>

        {/* Iteration 2 */}
        <button onClick={() => this.addContactHandler()}>Add Random Contact</button>

        {/* Iteration 3 */}
        <button onClick={() => this.sortByNameHandler()}>Sort by name</button>
        <button onClick={() => this.sortByPopularityHandler()}>Sort by popularity</button>

        <table>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>

                    {/* Iteration 4 */}
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
              {this.state.firstVisibleContacts.map((theContact) =>{
                return(
                <Tr key={theContact.id} {...theContact} clickToDelete={() => this.deleteContactHandler(theContact.id)}/>
                )
              })}
            </tbody>
        </table>
      </div>
    );
  }
  
}

export default App;
