import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contactsData from './contacts.json';

class App extends Component {

  state = {
    celebrities: contactsData.slice(0, 5)
  }

  randomNew = () => {
    let randomNum = Math.ceil(Math.random() * (contactsData.length - this.state.celebrities.length)) + this.state.celebrities.length
    console.log(randomNum)
    this.setState(state => ({
      celebrities: [contactsData[randomNum], ...this.state.celebrities]
    }))
  }

  sortedByName = () => {
    let sortedName = this.state.celebrities.sort(function(a, b) {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
    this.setState(() => ({
      celebrities: sortedName
    }))
  }

  sortedByPop = () => {
    let sortedPop = this.state.celebrities.sort(function(a, b) {
      if (a.popularity > b.popularity) return -1;
      if (a.popularity < b.popularity) return 1;
      return 0;
    })
    this.setState(() => ({
      celebrities: sortedPop
    }))
  }

  delete = (arr) => {
    const xList = [...this.state.celebrities]
    xList.splice(arr, 1)

    this.setState(state => ({
      celebrities: xList
    }))
  }

  render() {
    return (


      <>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <h1>IronContacts</h1>
    
      <button onClick={this.randomNew} className="Random-btn">Add a random one</button>

      
      <table>

        <thead>
          <tr>
            <th>Picture</th>
            <th><button onClick={this.sortedByName} className="Th-btn">Name</button></th>
            <th><button onClick={this.sortedByPop} className="Th-btn">Popularity</button></th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

        {
          this.state.celebrities.map((contact, index) => {
            return (
                <tr key={contact.id}>
                  <td> <img src={contact.pictureUrl} className="App-logo" alt="face"/></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td> <button onClick={() => this.delete(index)}>Delete</button> </td>                  
                </tr>
            )
          })
        }

        </tbody>

      </table>
      </header>
      </div>
      </>
    )
  }
}

export default App;
