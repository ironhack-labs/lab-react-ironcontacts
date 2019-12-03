import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Row from './Row/Row';

class App extends Component {
  constructor(){
    super();
    this.contactsClone = [...contacts]
    this.indexContacts = this.contactsClone.splice(0,5)
    this.state = {
      someContacts: this.indexContacts,
      deleted: [],
      
     
    };
  }

  


    addRandom(){
      this.indexContacts.push(this.contactsClone[[Math.floor(Math.random()*this.contactsClone.length)]])
      this.contactsClone = this.contactsClone.filter(contact => !this.indexContacts.includes(contact));
      
      this.setState({
        ...this.state,
        someContacts: this.indexContacts,
      });
    }

 
    

    sortByName(){
      this.setState({
        ...this.state,
        someContacts: this.indexContacts.sort(function(a, b){
          if(a.name < b.name) { return -1; }
          if(a.name > b.name) { return 1; }
          return 0;
      }),
      });
    }



    sortByPopularity(){
      this.setState({
        ...this.state,
        someContacts: this.indexContacts.sort(function(a, b){
          if(a.popularity < b.popularity) { return 1; }
          if(a.popularity > b.popularity) { return -1; }
          return 0;
      }),
      });
    }

    deleteContact(contacts) {
      let newContacts = [...this.state.someContacts]
      newContacts.splice(contacts.key, 1)
  
      this.setState({
        ...this.state,
        someContacts: newContacts
      });
    }


  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <table>
        <thead>
        <tr>
        <td>
          <button onClick={() => this.addRandom()}>Add Random Contact</button></td>
          <td><button onClick={() => this.sortByName()}>Sort By Name</button></td>
          <td><button onClick={() => this.sortByPopularity()}>Sort By Popularity</button></td>
        </tr>
        <tr>
          <td><h3>Picture</h3></td>
          <td><h3>Name</h3></td>
          <td><h3>Popularity</h3></td>
          <td><h3>Action</h3></td>
        </tr>
        </thead>
        <tbody>
        {this.state.someContacts.map((contact,idx) => {
        return <Row key={idx} name={contact.name} pictureUrl={contact.pictureUrl} popularity={contact.popularity} delete={() => this.deleteContact(contacts)} >  </Row>})}
        </tbody>
        </table>
      </div>
    );
  }
}

export default App;
