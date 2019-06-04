import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Card from './components/stateless/ContactCard'




let arrContacts= contacts.slice(0,5)

class App extends Component {

  constructor(){

    super()
    this.state= {fiveContacts : arrContacts}

    this.losCinco=this.state.fiveContacts.map((artist, idx)=> <Card key={idx} {...artist} />)
    

  }

  render() {
    return (
     <div>
       {this.losCinco}
     </div>
    )
  }
}

export default App;
