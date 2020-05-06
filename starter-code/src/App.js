import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Contact from './components/Contact';

class App extends Component {
  state = {
    data: contacts.slice(0, 5),
    contacts: contacts,
  };

  addContact = () => {
    const randomContact = Math.round(Math.random() * this.state.contacts.length - 1);
    const newActor = this.state.contacts[randomContact];
    const newContact = [...this.state.data];

    newContact.push(newActor);
    this.setState({ data: newContact});
  };

  sortByName = () => {
    const newSortedByName = [...this.state.data]
    newSortedByName.sort((a, b) => a.name.localeCompare(b.name))
    this.setState({ data: newSortedByName })
  }


  sortData = () => {
    this.state.data.sort((a, b) => b.popularity - a.popularity)
    this.setState( this.state.data )
  }

  deleteData = (i) =>{
    const {data} = this.state
    const deleteData = [...data]
    deleteData.splice(i, 1)
    this.setState( {data: deleteData} )
  }

  render() {
    return (
      <div>
        <button onClick={this.addContact}>Add random contact</button>
        <button onClick={this.sortByName}>Sort By Name</button>
        <button onClick={this.sortData}>Sort by popularity</button>

        <table class="table table-dark">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            <Contact data={this.state.data} deleteData={this.deleteData} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
