import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import Row from "./rowcontact.js"




class App extends Component {
   constructor () {
     super();

    let contactsToShow = [];
    for(let i = 0; i < 5; i++){
      contactsToShow.push( {...contacts[i]})
    }
    this.state = {contactsToShow}

  }

  addRandomContact =()=> {
   let indexRandom = Math.floor(Math.random()*Object.keys(contacts).length + 4)
   const contactsArr = this.state.contactsToShow
   contactsArr.push({...contacts[indexRandom]})
   console.log(contactsArr)
     this.setState(
       {contactsToShow: contactsArr }
     )
   }

   sortByName = () => {
     let sortedByName = this.state.contactsToShow.sort((a, b) => { 
       console.log(a)
       if (a.name > b.name) {
        return 1;
      }
      return 0
     })
      this.setState({contactsToShow: sortedByName})
   }
   sortByPopularity = () => {
    let sortedByPopularity = this.state.contactsToShow.sort((a, b) => b.popularity - a.popularity)
     this.setState({contactsToShow: sortedByPopularity})
  }


  render() {
    return (
      <div className="App">
      <h1>IronContacts</h1>
      <button onClick={this.addRandomContact}>Add Random Contact</button>
      <button onClick={this.sortByName}>Sort by name</button>
      <button onClick={this.sortByPopularity}>Sort by popularity</button>
    
      <table>
        <thead>
          <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>

          </tr>
        </thead>
        <tbody>
          {this.state.contactsToShow.map((e)=><Row key={e.name} {...e}></Row>)}
        </tbody>
      </table>
      </div>
    );
  }
}





export default App;
