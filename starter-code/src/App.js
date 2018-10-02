import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ListConts} from './components/ListConts.js';
import contacts from './contacts.json'


const contactCopy = contacts.splice(0, 5);

class App extends Component {
  
  constructor(){
    super();
    this.state = {contactCopy}
}

  addRandomContact = () => {
    let contact= contacts.splice(Math.random()*(contacts.length - 0) + 0, 1)[0]
    let copy = [...this.state.contactCopy]
    copy.push(contact)
    this.setState({contactCopy: copy});
  }

  sortByName = () => {
    let copy = [...this.state.contactCopy]
    copy.sort((a, b) => (a.name) - (b.name));
    console.log("COPY", copy)
    this.setState({contactCopy: copy});
  }
  sortByPopularity = () => {
    let copy = [...this.state.contactCopy]
    copy.sort((a, b) => b.popularity - a.popularity);
    this.setState({contactCopy: copy});
  }

  deleteContact = (idx) => {
    let copy = [...this.state.contactCopy]
    console.log("ENTRA", idx)
    copy.splice(idx, 1);
    this.setState({contactCopy: copy});
  }

  render() {
    return (
      <div className="App">
          <button onClick={()=> this.addRandomContact()}>Add Random Contact</button>
          <button onClick={()=> this.sortByName()}>Sort By Name</button>
          <button onClick={()=> this.sortByPopularity()}>Sort By Popularity</button>
        <table>
          <th>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
            
          </th>
          <ListConts data={this.state.contactCopy} delete={this.deleteContact}/>
        </table> 
      </div>
    );
  }
}

export default App;


/*  */