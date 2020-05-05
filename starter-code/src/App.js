import React, { Component } from 'react';
import './App.css';
import Contacts from './components/contacts/ContactContainers'

class App extends Component {

    constructor() {
        super()
        this.state = {

        }
    }

  render() {
    return (
        <div className="App">
            <h1>IronContacts</h1>
       <Contacts />
      </div>
    );
  }
}

export default App;
