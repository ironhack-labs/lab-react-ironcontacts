import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Contact from './components/Contacts';
import THeader from './components/THeader';

const firstContacts = contacts.splice(0, 5);

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayContacts : firstContacts
    };
  }

  addRandomContact() {
    let index = Math.floor(Math.random() * contacts.length);
    this.state.displayContacts.push(contacts.splice(index, 1)[0]);
    this.setState({displayContacts : this.state.displayContacts});
  }


  sortContactsName(){
    let newOrder = [...this.state.displayContacts];
    newOrder = newOrder.sort((a, b) => {
      if (a.name !== b.name) return (a.name > b.name) ? 1 : -1;
      else return 0;
    }); //Ordenas
    this.setState({displayContacts : newOrder});
  }

  sortContactsPop(){
    let newOrder = [...this.state.displayContacts];
    newOrder = newOrder.sort((a, b) => b.popularity - a.popularity); //Ordenas
    this.setState({displayContacts : newOrder});
  }


//fn de diego


  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact.bind(this)}>Add Random Contact</button>
        <button onClick={this.sortContactsName.bind(this)}>Sort by name</button>
        <button onClick={this.sortContactsPop.bind(this)}>Sort by poop</button>

        <table>
          <tbody>
          <THeader />
            {this.state.displayContacts.map((el, i) => (
              <Contact key={i} name={el.name} pictureUrl={el.pictureUrl} popularity={el.popularity} />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
