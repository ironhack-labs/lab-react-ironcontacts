import React, { Component } from 'react';
import contacts from './contacts.json';
import './App.css';
import Actor from './Actor';

class App extends Component {
 state={
   contacts:[{
    "name": "Idris Elba",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
    "popularity": 11.622713,
    "id": "11731993-0604-4bee-80d5-67ad845d0a38"
  },
  {
    "name": "Jessica Chastain",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/nkFrkn5NZVGWb4b2X0yIcXezhyt.jpg",
    "popularity": 8.324357,
    "id": "17980511-75ca-48b0-bea8-462fec2ee43d"
  },
  {
    "name": "Johnny Depp",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
    "popularity": 15.656534,
    "id": "7dad00f7-3949-477d-a7e2-1467fd2cfc06"
  },
  {
    "name": "Emilia Clarke",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/j7d083zIMhwnKro3tQqDz2Fq1UD.jpg",
    "popularity": 16.211837,
    "id": "e14aa81d-b812-412d-bc4d-4a0d2c9c66f4"
  },
  {
    "name": "Leonardo DiCaprio",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/A85WIRIKVsD2DeUSc8wQ4fOKc4e.jpg",
    "popularity": 11.245333,
    "id": "b4d2c7b8-fdd5-426a-85bd-011c3f50a6c6"
  },]
 }


 addContact() {
  let newState = {
    ...this.state
  };
let newcontact=contacts[Math.round(Math.random()*contacts.length)]


  newState.contacts.push(newcontact);

  this.setState(newState);
}

sortName(){
  let newState = {
    ...this.state
  };

  newState.contacts.sort((a, b) => a.name.localeCompare(b.name));

  this.setState(newState);
}

sortPopularity(){

  let newState = {
    ...this.state
  };

  newState.contacts.sort(function(a, b) {
    return   b.popularity - a.popularity;
  });

  this.setState(newState);
}


deleteProduct(contactID) {
  
  let newState = {...this.state}

  let filteredContacts = newState.contacts.filter((contact) => contact.id !== contactID)

  newState.contacts = filteredContacts

  this.setState(newState)
}



  render() {
    return (
      <div className="App">
       <h1>IRONCONTACTS</h1>
       <div>
       <button onClick={() => this.addContact()}>Add contact</button>
       <button onClick={() => this.sortName()}>Sort name</button>
       <button onClick={() => this.sortPopularity()}>Sort popularity</button>
       </div>
        <tbody>
        <tr>
          <th>FOTO</th>
          <th>NOMBRE</th>
          <th>POPULARIDAD</th>
        </tr> 
     
        {this.state.contacts.map(contact => (
            <Actor clickToDelete={() => this.deleteProduct(contact.id)} key={contact.id} pictureUrl={contact.pictureUrl} popularity={contact.popularity} name={contact.name}></Actor>
        ))}
        
        </tbody>
      </div>
    );
  }
}

export default App;