import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Actor from './components/Actor';
import GetRandom from './components/GetRandom';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      contacts: this.getContacts(),
      otherContacts: this.getRemainingContacts()
    };
  }

  getContacts(){
    let fiveContacts = []
    for(let i = 0; i < 5; i++){
      fiveContacts.push(contacts[i]);
    }
    return fiveContacts;
  }

  getRemainingContacts(){
    let restOfContacts = [];
    for(let i = 5; i < contacts.length; i++){
      restOfContacts.push(contacts[i]);
    }
    return restOfContacts;
  }

  createContacts(){
    let copyOfContacts = [...this.state.contacts];

    return copyOfContacts.map((actor, i)=> {
      return (
        <Actor 
          key={i} 
          img={actor.pictureUrl}
          name={actor.name}
          popularity={actor.popularity.toFixed(2)}
          delete={(e)=>{this.deleteActor(i)}}
        />
      )
    });
  }

  deleteActor(index){
    let contacts = [...this.state.contacts];
    let otherContacts = [...this.state.otherContacts];

    otherContacts.push(contacts[index]);
    contacts.splice(index,1);

    console.log(contacts, otherContacts);

    return this.setState(
      {
        contacts: contacts,
        otherContacts: otherContacts
      }
    );
  }

  getRandomContact(){

    let contacts = [...this.state.contacts];
    let otherContacts = [...this.state.otherContacts];

    let index = Math.floor(Math.random()*otherContacts.length);
    
    let randomActor = otherContacts[index];

    contacts.push(randomActor);
    otherContacts.splice(index,1);

    return this.setState({
      contacts: contacts,
      otherContacts: otherContacts
    });

  }

  sortByName(){
    let contacts = [...this.state.contacts];
    let sorted = contacts.sort((a,b)=>{
      if(a.name < b.name){
        return -1
      } else if (b.name < a.name){
        return 1;
      } else {
        return 0;
      }
    });

    return this.setState({contacts: sorted});
  }

  sortByPopularity(){
    let contacts = [...this.state.contacts];
    let sorted = contacts.sort((a,b)=>{
      if(a.popularity < b.popularity){
        return -1
      } else if (b.popularity < a.popularity){
        return 1;
      } else {
        return 0;
      }
    });

    return this.setState({contacts: sorted});
  }

  render() {
    return (
      <div>
        <GetRandom click={(e)=>{this.getRandomContact(), e}}>Get Random Actor</GetRandom>
        <GetRandom click={(e)=>{this.sortByName(), e}}>Sort by Name</GetRandom>
        <GetRandom click={(e)=>{this.sortByPopularity(), e}}>Sort by popularity</GetRandom>
         {this.createContacts()}
      </div>
    )
  }
}

export default App;
