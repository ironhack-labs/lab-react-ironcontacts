import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // create an array of of the first 5 objects in contacts.json
      visibleContacts: contacts.slice(0,5), 
      invisibleContacts: contacts.slice(5,contacts.length-5)
    }
  }

  firstFive = () => {
    return this.state.visibleContacts.map((eachContact, i) => {
      return(
        <tr key={i}>
          <td><img className="pic" src={eachContact.pictureUrl} alt={eachContact.name}/></td>
          <td>{eachContact.name}</td>
          <td>{eachContact.popularity}</td>
          <td><button onClick={() => {this.delete(i)}}>Delete</button></td>
        </tr>
      );
    });
  }

  // add a random start from the API
  addRandomStar = () => {
    console.log("inside")
    let visibleClone = [...this.state.visibleContacts]; 
    let invisibleClone = [...this.state.invisibleContacts];
    let randomStar = invisibleClone.splice(Math.floor((Math.random()*contacts.length)), 1)[0];

    if(randomStar)
      visibleClone.push(randomStar);

    this.setState({visibleContacts: visibleClone, invisibleContacts: invisibleClone,});
  }

  // sort by alphabetical order
  sortByName = () => { 
    let alphabeticalOrder = this.state.visibleContacts.sort(function(a, b) {
      if (a.name > b.name) 
        return 1;
      else if (a.name < b.name) 
        return -1;
      else
        return 0;
    });

    this.setState({visibleContacts: alphabeticalOrder,});
  }

  // sort by descending popularity
  sortByPopularity = () => { 
    let popularityOrder = this.state.visibleContacts.sort(function(a, b) {
      if (a.popularity < b.popularity) 
        return 1;
      else if (a.popularity > b.popularity) 
        return -1;
      else
        return 0;
    });

    this.setState({visibleContacts: popularityOrder,});
  }

  // delete method
  delete = (i) => {
    let currentContacts = [...this.state.visibleContacts]; 

    currentContacts.splice(i, 1);

    this.setState({visibleContacts: currentContacts,});
  }

  render() {
    return (
      <div className="App">

        <h1>Contacts</h1>
        <button onClick={this.addRandomStar}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table className="tbl">
          <thead className="tbl-header">
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.firstFive()}
          </tbody>
        </table>

      </div>
    );
  }
}

export default App;
