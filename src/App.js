// import logo from './logo.svg';
import React from "react";
import './App.css';
import contacts from "./contacts.json";

//class DynamicList

class App extends React.Component {
  state = {
    contacts: contacts.slice(0, 5)
  }


  displayContacts = () => {

    return (
      this.state.contacts.map((elm) => (
        <div class='List'>
          <p>{elm.name}</p>
          <img src={elm.pictureUrl} alt='xd' />
          <p>{elm.popularity}</p>
          <button onClick={() => this.deleteContact(elm.id)}>Delete</button>
        </div>

      ))
    )
  }

  addRandomContact = () => {
    console.log(this.state.contacts)
    // los ... sacan una copia
    const contactsCopy = [...this.state.contacts];
    const randomIndex = Math.floor(Math.random() * contacts.length)

    contactsCopy.push(contacts[randomIndex])
    contacts.splice(randomIndex, 1)

    this.setState({
      ...this.state,
      contacts: contactsCopy
    })

  }

  sortByName = () => {
    const contactsCopy = [...this.state.contacts];

    this.setState({
      ...this.state,
      contacts: contactsCopy.sort((contact1, contact2) => contact1.name.localeCompare(contact2.name))
    })

  }

  sortByPopularity = () => {
    const contactsCopy = [...this.state.contacts];

    this.setState({
      ...this.state,
      contacts: contactsCopy.sort((a, b) => b.popularity - a.popularity)
    })

  }

  deleteContact = (id) => {
    console.log(id)
    this.setState({
      ...this.state,
      contacts: this.state.contacts.filter(contact => contact.id !== id)
    })
  }

  render() {

    return (

      <><h1> Iron-Contacts </h1>
        <center>

          <button onClick={() => this.addRandomContact()}>add random character</button>

          <button onClick={() => this.sortByName()}>Sort by name</button>

          <button onClick={() => this.sortByPopularity()}>Sort by popularity</button>
          <h2> Picture  </h2>

          <h2> Name </h2>

          <h2> Popularity </h2>

          <h2> Action </h2>

        </center>

        <table class='table'>
          <tr>

          </tr>

          {
            this.displayContacts()

          }
        </table></>
    )
  }
}
export default App;
