import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contactList.json'

class Contact extends Component {
  state = {
    contacts: contacts,
    someContacts: contacts.slice(0,5),
  }
  
  addRandomCelebrity = ()=> {
    const randomCeleb = [...this.state.contacts] // copies main array of celebs
    const someOfTheContacts = [...this.state.someContacts] // copies the slice of arrays
    const randomNum = Math.floor(Math.random() * this.state.contacts.length) // randomizes the index to grab
    const newThing = randomCeleb[randomNum]; // grabs the index of a random Celeb
    const extraNewThing = randomCeleb[randomNum+1];
    
    for (let i = 0; i < someOfTheContacts.length; i++) {
      if (newThing === someOfTheContacts[i]) {
        someOfTheContacts.push(extraNewThing)
        }
    }
    someOfTheContacts.push(newThing); // adds the random celeb to the previous array


    this.setState({ //changes the state to add the new random person
      someContacts: someOfTheContacts,
    });
  }

  sortCelebsByName = ()=> {
    const listOfContacts = [...this.state.someContacts];
    listOfContacts.sort((firstCeleb, secondCeleb) => {
      if (firstCeleb.name > secondCeleb.name) {
        return 1;
      } else if (firstCeleb.name < secondCeleb.name) {
        return -1;
      }
      return 0;
    });

    this.setState({
      someContacts: listOfContacts
    });
  }

  sortCelebsByPop = ()=> {
    const listOfContacts = [...this.state.someContacts];
    listOfContacts.sort((firstCeleb, secondCeleb) => {
      if (firstCeleb.popularity > secondCeleb.popularity) {
        return -1;
      } else if (firstCeleb.popularity < secondCeleb.popularity) {
        return 1;
      }
      return 0;
    });

    this.setState({
      someContacts: listOfContacts
    });
  }

  deleteCeleb = (i)=> {
    const deleteContacts = this.state.someContacts
    deleteContacts.splice(i, 1)

    this.setState({
      deleteContacts: deleteContacts
    });
  }

  render() {
    const contactList = this.state.someContacts.map((ourCeleb, index) => {
      
    return (                     
      <div class="celebs" key={ourCeleb.index}>
        <h2>Name: {ourCeleb.name}</h2>
        <img src={ourCeleb.pictureUrl}></img>
        <h4>Popularity: {ourCeleb.popularity}</h4>
        <button onClick={()=> this.deleteCeleb()}>Delete This Celeb</button>                   
      </div>
    )
  })   

    return (
      <div className="">
      <button onClick={()=> this.addRandomCelebrity()}>Add Random Contact</button>
      <button onClick={()=> this.sortCelebsByName()}>Sort By Name</button>
      <button onClick={()=> this.sortCelebsByPop()}>Sort By Pop</button>
      {contactList}

      </div>
    );
  }
}

export default Contact;