import React, { Component } from 'react';
import './App.scss';

import contacts from './contacts.json';

import Navbar from './components/Navbar/index';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5),
      count: 0
    };

    this.addItem = this.addItem.bind(this);
    this.sortName = this.sortName.bind(this);
    this.sortPopularity = this.sortPopularity.bind(this);
    this.removeItem = this.removeItem.bind(this);

  }

  /*ADD ITEM*/

  addItem() {
    const randomContact = contacts[4 + Math.floor(Math.random() * contacts.length - 4)];
    
    const incluido = this.state.contacts.includes(randomContact);
    console.log(incluido);

    if(incluido === false){
      this.setState(previousState => ({
        contacts: [...previousState.contacts, randomContact]
      }));
    }


    
  }

  /*SORT BY NAME*/
  sortName() {
    function compare(a, b) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      let comparison = 0;

      if (nameA > nameB) {
        comparison = 1;
      } else if (nameB > nameA) {
        comparison = -1;
      }

      return comparison;
    }

    this.setState(previousState => ({
      contacts: this.state.contacts.sort(compare)
    }));
  }

  /*SORT BY POPULARITY*/
  sortPopularity(){
    function compare(a, b) {
      const popularityA = Number(a.popularity);
      const popularityB = Number(b.popularity);

      let comparison = 0;

      if (popularityA > popularityB) {
        comparison = -1;
      } else if (popularityB > popularityA) {
        comparison = 1;
      }else{
        comparison = 0;
      }

      return comparison;
    }


    this.setState(previousState => ({
      contacts: this.state.contacts.sort(compare)
    }));
  }

  removeItem(name){
    this.setState ( previousState => ({
      contacts:previousState.contacts.filter( item => item.name !== name)
    }));
  }

  render() {
    return (
      <div className="App">
        
        <Navbar></Navbar>


        <h1>IronContacts</h1>

        <button onClick={() => this.addItem()}>Add Random Contact</button>
        <button onClick={() => this.sortName()}>Sort by name</button>
        <button onClick={() => this.sortPopularity()}>Sort by popularity</button>
        
        <div className="tableCenter">
          <table>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
            {this.state.contacts.map(contact => {
              return (
                <tr key={contact.name}> {/*Colocar uma Key por elemento */}
                  <td>
                    <img src={contact.pictureUrl}></img>
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td><button onClick={() => this.removeItem(contact.name)}>Delete</button></td>
                </tr>
              );
            })}
            
          </table>

        </div>
        
      </div>
    );
  }
}

export default App;
