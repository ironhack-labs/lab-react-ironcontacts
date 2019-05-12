import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Description from "./Description"

class App extends Component {
  constructor() {
    super();
    this.state = {
      fiveContactsArray: contacts.slice(0, 5)
    }
    this.onClickHandle = this.onClickHandle.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  onClickHandle() {

    console.log(contacts.slice(0, 5))
    console.log(this.state.fiveContactsArray)
    var randomElement = contacts.slice(5)[Math.floor(Math.random() * contacts.length)];
    console.log(randomElement);
    let newArr = [...this.state.fiveContactsArray]; //we don't want to change array in this.state so we make copy
    newArr.push(randomElement);
    this.setState({
      fiveContactsArray: newArr
    });

  }

  sortByPopularity() {
    let sortedArr = this.state.fiveContactsArray.sort((a, b) => b.popularity - a.popularity);
    this.setState({
      fiveContactsArray: sortedArr
    });
  }

  sortByName() {
    let sortedArr = this.state.fiveContactsArray.sort((a, b) => {
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    this.setState({
      fiveContactsArray: sortedArr
    });
  }

  deleteContact(event) {
    /*even.target.value = index of element that has to be deleted. 
    Value is property of delete button tag and is equal to index.
    Info about index we get through map function.
    */
    console.log(event.target.value)
    let newArr = [...this.state.fiveContactsArray];
    newArr.splice(event.target.value, 1)
    this.setState({
      fiveContactsArray: newArr
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>IronContacts</h1>
        </header>
        <div>
          <button className="greenButton" onClick={this.onClickHandle}>add random contact</button>
          <button className="greenButton" onClick={this.sortByName}>sort by name</button>
          <button className="greenButton" onClick={this.sortByPopularity}>sort by popularity</button>
        </div>
        <table>
          <thead>
            <tr className="table-header">
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.fiveContactsArray.map((contact, index) => {
              return (
                <Description key={contact.name} img={contact.pictureUrl} name={contact.name} popularity={contact.popularity}>
                  <button value={index} onClick={this.deleteContact} className="delete">delete</button>
                </Description>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
