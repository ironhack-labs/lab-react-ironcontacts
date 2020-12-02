import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'



export default class App extends Component {


  state = {
    contacts: contacts.slice(0,5),
  }

  display = () => {
    let arr = [];
    for (let i = 0; i < this.state.contacts.length; i++) {
      arr.push(
              <tr key={this.state.contacts[i].id} className="listItem">
                <td> <img src={this.state.contacts[i].pictureUrl} alt="image" style={{height: '10vw'}}/></td>
                <td>{this.state.contacts[i].name}</td>
                <td>{this.state.contacts[i].popularity}</td>
                <td><button onClick={ () => this.removeOneById(this.state.contacts[i].id) }>Remove</button></td>
              </tr> 
      )
    }

    return arr;

  }

  add = () => {

    const random = contacts[Math.floor(Math.random() * (contacts.length - this.state.contacts.length) + this.state.contacts.length)]
    const newList = this.state.contacts.concat(random)
  
    this.setState( (state, props) => ({
      contacts: newList
    }))
  }

  sortByName = () => {
    const sorted = this.state.contacts.sort( (a, b) => {
      return a.name.localeCompare(b.name) 
    })
    
    this.setState( () => ({
      contacts: sorted
    }))

  }

  sortByPopularity = () => {
    console.log('sort by pop was clicked')
    const sorted = this.state.contacts.sort( (a, b) => {
      return a.popularity - b.popularity 
    })
    
    this.setState( () => ({
      contacts: sorted
    }))

    console.log(sorted)
  }

  removeOneById = (id) => {
    console.log(`${id}`)

    console.log(this.state.contacts)

    const contactsList = this.state.contacts

    const  newList = contactsList.filter( (elem) => {
     return elem.id !== id
   })

    this.setState( () => ({
      contacts: newList
    }))

    console.log(newList)
  }

  render() {
    return (
        <div className="globalContainer">
          <h1>IronContacts</h1>
          <button onClick={this.add}>Add Random Contact</button>
          <button onClick={this.sortByName}>Sort By Name</button>
          <button onClick={this.sortByPopularity}>Sort By Popularity</button>
          <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.display()}
          </tbody>
          </table>
        </div>
    )
  }


}


