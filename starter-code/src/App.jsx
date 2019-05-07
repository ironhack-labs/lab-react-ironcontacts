import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Table from './Table';
import Button from './Button';


class App extends Component {
  constructor(){
    super();
    this.state = {
      contactList: contacts.slice(0,5),
    }
    this.randomContact = this.randomContact.bind(this);
  }
  randomContact() {
    const random = contacts[Math.floor(Math.random() * contacts.length)];
    const list = this.state.contactList.slice();
    if (!list.includes(random)) {
      list.push(random)
      this.setState({
        contactList: list
      });
    } else {
      this.randomContact();
    };
    console.log(this.state.contactList);
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <Button onClick= {this.randomContact} name="Add random contact"/>
        <Table contactList={this.state.contactList}></Table>        
      </div>
    );
  }
}


export default App;
