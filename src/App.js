import React from 'react';
import contacts from './contacts.json';
import './App.css';

class App extends React.Component {

  state = {
    contacts: contacts.splice(0, 5)
  }

  deleteContact = (_index) => {
    const copyOfContacts = [...this.state.contacts];
    copyOfContacts.splice(_index, 1);
    this.setState({contacts: copyOfContacts});
  }

  displayContacts = () => {
    return this.state.contacts.map((contact, index)=>{
      return (
        <tr key={index}>
          <td> <img src={contact.pictureUrl} alt={contact.name}/> </td>
          <td className="name"><span>{contact.name}</span></td>
          <td className="popularity"><span>{contact.popularity.toFixed(2)}</span></td>
          <td> <button onClick={
            ()=>{
              this.deleteContact(index)
            }
          }>Delete</button> </td>
        </tr>
      )
    })
  };

  addRandom = () => {
    const copyOfContacts = [...this.state.contacts];
    const randomContactIndex = Math.floor(Math.random()*contacts.length);
    copyOfContacts.push(contacts[randomContactIndex]);
    if(!this.state.contacts.includes(contacts[randomContactIndex])){   //Hemos añadido este filtro para que no añada varias veces al mismo actor/actriz
      this.setState({contacts: copyOfContacts});
    }
  };

  sortName = () => {
    const copyOfContacts = [...this.state.contacts];
    copyOfContacts.sort((a, b)=>{
      if(a.name>b.name) return 1
      if(b.name>a.name) return -1
      return 0
    });
    this.setState({contacts: copyOfContacts});
  };

  sortPopularity = () => {
    const copyOfContacts = [...this.state.contacts];
    copyOfContacts.sort((a, b)=>{
      return(b.popularity - a.popularity)
    });
    this.setState({contacts: copyOfContacts});
  };



  render(){
    return (
      <div className="App">
        <div className="btn-container">
          <button onClick={this.addRandom}>Add Random Contact</button>
          <button onClick={this.sortName}>Sort by Name</button>
          <button onClick={this.sortPopularity}>Sort by Popularity</button>
        </div>
        <table>
          <thead className="titles">
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th className="invisible">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.displayContacts()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
