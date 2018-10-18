import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';


class Contacts extends Component {
  constructor(props) {
    super(props);
  }
  isEven(name) {
    if (name.length % 2) {
      return (<h1> {name.length} - Impair</h1>)
    } else {
      return (<h1>Pair</h1>)
    }
  }
  render() {
    return (

      <tr>
        <td><img src={this.props.picture} /></td>
        <td>{this.props.name} - {this.isEven(this.props.name)}</td>
        <td>{this.props.popularity}</td>
        <td><button onClick={this.props.clickDelete}>Delete</button></td>
      </tr>
    )

  }
}



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: contacts,
      searchContacts: contacts.slice(0, 5),
      compteur: 5,
      displayTitle: true
    }
    this.handleClick = this.handleClick.bind(this)
    this.sortByName = this.sortByName.bind(this)
    this.sortByPopularity = this.sortByPopularity.bind(this)
  }

  handleClick() {
    this.setState({ compteur: this.state.compteur + 1 })
  }

  sortByName() {
    const slicedContacts = this.state.contacts.slice(0, this.state.compteur)
    slicedContacts.sort(function (a, b) {
      if (a.name > b.name) {
        return 1
      } else if (a.name < b.name) {
        return -1
      } else {
        return 0
      }
    });
    this.setState({ contacts: slicedContacts })
  }

  sortByPopularity() {
    const slicedContacts = this.state.contacts.slice(0, this.state.compteur)

    slicedContacts.sort(function (a, b) {
      return -a.popularity + b.popularity;
    });

    this.setState({ contacts: slicedContacts })
  }

  randomPick() {
    this.state.contacts.push(contacts[Math.floor(Math.random() * contacts.length)])
  }

  deleteLine(name) {
    this.state.contacts = this.state.contacts.filter(celeb => {
      return celeb.name !== name;
    })
    this.setState({ contacts: this.state.contacts })
  }

  toggleTitle() {
    this.setState({ displayTitle: !this.state.displayTitle })
  }

  handleSearch(e) {
    const serachedvalue = e.target.value
    console.log("length", serachedvalue)

    this.state.searchContacts = this.state.contacts.filter(celeb => {
      return celeb.name.includes(e.target.value);
    })


    this.setState({ contacts: this.state.searchContacts })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.displayTitle ? <h1>Ironcontacts SHOW</h1> : ''}
        <button onClick={this.toggleTitle.bind(this)}>{this.state.displayTitle ? 'Hide' : 'Show'}</button>
        <button onClick={this.handleClick}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <div>
          <label>Search</label>
          <input name="search" onChange={(e) => { this.handleSearch(e) }} />
          {/* <input name="search" onChange={this.handleSearch(e).bind(this)}/> */}
        </div>
        <table>
          <thead><th>Picture</th><th>Name</th><th>Popularity</th></thead>
          <tbody>
            {
              this.state.contacts.slice(0, this.state.compteur).map(contact => {
                return (
                  <Contacts name={contact.name} clickDelete={this.deleteLine} picture={contact.pictureUrl} popularity={contact.popularity} />
                )
              }
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
