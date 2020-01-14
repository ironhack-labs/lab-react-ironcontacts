import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import contacts from './contacts.json';
import Contact from './components/Contact.js';

class App extends Component {
  constructor(props){
    super(props);
    // put the first 5 contacts in the state
    this._addRandomContact=this._addRandomContact.bind(this);
    this._sortContactsByName=this._sortContactsByName.bind(this);
    this._sortContactsByPopularity=this._sortContactsByPopularity.bind(this);
    this._deleteContact=this._deleteContact.bind(this);
    // Iteration #1
    this.state={
      contacts:contacts.slice(0,5)
    };
  }
  // Iteration #2
  _addRandomContact(){
    let contactIndex=-1,count=contacts.length;
    while(--count>=0){
      contactIndex=Math.floor(Math.random()*contacts.length);
      console.log("Checking contact #"+(contactIndex+1));
      if(this.state.contacts.every((contact)=>(contacts[contactIndex].id!==contact.id)))break;
    }
    console.log("Checked "+(contacts.length-count)+" contacts.");
    if(contactIndex>=0){
      // can't touch this.state.contacts apparently
      const newcontacts = [contacts[contactIndex],...this.state.contacts];
      // this.setState(state => {
      //   const newcontacts = state.contacts.push(contacts[contactIndex]);
      //   return {
      //     contacts:newcontacts
      //   };
      // });
      this.setState({
        contacts:newcontacts
      });
    }else
      alert("Awfully hard to find a new contact, bro'...");
  }
  // Iteration #3
  _sortContactsByName(){
    // sorting by last name
    const sortedcontacts=this.state.contacts.slice(0).sort((a,b)=>{return a.name.split(' ').pop().localeCompare(b.name.split(' ').pop());});
    this.setState({
      contacts:sortedcontacts
    });
  }
  _sortContactsByPopularity(){
    // sorting by popularity (reversed!!!)
    const sortedcontacts=this.state.contacts.slice(0).sort((a,b)=>b.popularity-a.popularity);
    this.setState({
      contacts:sortedcontacts
    });
  }
  // Iteration #4
  _deleteContact(index){
    console.log("Deleting contact "+index+".");
    const newcontacts=this.state.contacts.slice(0);
    newcontacts.splice(index,1);
    this.setState({
      contacts:newcontacts
    });
  }
  render(){
    return(
      <div className="App">
        <div className='App-buttons'>
          <button onClick={this._addRandomContact}>Add random contact</button>
          <button onClick={this._sortContactsByName}>Sort contacts by name</button>
          <button onClick={this._sortContactsByPopularity}>Sort contacts by popularity</button>
        </div>
        <table className="App-table">
          <thead>
            <th>Options</th><th>Name</th><th>Popularity</th><th>Picture</th>
          </thead>
          <tbody>
            {this.state.contacts.map((contact,index)=>
                <Contact key={contact.id} name={contact.name} popularity={contact.popularity} picture={contact.pictureUrl} deleteMethod={this._deleteContact} index={index}></Contact>
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
