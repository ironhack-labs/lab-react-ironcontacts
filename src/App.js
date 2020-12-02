import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'


export default class App extends Component {

  state = {
    list: contacts.slice(0,5)
  }
  
  randomHandler = (event) => {
    console.log('click 1');
    console.log(this.state.list, this.state.limit);

    const randNumber = () => {
      let rand = Math.round(Math.random()*contacts.length)
      return rand
    }

    
    let number = randNumber()
    do {
      number = randNumber()
    }
    while (this.state.list.includes(contacts[number]));
    let newVal = contacts[number]
    let newArr = [...this.state.list,newVal]
    this.setState({list: newArr})

  }
  sortByPopularity = () => {
    let sortedList = [...this.state.list].sort((a,b) => {
      return b.popularity-a.popularity
    })
    // console.log(sortedList)
    this.setState({list: sortedList})
  }

  sortByName = () => {
    let sortedList = [...this.state.list].sort((a,b) => {
      return a.name.localeCompare(b.name)
    })
    // console.log(sortedList)
    this.setState({list: sortedList})
  }

  deleteOne = (event) => {
    console.log(event)
    let id = event
    const newList = [...this.state.list]
    let solution = newList.filter((item) => item.id !== id)
    this.setState({list: solution})
  }


  render() {
    return (
      <div className="App">
        <button onClick={this.randomHandler}>Add Random Contact </button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
          <table>
          <thead>
            <tr>
             <th>Picture</th>
             <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {this.state.list.map(contact => {
            return (
              <tr key={contact.id}>
              <td><img src={contact.pictureUrl}></img></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td><button id={contact.id}onClick={() => this.deleteOne(contact.id)}>Delete</button></td>
              </tr>
            )
          })}
          </tbody>
          </table>
          
      </div>
    );
  }
}

