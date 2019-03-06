import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
//let allOtherContacts = contacts.splice(0,5);

class App extends Component 
{
  state = {
    contacts: contacts.splice(0,5), //First 5 
    allOtherContacts: contacts //Rest of
  }

  // dog = "fido"

  makeALoop = () => 
  {
    let list = this.state.contacts.map((oneContact, index) => {
      return(
        <div key={index} className="contact-info">
          <li className="contact-name">{oneContact.name}</li>
          <img className="contact-image" src={oneContact.pictureUrl}></img>
          <li className="contact-popularity">{(Math.round(oneContact.popularity * 100)/100)}</li>
          <button onClick={()=>this.deleteButton(index)} className="delete-contact">Delete</button>
        </div>
      )
    })
    return list;
  }

  // fidoButton = () => // Add Fido 
  // {
  //   let celebFido = {
  //       name: "fido",
  //       pictureUrl: "https://r.hswstatic.com/w_907/gif/smilingdog-1.jpg",
  //       popularity: 100,
  //   }
  //   console.log(celebFido)

  //   let copyContacts = [...this.state.contacts]     // declares new copy from contacts inside of the state
  //     copyContacts.push(celebFido)                  // pushes celeb info (which is Fido) into the new copy of contacts
  //     this.setState({                               // updates old contacts with the copied contacts that now has Fido
  //       contacts: copyContacts
  //     })
  // }

  randomButton = () => // Add Random Contact
  {
    let items = this.state.allOtherContacts;
    var item = items[Math.floor(Math.random()*items.length)];

    let itemContacts = [...this.state.contacts];
   
    itemContacts.push(item)
    this.setState({
      contacts: itemContacts
    })

    console.log(item)
    return item;
  }

  deleteButton = (index) => // Delete a Contact 
  {
    let copyContacts = [...this.state.contacts];

    copyContacts.splice(index, 1)
    this.setState({
      contacts: copyContacts
    })
  }

  nameSortButton = () => // Sort Contacts by name
  {
    let copyContacts = [...this.state.contacts];
      copyContacts.sort(function(a, b)
      {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      })
    this.setState({
      contacts: copyContacts
    })
    return contacts;
  }

  popularitySortButton = () => //Sort Contacts by popularity
  {
    let copyContacts = [...this.state.contacts];
      copyContacts.sort(function(a, b)
      {
        if(a.popularity < b.popularity) { return 1; }
        if(a.popularity > b.popularity) { return -1; }
        return 0;
      })
    this.setState({
      contacts: copyContacts
    })
    return contacts;
  }

  
  render() 
  {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        {/* <h1>{this.dog}</h1> */}
          <button onClick={this.randomButton} className="random-button">Add Random Contact</button>
          <button onClick={this.nameSortButton} className="name-sort-button">Sort by name</button>
          <button onClick={this.popularitySortButton} className="popularity-sort-button">Sort by popularity</button>
            <h2>Picture</h2>
            <h2>Name</h2>
            <h2>Popularity</h2>
          {this.makeALoop()}
      </div>
    );
  }
}

export default App;
