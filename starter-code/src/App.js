import React, { Component } from 'react'
import './App.css'
import Contact from './components/Contact.js'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>IronContacts</h1>

        <Contact />

      </div>
    )
  }
}

export default App
