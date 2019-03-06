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
          <li className="contact-popularity">{oneContact.popularity}</li>
        </div>
      )
    })
    return list;
  }

  fidoButton = () => // Add Fido 
  {
    let celebFido = {
        name: "fido",
        pictureUrl: "https://r.hswstatic.com/w_907/gif/smilingdog-1.jpg",
        popularity: 100,
    }
    console.log(celebFido)

    let contactsCopy = [...this.state.contacts]     // declares new copy from contacts inside of the state
      contactsCopy.push(celebFido)                  // pushes celeb info (which is Fido) into the new copy of contacts
      this.setState({                               // updates old contacts with the copied contacts that now has Fido
        contacts: contactsCopy
      })
  }

  randomButton = () => 
  {
    let items = this.state.allOtherContacts;
    var item = items[Math.floor(Math.random()*items.length)];

    let itemContacts = [...this.state.contacts]
   
    itemContacts.push(item)
    this.setState({
      contacts: itemContacts
    })


    // let randomContact = this.state.allOtherContacts.map((oneRandomContact, index = 0) => {

    //   index = Math.floor(Math.random() * 193);

    // //   return (
    // //     <div key={index} className="random-contact-info">
    // //       <li className="random-contact-name">{oneRandomContact.name}</li>
    // //       <img className="random-contact-image" src={oneRandomContact.pictureUrl}></img>
    // //       <li className="random-contact-popularity">{oneRandomContact.popularity}</li>
    // //     </div>
    // //   )
    // // })
    console.log(item)
    return item;
  }
  
  render() 
  {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        {/* <h1>{this.dog}</h1> */}
          <button onClick={this.randomButton} className="random-button">Add Random Contact</button>
            <h2>Picture</h2>
            <h2>Name</h2>
            <h2>Popularity</h2>
          {this.makeALoop()}
      </div>
    );
  }
}

export default App;
