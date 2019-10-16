import React, { Component, Fragment } from 'react';
import './App.css';
import contacts from './contacts.json'
import Header from './Header.js'
import Table from './Table.js'

class App extends Component {
  constructor(props){
    super(props);    
    this.state = {
      contactsAll: contacts.slice(5,contacts.length),
      contactsList: contacts.slice(0,5),
  }
  }
  
  addOne() {
    this.setState((state) => {
      let idx = Math.floor(Math.random() * (state.contactsAll.length));
      return {
        tableList: this.state.contactsList.push(this.state.contactsAll[idx]),
        tableList: this.state.contactsAll.splice(idx, 1)        
    }})
  };

  sortName() {
    this.setState({contactList: this.state.contactsList.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))}) 
  }

  sortPopularity() {
    this.setState({contactList: this.state.contactsList.sort((a,b) => (a.popularity - b.popularity))}); 
  }

  deleteContact(idx) {
    this.setState({contactList: this.state.contactsList.splice(idx, 1)})
  }

  listComplete() {
    return this.state.contactsList.map((contact, idx) => {
      return (
        <tr key={idx}>
          <td><img src={contact.pictureUrl} className="imgCelebs"></img></td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
          <td><button onClick ={() => this.deleteContact(idx)}>Delete</button></td>
        </tr>
      )
    })
  }


  render() {
    return (
      <Fragment>
        <Header/>
        <Table addOne={() => this.addOne()} sortName={() => this.sortName()} sortPopularity={() => this.sortPopularity()}>
          {this.listComplete()}
        </Table>
      </Fragment>
    );
  }
}

export default App;
