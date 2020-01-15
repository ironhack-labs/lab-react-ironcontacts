import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import List from "./components/List";

export class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      visibleContacts: contacts.slice(0, 5)
    };
  }
  
  pickRandomElementFromArray = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  }; 
  
  addRandomContact = () => {
    console.log(contacts.slice(0,5))
    this.setState({
      visibleContacts: [...this.state.visibleContacts, this.pickRandomElementFromArray(contacts)]
    })
  }

  /*addRandomContact = () => {
    var visibleContactsCopy = this.state.visibleContacts;
    visibleContactsCopy.push(this.pickRandomElementFromArray(contacts));
    this.setState({
      visibleContacts: visibleContactsCopy
    });
  }; */

  sortByName = () => {
    this.setState({
      visibleContacts: this.state.visibleContacts.sort(function(a, b) {
        return a.name.localeCompare(b.name);
      })
    });
  };

  sortByPopularity = () => {
    console.log(this.state.celebrities);
    this.setState({
      visibleContacts: this.state.visibleContacts.sort(function(a, b) {
        return b.popularity - a.popularity;
      })
    });
  };

  deleteContact = index => {
    var visibleContactsCopy = [...this.state.visibleContacts];
    visibleContactsCopy.splice(index, 1);
    this.setState({
      visibleContacts: visibleContactsCopy
    });
  };
  //////////////////////////
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add a random contact</button>
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
            {this.state.visibleContacts.map((contact, index)=> //important to use index in your function if you pass it as an parameter
              <List
                key={index} 
                name={contact.name} 
                pictureUrl={contact.pictureUrl}
                popularity={contact.popularity.toFixed(3)}
                clickAndDelete={this.deleteContact.bind(this, index)}
              />
            )}
          </tbody>
        </table>
         
      </div>
    );
  }
}

export default App;