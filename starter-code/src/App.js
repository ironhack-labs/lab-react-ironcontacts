import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';


class Contacts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <tr>
        <td><img src={this.props.picture} /></td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity}</td>
      </tr>
    )

  }
}



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { contacts, compteur:5 }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({compteur: this.state.compteur+1 })
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
        <button onClick={this.handleClick}></button>
        <table>
          <thead><td>Picture</td><td>Name</td><td>Popularity</td></thead>
          {
            this.state.contacts.slice(0, this.state.compteur).map(contact => {
              return (
                <Contacts name={contact.name} picture={contact.pictureUrl} popularity={contact.popularity} />
              )
            }
            )
          }

        </table>
      </div>
    );
  }
}

export default App;
