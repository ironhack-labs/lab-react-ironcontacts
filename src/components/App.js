import './App.css'
import { Component } from 'react'

import Row from './Row'

import contactJson from "./../contacts.json"
const contactArray = contactJson.slice(0, 5)


class App extends Component {


  constructor() {
    super()
    this.state = {
      contactList: contactArray,
    }
  }

  addRandom() {
    const randomIdx = Math.floor(Math.random() * (contactJson.length - 6) + 5) // avoiding to add one of the first 5 contacts
    const randomContact = contactJson[randomIdx]
    this.state.contactList.push(randomContact) 
    this.setState({contactList: this.state.contactList})
  }

  sortName() {
    const contactArrayCopy = JSON.parse(JSON.stringify(this.state.contactList))
    contactArrayCopy.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    this.setState({contactList: contactArrayCopy})
  }

  sortPopularity() {
    const contactArrayCopy = JSON.parse(JSON.stringify(this.state.contactList))
    contactArrayCopy.sort((a,b) => (a.popularity < b.popularity) ? 1 : ((b.popularity < a.popularity) ? -1 : 0))
    this.setState({contactList: contactArrayCopy})
  }

  deleteContact(id) {
        this.setState({
            contactList: this.state.contactList.filter(elm => elm.id !== id)
        })
    }

  render() {

    return (

      <section>

        <h1>Contact list</h1>

        <button className="btn top-btn" onClick={() => this.addRandom()}>Add a random contact</button><button className="btn top-btn" onClick={() => this.sortName()}>Sort by name</button><button className="btn top-btn" onClick={() => this.sortPopularity()}>Sort by popularity</button>
        
        <table className="contact-table">
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
        {
            this.state.contactList.map((elm) => 

                <Row key={elm.id} deleteContact={() => this.deleteContact(elm.id)} pictureUrl={elm.pictureUrl} name={elm.name} popularity={elm.popularity}/>
                )
        }
            </tbody>
        </table>

      </section>

    )
  }
}

export default App