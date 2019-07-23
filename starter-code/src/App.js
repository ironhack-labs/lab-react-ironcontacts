import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import Button from './Components/button/button'
import Card from './Components/cards/card'
class App extends Component {
  constructor(){
    super()
    this.contactsArr = []
    this.state = {
    firstSetOfContacts: [],
    }
    this.allContacts = contacts
    this.fillUpArray();
  }
  fillUpArray = ()=>{
    for(let i = 0; i < 5; i++){
      this.state.firstSetOfContacts.push(this.allContacts[i])
      this.allContacts.splice(i,1);
    }
  }
  displayFirstArray = ()=>{
    return(
      this.state.firstSetOfContacts.map((e,i)=>{
        return(
          <div class="card">
           <Card i={i} pictureUrl={e.pictureUrl} name={e.name} popularity={e.popularity} onclick={this.deleteMe} text="delete"/>
          </div>
        )
      })
    )
  }
  addCeleb = ()=>{
    let length = contacts.length;
    let randomCeleb = Math.floor(Math.random() * length);
    let clone = [...this.state.firstSetOfContacts];
    clone.push(this.allContacts[randomCeleb]);
    this.allContacts.splice(randomCeleb,1);
    this.setState({
      firstSetOfContacts: clone
    })
  }
  sortName = ()=>{
  let clone = [...this.state.firstSetOfContacts];
  clone.sort((a,b)=>{
    if(a.name > b.name){
      return 1;
    }
    if(a.name < b.name){
      return -1;
    }
    return 0;
  })
  this.setState({
    firstSetOfContacts: clone
  })
  }
  sortPop = ()=>{
    let clone = [...this.state.firstSetOfContacts];
    clone.sort((a,b)=>{
      if(a.popularity > b.popularity){
        return -1;
      }
      if(a.popularity < b.popularity){
        return 1;
      }
      return 0;
    })
    this.setState({
      firstSetOfContacts: clone
    })
    }
    deleteMe = (ev)=>{
      let clone = [...this.state.firstSetOfContacts];
      let index = ev.target.id;
      clone.splice(index,1);
      this.setState({
        firstSetOfContacts: clone
      })
      // clone.forEach((e,i)=>{
      //   if
      // })
    }
    deleteRandom = ()=>{
      let clone = [...this.state.firstSetOfContacts];
      let length = clone.length;
      let randomIndex = Math.floor(Math.random() * length);
      clone.splice(randomIndex,1);
      this.setState({
        firstSetOfContacts: clone
      })
      // clone.forEach((e,i)=>{
      //   if
      // })
    }
  render() {
    return (
      <div className="App">
        <h1 class="title">IronContacts</h1>
        <div class="theButtons">
        <Button onclick={this.addCeleb} text="Add random contact"/>
        <Button onclick={this.sortName} text="Sort by Name"/>
        <Button onclick={this.sortPop} text="Sort by Popularity"/>
        <Button onclick={this.deleteRandom} text="Delete Random"/>
        </div>
        <div className="table-center">
        
      <div class="cards">
        {this.displayFirstArray()}
        
        </div>
      </div>
      </div>
    );
  }
}

export default App;
