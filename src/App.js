import React, { Fragment, Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import ContactsTable from './components/ContactsTable'

export default class App extends Component {

  state = {
    contacts: contacts.slice(0, 5)
}

handleAdd = () => {
    const newArr = this.state.contacts.slice();
    newArr.push(contacts[Math.floor(Math.random()*contacts.length)]);
    this.setState({
    contacts: newArr
    })
}

handleName = () => {
  const newArr = this.state.contacts.slice();
  newArr.sort(function(a,b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} );
    this.setState({
    contacts: newArr
    })
}

handlePop = () => {
  const newArr = this.state.contacts.slice();
  newArr.sort(function(a,b) {return (b.popularity - a.popularity)})
  this.setState({
  contacts: newArr
})
}


render() {
  return (
    <Fragment>
      <button onClick={this.handleAdd} > Add Random Contact </button>  
      <button onClick={this.handleName} > Sort by Name </button>
      <button onClick={this.handlePop} > Sort by Popularity </button>

         <table>
          <thead>
          <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          </tr>
          </thead>
          <ContactsTable contacts={this.state.contacts}/>
         </table>
    </Fragment>
  );
}
}

