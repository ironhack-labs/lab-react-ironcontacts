import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import MyComponent from 'react-divider'




class App extends Component {
  state = {
    artists : [
      contacts[0],
      contacts[1],
      contacts[2],
      contacts[3],
      contacts[4]
    ]
  }

  addRandom = () => {
    const artistsCopy = this.state.artists
    artistsCopy.push(contacts[Math.floor(Math.random() * contacts.length)])
    this.setState({
      artists: artistsCopy
    })
  }

  sortName = () => {
    const artistsCopy = this.state.artists.sort((a, b) =>  (a.name).localeCompare(b.name)  )
    this.setState({
      artists: artistsCopy
    })
  }
  
  sortPopularity = () => {
    const artistsCopy = this.state.artists.sort((a, b) =>  b.popularity - a.popularity  )
    this.setState({
      artists: artistsCopy
    })
  }

  removeContact = (index) =>{
    const artistsCopy = this.state.artists
    artistsCopy.splice(index,1)
    this.setState({
      artists: artistsCopy
    })
  }

  render() {
    return ( 
      <>
        <h1>Ironcontacts</h1>  
        <button onClick={this.addRandom}>Add Random Contact</button> 
        <button onClick={this.sortName}>Sort by name</button> 
        <button onClick={this.sortPopularity}>Sort by popularity</button> 
        <hr></hr>
        <hr></hr>

        <table className="ironContacts">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr> 
          </thead>
          <tbody>
            {this.state.artists.map((element, index ) => (
              <tr key={index}>
                <td><img src={this.state.artists[index].pictureUrl} alt="Image"/></td>
                <td>{this.state.artists[index].name}</td>
                <td>{this.state.artists[index].popularity}</td>
                <td><button className="bdelete" onClick={() => this.removeContact(index)}>Delete</button></td>  
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default App;
