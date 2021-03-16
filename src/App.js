import './App.css';
import contacts from "./contacts.json";
import React, { Component } from "react";

class Contacts extends Component {

  state = {
    contacts: contacts.slice(0,5),
    allContacts:contacts,
  };

 getRandom = () => {
  const min = 0;
  const max = this.state.allContacts.length;
  let i = Math.floor(Math.random() * (max - min) + min);
  const copyContacts = [...this.state.contacts];
    copyContacts.unshift(this.state.allContacts[i]);
  console.log(this.state.allContacts[i]);
  this.setState({ contacts: copyContacts })
  }

  sortContactsByName = () =>{
    const copyContacts = [...this.state.contacts];
   const sortedContacts = copyContacts.sort((a,b) => {
      console.log(b.name);
      return a.name.localeCompare(b.name);
    })
    console.log(sortedContacts);
     this.setState({ contacts: sortedContacts })
  }
  sortContactsByPopurality =()=>{
    const copyContacts = [...this.state.contacts];
   const sortedPopularity = copyContacts.sort((a,b) => {
      console.log(b.name);
      return a.popularity - b.popularity;
    })
    console.log(sortedPopularity);
     this.setState({ contacts: sortedPopularity })
  }

  deleteContacts =(RemoveIndex)=>{
    const copyContacts = [...this.state.contacts];
    copyContacts.splice(RemoveIndex, 1);

    this.setState({ contacts: copyContacts });
  
  }


render() {
  return (

<div className="Contacts-container">
  <button onClick={this.getRandom}>Random</button>
  <button onClick={this.sortContactsByName}>Sort by Name</button>
  <button onClick={this.sortContactsByPopurality}>Sort by popularity</button>
  <button onClick={this.deleteContacts}>Delete</button>
          {this.state.contacts.map((contact) => (
            <div  className="contact-card">
              <div className="contact-card__avatar-container">
                <img alt=""
                  className="contact-card__avatar"
                  src={contact.pictureUrl} />
              </div>
              <div className="contact-card__info">
                <h5 className="contact-card__name">{contact.name}</h5>
                {contact.popularity}
              </div>
            </div>
           
          ))}
        </div>
  );
}

}



function App() {
  return (
    <div className="App">
      <h1>Contact</h1>
      <Contacts />
      
    </div>
  );
}

export default App;
