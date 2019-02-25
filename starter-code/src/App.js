import React, { Component } from 'react';
import Header from './components/Header'
import ContactList from './components/ContactList'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <ContactList/>
        </div>

      </div>
    );
  }
}

export default App;
