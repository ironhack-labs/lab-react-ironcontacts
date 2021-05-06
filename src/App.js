import React, { Component } from 'react'
import './App.css';
import contacts from "./contacts.json";


class App extends Component {
  state = {
    contacts: contacts.slice(0, 5)
  }

  randomContact = ()=>{
    let randomNumber = Math.floor(Math.random() * contacts.length)
    this.state.contacts.push(contacts[randomNumber])
    this.setState( {contacts: this.state.contacts} )
  }

  sortByName = ()=>{
    this.state.contacts.sort((a,b)=> {
      return a.name>b.name ? 1 : a.name<b.name ? -1 : 0
    })
    this.setState( {contacts: this.state.contacts} )
  }

  sortByPopularity = ()=>{
    this.state.contacts.sort((a,b)=> {
      return a.popularity>b.popularity ? -1 : a.popularity<b.popularity ? 1 : 0
    })
    this.setState( {contacts: this.state.contacts} )
  }

  delete = (index)=>{
    console.log(index)
    this.state.contacts.splice(index, 1)
    this.setState( {contacts: this.state.contacts} )
  }

  render(){
    return (
      <main>
        <section className="table">
  
          <h1>Iron Contacts</h1>
          <button onClick={() => this.randomContact()}>Add Random Contact</button>
          <button onClick={() => this.sortByName()}>Sort by Name</button>
          <button onClick={() => this.sortByPopularity()}>Sort by Popularity</button>
          <table>
            {this.state.contacts.map((artist, index)=>{
              return (
                <div>
                  <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                  </tr>
                  <tr key={index+1}>
                    <td>
                      <img src={artist.pictureUrl} alt="artist-photo" className="profile-picture"/>
                    </td>
                    <td className="cells">
                      {artist.name}
                    </td>
                    <td className="cells">
                      {artist.popularity}
                    </td>
                    <td>
                      <button onClick={() => this.delete(index)}>Delete</button>
                    </td>
                  </tr>
                </div>
              )
            })}
          </table>
        </section>
      </main>
    );
  }
}

export default App;
