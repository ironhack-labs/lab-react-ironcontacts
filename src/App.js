import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Contacts from './components/contacts';


class App extends Component {

  state = {
    firstVisibleContacts: [...contacts.slice(0,5)]
  }

  addRandom = () => {
    let artistCopy = [...this.state.firstVisibleContacts];
    let array = Math.floor(Math.random() * contacts.length);
    for (let i=0; i<artistCopy.length; i++){
      if(artistCopy[i] === contacts[array]){
        array = Math.floor(Math.random() * artistCopy.length);
        i = 0
      }
    }
    artistCopy.unshift(contacts[array])

    this.setState({
      firstVisibleContacts: artistCopy
    })
  }	


  sortByName = () => {
    let sorted = [...this.state.firstVisibleContacts]
    sorted.sort((a, b) => a.name.localeCompare(b.name))

    this.setState({
      firstVisibleContacts: sorted
    })
  }

  sortByPopularity = () => {
    let sorted = [...this.state.firstVisibleContacts]
    sorted.sort((a, b) => b.popularity - a.popularity)

    this.setState({
      firstVisibleContacts: sorted
    })
  }

  deleteButton = (index) => {
    let sorted = [...this.state.firstVisibleContacts]
    sorted.splice(index, 1)

    this.setState({
      firstVisibleContacts: sorted
    })
  }

  render(){
    return (
      <div className="App">
      <h1>IronContacts</h1>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            <button onClick={this.addRandom}>Add Random Contact</button>
            <button onClick={this.sortByName}>Sort By Name</button>
            <button onClick={this.sortByPopularity}>Sort By Popularity</button>
              {this.state.firstVisibleContacts.map((contact, index) => (
              <Contacts 
                key={index} 
                pictureUrl={contact.pictureUrl} 
                name={contact.name} 
                popularity={contact.popularity} 
                delete={()=>this.deleteButton(index)}/>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
