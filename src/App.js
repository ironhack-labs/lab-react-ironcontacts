import React, { Component } from 'react';
import contacts from './contacts.json';
import "./App.css"

class App extends Component {
  state = {
    cons: contacts.slice(0,5)
  };
  
  //need to use fat arrow to bind (article in slack)
  randomContact = () => {
    let index = Math.floor(Math.random()*contacts.length)
    let rand = contacts[index]
    let newArr = [...this.state.cons]
    if (!newArr.includes(rand))
    newArr.push(rand)
    this.setState({
      cons: newArr                                                    
    })
  }
  
  //needs to be called anonymously so it doesnt invoke right away (line 38)
  deleteRow(item) {
    let i = this.state.cons.indexOf(item)
    let newArr = [...this.state.cons]
    newArr.splice(i,1)
    this.setState({
      cons: newArr
    })
  }

  displayContact() {
    return this.state.cons.map(item => {
      return (
        <tr className="row" key={item.id}>
          <td><img className="pic" src={item.pictureUrl} alt="actor-pic"></img></td>
          <td>{item.name}</td>
          <td>{item.popularity}</td>
          <td><button onClick={() => this.deleteRow(item)}>Delete</button></td>
        </tr>
      )
    })
  }

  sortName = () => {
    let newArr = [...this.state.cons].sort((a,b) => {
      if (a.name < b.name)
        return -1;
      if (a.name > b.name)
        return 1;
      return 0;
    })
    this.setState({
      cons: newArr
    })
  }

  sortPop = () => {
    let newArr = [...this.state.cons].sort((a,b) => {
      if (a.popularity < b.popularity)
        return 1;
      if (a.popularity > b.popularity)
        return -1;
      return 0;
    })
    this.setState({
      cons: newArr
    })
  }


  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.randomContact}>Add Random Contact</button>
        <button onClick={this.sortName}>Sort by name</button>
        <button onClick={this.sortPop}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.displayContact()}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
