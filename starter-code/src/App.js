import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'

class App extends Component {

constructor(props) {
  super();
  this.state = {
    contacts: props.splice(0, 5)
  }
}

clickRandom = randomContact => {
  //random index
  const randomIndex = Math.floor(Math.random() * contacts.length);

 // Copy the contacts from the state
  const contactsCopy = [...this.state.contacts];
  
  //push the new contact to the array
  contactsCopy.push(contacts[randomIndex]);
  
  // Set back the updated state
  this.setState({ contacts: contactsCopy });
}

clickSortByName = sortNameContact => {
// Copy the contacts from the state
  const contactsCopy = [...this.state.contacts];
  
  //sort by name
  contactsCopy.sort((a, b) => {
    if(a.name > b.name){
      return 1;
    }
    if (a.name < b.name){
      return -1;
    }
    else{
      return 0;
    }
  });
  // Set back the updated state
  this.setState({ contacts: contactsCopy });
}

clickSortByPopularity = sortPopularityContact => {
// Copy the contacts from the state
  const contactsCopy = [...this.state.contacts];
  
  //sort by popularity
  contactsCopy.sort((a, b) => {
    return b.popularity - a.popularity;
  });
  // Set back the updated state
  this.setState({ contacts: contactsCopy });
}


clickDeleteContact = contactIndex => {
  // Copy the movies from the state
  const contactsCopy = [...this.state.contacts];

  // Edit the copy of the movies
  contactsCopy.splice(contactIndex, 1);

  // Set back the updated state
  this.setState({ contacts: contactsCopy });
};





  render() {
    return (
      <div className="App">
  <h1>IronContacts</h1>

<button className='btn' onClick={this.clickRandom}>Add Random Contact</button>
<button className='btn' onClick={this.clickSortByName}>Sort by Name</button>
<button className='btn' onClick={this.clickSortByPopularity}>Sort by Popularity</button>

  <table>
    <thead>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Action</th>
    </thead>

  {this.state.contacts.map((contact, contactIndex) => (
    <tr>
        <td><img className="tablePicture" src={contact.pictureUrl} /></td>
        <td className="tableName">{contact.name}</td>
        <td className="tablePopularity">{contact.popularity}</td>
        <button key={contactIndex} onClick={ ()=> this.clickDeleteContact(contactIndex)} className="btn-delete">
        DELETE
      </button>
    </tr>
))}
</table>
      </div>
    );
  }
}

export default App;
