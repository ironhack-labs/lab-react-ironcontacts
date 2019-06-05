import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import contacts from './contacts.json'
import IronContacts from './components/ironContacts'
import Buttons from './components/buttons'
import { HeadTable } from './components/table'


class App extends Component {

  constructor() {
    super()

    this.state = {
      ironContacts: contacts,
      contacts: contacts.slice(0, 5)
    }

  }

  nameOrderInverted = false
  namePopularityInverted = false


  sortContactsByName = () => {
    const contactsCopy = [...this.state.contacts]

    contactsCopy.sort((a, b) => !this.nameOrderInverted ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
    this.nameOrderInverted = !this.nameOrderInverted

    this.setState({
      contacts: contactsCopy
    })
  }

  sortContactsByPopularity = () => {
    const contactsCopy = [...this.state.contacts]

    contactsCopy.sort((a, b) => !this.namePopularityInverted ? b.popularity - a.popularity : a.popularity - b.popularity)
    this.namePopularityInverted = !this.namePopularityInverted

    this.setState({
      contacts: contactsCopy
    })
  }

  addRandom = () => {
    const contactsCopy = [...this.state.contacts]
    const ironContactsCopy = [...this.state.ironContacts]

    contactsCopy.forEach(contactShowed => {
      ironContactsCopy.splice(ironContactsCopy.indexOf(contactShowed), 1)
    })
    console.log(ironContactsCopy)

    let random = Math.floor(Math.random() * ironContactsCopy.length)

    contactsCopy.push(ironContactsCopy[random])

    this.setState({
      contacts: contactsCopy
    })
  }

  deleteContact = idx => {
    const contactsCopy = [...this.state.contacts]
    contactsCopy.splice(idx, 1)

    this.setState({
      contacts: contactsCopy
    })
  }




  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>


        <div className="container-buttons">
          <Buttons method={() => this.addRandom()} label={'Añade contacto random'} />
          <Buttons method={() => this.sortContactsByName()} label={'Ordena por nombre'} />
          <Buttons method={() => this.sortContactsByPopularity()} label={'Ordena por ranking'} />
        </div>

        <div>
          <HeadTable labelCol1='Name' labelCol2='Picture' labelCol3='popularity' labelCol4='Clear' />
          {
            this.state.contacts.map((contact, idx) => <IronContacts key={idx} {...contact} removeContact={() => this.deleteContact()} />)
          }
        </div>

      </div>
    )
  }
}

export default App;
