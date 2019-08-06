import React, { Component } from 'react';
import contacts from './contacts.json';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      contacts: contacts, 
      contactsFive : contacts.splice(0, 5)
    }
  }

  getRandomActor () {
    const randomActor = this.state.contacts[Math.floor(Math.random() * 
    this.state.contacts.length)];
    console.log(randomActor); 
    debugger;

    const clonedArray = [randomActor].concat(this.state.contactsFive)
    this.setState({
      contactsFive : clonedArray
    })
  }

  sortByname () {
    const clonedArray = [...this.state.contactsFive];
    clonedArray.sort((contact1, contact2) => {
      if (contact1.name > contact2.name) {
        return 1;
    }
    if (contact1.name < contact2.name) {
        return -1;
    }
    return 0;
    })
    this.setState({
      contactsFive : clonedArray
    })
  }

  sortByPop() {
    const clonedArray = [...this.state.contactFive];
    clonedArray.sort((num1, num2) => {
      if (num1.popularity > num2.popularity) {
        return 1;
    }
    if (num1.popularity < num2.popularity) {
        return -1;
    }
    return 0;
    })
    this.setState({
      contactsFive : clonedArray
    })
    
  }

  deleteOne(index) {
    const clonedArray = [...this.state.contactsFive];
    clonedArray.splice(index, 1)
    this.setState({
      contactsFive : clonedArray
    })
  }

  render() {
    const actorList = this.state.contactsFive.map((contacts, index) => {
        return (   
            <tr key={index}>
              <td><img src={contacts.pictureUrl} width="100px" height="100px" alt={contacts.name} /></td>
              <td>{contacts.name}</td>
              <td>{contacts.popularity}</td>
              <td><button onClick={() => this.deleteOne(index)}>Delete</button></td>
            </tr>
      );
    })
  return (
    <div className="App">
        <h1>Iron Contacts</h1>
        <button onClick={() => this.getRandomActor()}>Add Random Contact</button>
        <button onClick={() => this.sortByname()}>Sort By Name</button>
        <button onClick={() => this.sortByPop()}>Sort by Popularity</button>
         <table>  
            <thead>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
            </tr>
            </thead>
            <tbody>
              { actorList }
            </tbody> 
         </table> 
    </div>
    )
  }
}

export default App;
