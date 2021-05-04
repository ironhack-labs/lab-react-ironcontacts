import React, { Component } from 'react';
import './App.css';
import contactsArray from './contacts.json';

class App extends Component {
  constructor(){
    super();

    this.state = {
      contacts: contactsArray.slice(0,5),
    }

    this.addRandomContact = this.addRandomContact.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  addRandomContact(){
    //agafar random de la llista total
    const randomContact = contactsArray[Math.floor(Math.random() * contactsArray.length)];
    
    //crear nou array amb contacts i random
    const newArr = this.state.contacts;
    newArr.push(randomContact);

    //afegir nou array al state
    this.setState({
      contacts: newArr,
    });
  }

  sortByName(){
    const sortByNameArr = this.state.contacts.sort((a, b) => {
      if(a.name < b.name){
        return -1;
      } else if(a.name > b.name){
        return 1;
      } else {
        return 0;
      }
    })

    this.setState({
      contacts: sortByNameArr,
    })
  }

  sortByPopularity(){
    const sortByPopularityArr = this.state.contacts.sort((a, b) => {
      return b.popularity - a.popularity;
    })

    this.setState({
      contacts: sortByPopularityArr,
    })
  }

  deleteContact(index){
    const deleteArray = this.state.contacts;
    deleteArray.splice(index,1);

    this.setState({
      contacts: deleteArray,
    })
  }

  render() {
    return (
      <div>
        <h2>Iron Contacts</h2>
        <button onClick={this.addRandomContact}>Add random contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          {this.state.contacts.map((item, index) => (
            <tr>
              <td><img src={item.pictureUrl} height="100"/></td>
              <td>{item.name}</td>
              <td>{item.popularity}</td>
              <td><button onClick={() => {this.deleteContact(index)}}>Delete</button></td>
            </tr>
          ))}
        </table>
      </div>
    )
  }
}

export default App;
