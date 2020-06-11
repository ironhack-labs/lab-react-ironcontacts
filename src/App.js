//import React from 'react';
//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

import contacts from './contacts.json';



// function App {
  class App extends Component {

  state = {
      firstVisibleContacts: contacts.slice(0,5)
  }


  addRandom = () => {
    const contactsCopy = this.state.firstVisibleContacts;

    let random = contacts[Math.floor(Math.random() * contacts.length)];

    let inclu = contactsCopy.includes(random);

    if(!inclu){
      contactsCopy.unshift(random);
      this.setState({
        firstVisibleContacts: contactsCopy
      })
    }
    else{
      console.log("NAH")
    }
   
  };

  deleteContact = (contact) => {
      let copyList = [...this.state.firstVisibleContacts];
      copyList.splice(copyList.findIndex(el => el.id === contact.id), 1);

      this.setState({
        firstVisibleContacts: copyList
      })
  }
// how could i make these two sortings into ONE?
  sortName = () => {
    let copy = [...this.state.firstVisibleContacts];
    copy.sort((a, b) => (a.name > b.name) ? 1 : -1)

    this.setState({
      firstVisibleContacts: copy
    })
  }

  sortPop = () => {
    let copy = [...this.state.firstVisibleContacts];
    copy.sort((a, b) => (a.popularity > b.popularity) ? 1 : -1)

    this.setState({
      firstVisibleContacts: copy
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        IronContacts
        </header>
        <hr/>
          <button onClick={this.addRandom}>ADD RANDOM CONTACT</button>
          <button onClick={this.sortName}>Sort by Name</button>
          <button onClick={this.sortPop}>Sort by Popularity</button>
        <hr/>
        <table>
        <thead>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          
          {this.state.firstVisibleContacts.map( actor => {
              
              return (

                <tr key={actor.id}>
                  <td><img src={actor.pictureUrl} alt="gaddam" width="80"/></td>
                  <td>{actor.name}</td>
                  <td>{actor.popularity}</td>
                  <td><button onClick={() => this.deleteContact(actor)}>DELETE</button></td>
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
