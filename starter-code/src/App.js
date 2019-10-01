import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Row from './components/Row';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contactsShow: contacts.slice(0, 5),
    }
  }

  addRandom() {
    const restArray = contacts.slice(5);
    const randomContact = restArray[Math.floor(Math.random() * restArray.length)];
    const newArr = [...this.state.contactsShow];
    newArr.unshift(randomContact);
    this.setState({
      contactsShow: newArr,
    })
  }

  compareName(a, b) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }

  sortByName() {
    const newArr = [...this.state.contactsShow];
    newArr.sort(this.compareName);
    this.setState({
      contactsShow: newArr,
    })
  }

  sortByPopularity() {
    const newArr = [...this.state.contactsShow];
    newArr.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    this.setState({
      contactsShow: newArr,
    })
  }

  deleteHandler(contactIdx) {
    console.log('click', contactIdx);
    const newArr = [...this.state.contactsShow];
    newArr.splice(contactIdx, 1);
    this.setState({
      contactsShow: newArr,
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Ironhack Contacts</h1>
        <button onClick={() => this.addRandom()}>Add Random Contact</button>
        <button onClick={() => this.sortByName()}>Sort by Name</button>
        <button onClick={() => this.sortByPopularity()}>Sort by Popularity</button>
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
            { this.state.contactsShow.map((contact,index) => 
            <Row key={index} deleteHandler={() => this.deleteHandler(index)} {...contact} />) 
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;