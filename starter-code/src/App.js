import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import List from "./components/List";

export default class App extends Component {

  constructor(props){
    super(props)
      this.state = {
        visibleContacts: contacts.slice(0, 5), //change the state of contacts.json to a list of 5 elements
      }
    }
  
  pickRandomElementFromArray = (array) => {
    console.log(contacts.slice(0,5))
    return array[Math.floor(Math.random()*array.length)];
  }

  
  addRandomContact = () => {
    console.log(contacts.slice(0,5))
    this.setState({
      visibleContacts: [...this.state.visibleContacts, this.pickRandomElementFromArray(contacts)]
    })
  }

  sortByName = () => {
    this.setState({
      visibleContacts: this.state.visibleContacts.sort(function (a,b) {
        return a.name.localeCompare(b.name); // what are a and b?
      })
    });
  };

  sortByPopularity = () => {
    this.setState({
      visibleContacts: this.state.visibleContacts.sort(function (a,b) {
        return b.popularity -a.popularity; //a.popularity.localeCompare(b.popularity, {numeric: "true"})???
      })
    })
  }
  
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
            </tr>
          </thead>
          
          <tbody>
            {this.state.visibleContacts.map((contact, index)=> 
              <List
                key={contact.name}
                name={contact.name} 
                pictureUrl={contact.pictureUrl}
                popularity={contact.popularity}
              />
            )}
          </tbody>
        </table>
         
      </div>
    );
  }
}