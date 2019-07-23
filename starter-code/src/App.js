import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import ArtistRow from './component/ArtistRow';
import Button from './component/Button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: contacts.slice(0, 5),
    };
  }

  addRandomContact() {
    const arr = [...this.state.list];
    let filteredArr = contacts.filter(contact => !arr.includes(contact));

    if(filteredArr.length === 0) {
      return;
    } else {
      arr.push(filteredArr[Math.floor(Math.random() * filteredArr.length)]);
    }

    this.setState({
      list: arr,
    });
  }

  sortByPopularity() {
    let arr = [...this.state.list];

    this.setState({
      list:  arr.sort((a, b) => b.popularity - a.popularity),
    });
  }

  sortByName() {
    let arr = [...this.state.list];

    this.setState({
      list:  arr.sort((a, b) => a.name.localeCompare(b.name)),
    });
  }

  deleteContact(index) {
    const arr = [...this.state.list];
    arr.splice(index, 1);

    this.setState({
      list: arr,
    })
  }
  

  render() {
    return (
      <div className="App">
      <h1>IronContacts</h1>
      <div id="buttons">
        <Button btnClick={() => this.addRandomContact()}>Add Random Contact</Button>
        <Button btnClick={() => this.sortByPopularity()}>Sort by popularity</Button>
        <Button btnClick={() => this.sortByName()}>Sort by name</Button>
      </div>
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
            {this.state.list.map((contact,index) => <ArtistRow btnClick={() => this.deleteContact(index)} key={index} {...contact} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
