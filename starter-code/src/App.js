import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contactsJSON from './contacts.json'
import ContactCard from './components/ContactCard'


class App extends Component {
  constructor(contactsJSON) {
    super();
    
    this.state = {
      contacts: [
        {
          "name": "Idris Elba",
          "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
          "popularity": 11.622713
        },
        {
          "name": "Jessica Chastain",
          "pictureUrl": "https://image.tmdb.org/t/p/w500/nkFrkn5NZVGWb4b2X0yIcXezhyt.jpg",
          "popularity": 8.324357
        },
        {
          "name": "Johnny Depp",
          "pictureUrl": "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
          "popularity": 15.656534
        },
        {
          "name": "Emilia Clarke",
          "pictureUrl": "https://image.tmdb.org/t/p/w500/j7d083zIMhwnKro3tQqDz2Fq1UD.jpg",
          "popularity": 16.211837
        },
        {
          "name": "Leonardo DiCaprio",
          "pictureUrl": "https://image.tmdb.org/t/p/w500/A85WIRIKVsD2DeUSc8wQ4fOKc4e.jpg",
          "popularity": 11.245333
        }
      ]
    }
  } 

  contactsList = contactsJSON;

  addRandomContact = () => {
    const randomIndex = Math.floor((Math.random() * this.contactsList.length) + 1);
    const newContact = this.contactsList[randomIndex];
    const updatedArray = this.state.contacts;
    updatedArray.push(newContact);

    
    this.setState({ 
      contacts:  [...updatedArray]
    })
  }

  sortByName = () => {

    const sortedContacts = this.state.contacts
    sortedContacts.sort((a,b) =>{
      if(a.name < b.name){
        return -1;
      }
  
      if(a.name > b.name){
        return 1;
      }
      return 0;
    })
    

    this.setState({
      contacts: sortedContacts
    })
  }

  sortByPopularity = () => {
    const sortedContacts = this.state.contacts
    sortedContacts.sort((a,b) =>{
      return a.popularity - b.popularity
    })
    

    this.setState({
      contacts: sortedContacts
    })
  }

  deleteContact = (contactIndex) => {
    const contactsCopy = [...this.state.contacts]
    contactsCopy.splice(contactIndex, 1);
    this.setState({
      contacts: contactsCopy
    })
  }

  render() {     
    return (
      <div className="App">
        <button onClick={()=> this.addRandomContact()} >Add Random Contact</button>
        <button onClick={()=> this.sortByName()} >Sort by name</button>
        <button onClick={()=> this.sortByPopularity()} >Sort by popularity</button>
        <div className="contact contact-title">          
          <span>Picture</span>
          <span>Name</span>
          <span>Popularity</span>
          <span>Action</span>
        </div>
        
        {this.state.contacts.map((contact, index) => {
          return <ContactCard key={index} {...contact} clickToDelete={()=>this.deleteContact(index)}/>
        })        
        }
        
      </div>
    );
  }
}

export default App;
