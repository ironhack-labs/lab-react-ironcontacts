import React, { Component } from "react";
import contacts from "./contacts.json";
import "./App.css";

class App extends Component {
  state = {
    Celebrities: contacts.slice(0,5)
  }

  getRandomContact = () => {
    let randomContact = Math.floor(Math.random() * contacts.length);
    let addContact = this.state.Celebrities;
    if (contacts.indexOf(randomContact) === -1) {
      addContact.push(contacts[randomContact]);
    }
    this.setState({
      Celebrities: addContact
    })
    return addContact
  }

  
  sortByName = () => {
    let sorted = this.state.Celebrities;
    sorted.sort((a,b) => {
      if(a.name < b.name){
        return -1;
      }
      else if(a.name > b.name){
        return 1;
      }
      return 0;
    })
    this.setState({
      Celebrities: sorted
    })
  }


  sortByPopularity = () => {
    let sorted = this.state.Celebrities;
    sorted.sort((a,b) => {
      if(a.popularity > b.popularity){
        return -1;
      }
      else if(a.popularity < b.popularity){
        return 1;
      }
      return 0;
    })
    this.setState({
      Celebrities: sorted
    })
  }

  deleteContact = (index) => {
    let delCeleb = [...this.state.Celebrities]
    delCeleb.splice(index, 1)


    this.setState({
      Celebrities: delCeleb
    })

  }
  render() {
    return (
      <div className='IronContacts'>
          <h1 className="App-title">IronContacts</h1>
          <div>
            <button onClick={this.getRandomContact}>Add Random Contact</button>
            <button onClick={this.sortByName}>Sort by name</button>
            <button onClick={this.sortByPopularity}>Sort by Popularity</button>
          </div>
        <table width='400px'>
          <tr>
            <th><h2>Picture</h2></th>
            <th><h2>Name</h2></th>
            <th><h2>Popularity</h2></th>
            <th><h2>Action</h2></th>
          </tr>       
        {this.state.Celebrities.map((contacts, index) => {
          return (
              <tr key={contacts.id}>
                  <td><img height='90px' src={contacts.pictureUrl} alt='' /></td>
                  <td><h3 className='CelebrityName'>{contacts.name}</h3></td>
              <td><h3>{contacts.popularity.toFixed(2)}</h3></td>
                  <td><button onClick={this.deleteContact}>Delete</button></td>
                </tr>  
          );
        })}
        </table>
      </div>
    );
  }
}

export default App;