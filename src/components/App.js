import logo from '../logo.svg';
import './App.css';
import contacts from "../contacts.json";
import { Component } from 'react'
import Table from './Table'


class App extends Component {

  constructor() {
        super()
        this.state = {
            contacts: contacts.slice(0, 5)  
        }
    }

  randomNumber (max, min) {
    return Math.round(Math.random() * (max - min) + min)
  }
  
  addContact() {
    const addedContact = [...this.state.contacts]
    addedContact.push(contacts[this.randomNumber(contacts.length , 0)])
   
    this.setState({
      contacts: addedContact
    })
  }

  sortByName (){
    let newOrder = [...this.state.contacts]
    newOrder.sort((a,b) => a.name < b.name ? -1 : (a.name > b.name ? 1 : 0))

    this.setState({
      contacts: newOrder
    })
  }

  sortByPopularity (){
    let newPopularity = [...this.state.contacts]
    newPopularity.sort((a,b) => a.popularity <= b.popularity ? +1 : (a.popularity >= b.popularity ? -1 : 0))

    this.setState({
      contacts: newPopularity
    })
  }

  deleteContact(contactId) {
    this.setState({
      contacts: this.state.contacts.filter(elm => elm._id !== contactId)
    })
}

render () {
  const firstContacts = this.state.contacts

  return (
    <main className="main">
      <h1> Iron Contacts </h1>

      <button onClick={() => this.addContact()}> Add a new contact</button>
      <button onClick={() => this.sortByName()}> Sort contacts by name</button>
      <button onClick={() => this.sortByPopularity()}> Sort contacts by popularity</button>

      <table className="table">
        <thead>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          {firstContacts.map((elm) => <Table key={elm._id} deleteOneContact={() => this.deleteContact(elm._id)} pictureUrl={elm.pictureUrl} name={elm.name} popularity={elm.popularity} />)}
        </tbody>
      </table>

    </main>
  )

}
}

export default App;
