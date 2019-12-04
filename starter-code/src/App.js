import React, { Component } from 'react';
import contacts from './contacts.json';
import TableContacts from './components/TableContacts';

class App extends Component {
  
  state = {
      person: contacts.slice(0, 5), 
  }

  addRandom() {
    const newList = [...this.state.person];
    const randomContact = contacts.slice(5,contacts.length)[Math.floor(Math.random() * contacts.length)];
    newList.push(randomContact);
    this.setState({
      person: newList,
    })
  }

  compare(a, b) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }

  sortName() {
    const newArr = [...this.state.person];
    newArr.sort(this.compare);
    this.setState({
      person: newArr,
    })
  }

  sortPopularity() {
    const newArr = [...this.state.person];
    newArr.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    this.setState({
      person: newArr,
    })
  }

  delete(contactIdx) {
    const newArr = [...this.state.person];
    newArr.splice(contactIdx, 1);
    this.setState({
      person: newArr,
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={() => this.addRandom()}>Add Random Contact</button>
        <button onClick={() => this.sortName()}>Sort by name</button>
        <button onClick={() => this.sortPopularity()}>Sort by popularity</button>
        <table className="tab">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            { this.state.person.map((contact,index) => 
            <TableContacts key={index} delete={() => 
              this.delete(index)} {...contact} />) 
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;