import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contactsJSON from './contacts.json'
import IronContact from './components/contact/IronContact.js';




class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeContacts: [],
      inactiveContacts: [...contactsJSON]
    }
  }

  getFirstFive = () => {
    let firstFive = [];
    for (let index = 0; index < 5; index++) {
      firstFive.push(this.state.inactiveContacts.shift());
    }
    this.setState({ activeContacts: firstFive });
  }

  showContact = () => {
    console.log("the current state when showing contacts ------- ", this.state.activeContacts)
    return (
      this.state.activeContacts.map((eachContact, i) => {
        return (

          <IronContact
            key={i}
            theName={eachContact.name}
            thePictureUrl={eachContact.pictureUrl}
            thePopularity={eachContact.popularity}
            deleteContact = {()=>{this.deleteContact(i)}}
          />

        )
      })
    )

  }

  getRandom() {
    let copyActiveArray = [...this.state.activeContacts];
    let copyInactiveArray = [...this.state.inactiveContacts];
    console.log(copyActiveArray.length);

    let randomNumber = Math.floor(Math.random() * copyInactiveArray.length);
    let randomContact = copyInactiveArray.splice(randomNumber, 1);
    console.log(randomContact);
    copyActiveArray.unshift(randomContact[0]);

    this.setState({ activeContacts: copyActiveArray, inactiveContacts: copyInactiveArray });
  }

  sortByName(){
    let copyActiveArray = [...this.state.activeContacts];

    let sortedArray = copyActiveArray.sort((a, b) =>{
      if(a.name > b.name){
        return 1;
      }
      
      if( a.name < b.name){
        return -1;
      }
      return 0;
    });
    this.setState({ activeContacts: sortedArray});
    // console.table(sortedArray);
  }

  sortByPopularity(){
    let copyActiveArray = [...this.state.activeContacts];

    let sortedArray = copyActiveArray.sort((a, b) =>{
      if(a.popularity < b.popularity){
        return 1;
      }
      
      if( a.popularity > b.popularity){
        return -1;
      }
      return 0;
    });
    this.setState({ activeContacts: sortedArray});
    console.table(sortedArray);
  }


  deleteContact(index){
    let copyActiveArray = [...this.state.activeContacts];
    let copyInactiveArray = [...this.state.inactiveContacts];

    let deleteContact = copyActiveArray.splice(index, 1);
    console.log(deleteContact);
    copyInactiveArray.push(deleteContact[0]);
    console.log(copyActiveArray.length);
    console.log(copyInactiveArray.length);
    this.setState({ activeContacts: copyActiveArray, inactiveContacts: copyInactiveArray });
  }


  render() {
    if (this.state.activeContacts.length === 0) {
      this.getFirstFive();
    }
    return (
      <div className="App">
        <div className="top-buttons">
          <button className="btn isSuccess" onClick={() => { this.getRandom() }}>Add Random Contact</button>
          <button className="btn isSuccess" onClick={() => { this.sortByName() }}>Sort By Name</button>
          <button className="btn isSuccess" onClick={() => { this.sortByPopularity() }}>Sort By Popularity</button>
        </div>
        <div className="scroll">
           {this.showContact()}
        </div>
      </div>
    );
  }
}


export default App;
