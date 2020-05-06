import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  state = {
        contacts: [...contacts].slice(1,6)
          }
  addMovie = () => {
    const newContact = contacts[Math.floor(Math.random() * contacts.length)];
    const contactsCopy = this.state.contacts.slice();
    contactsCopy.push(newContact);
    this.setState({
      contacts: this.state.contacts.concat(newContact)
    })
  }
  sortByName = () => {
    const contactsCopy = this.state.contacts.slice();
    contactsCopy.sort((a, b) => a.name.localeCompare(b.name))
    this.setState({
      contacts: contactsCopy
    })
  }
    sortByPop = () => {
    const contactsCopy = this.state.contacts.slice();
    contactsCopy.sort((a, b) => b.popularity - a.popularity)
    this.setState({
      contacts: contactsCopy
    })
  }
  deleteMovie = i =>{
    const contactsCopy = this.state.contacts.slice();
    contactsCopy.splice(i,1)
    this.setState({
      contacts: contactsCopy
    })
  }
  render() {
      console.log(this.state.contacts)
    
    return (
      <div className="App">
      <h1>IronContacts</h1>
       <button onClick={this.addMovie}>Add a contact</button>
       <button onClick={this.sortByName}>Sort by name</button>
       <button onClick={this.sortByPop}>Sort by popularity</button>
          <table>
         <tbody>
         <tr className="title">
                  <td>Picture</td>
                   <td>Name</td>
                   <td>Popularity</td>
                   </tr>
           {
                this.state.contacts.map((numList,i) =>(
                   <tr key={numList.id}>
                  <td> <img style = {{width :"10rem"}}src = {numList.pictureUrl} /></td>
                   <td>{numList.name}</td>
                   <td>{(Math.round(numList.popularity * 100) / 100).toFixed(2)}</td>
                   <td>
                   <button onClick={() =>this.deleteMovie(i)}>Delete</button>
                  
                   </td>
                   </tr>
                ))
           }
         </tbody>
       </table>
    </div>
    );
  }
}

export default App;
