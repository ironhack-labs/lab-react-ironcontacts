import React, { Component } from 'react';
import './App.css';
import contacts from './data/contacts.json';
import Contact from './components/Contact';
// import AddRandomBtn from './components/AddRandomBtn';


export default class App extends Component {

  constructor(props) {
    super(props);
    let contactSelection = [...contacts]
    this.state = {
      contactSelection:contactSelection.splice(0,5)
    }

  }
  AddRandomBtn = () => {
    let randomContact =  contacts[Math.floor(Math.random() * contacts.length)];
    let newContactSelection = [...this.state.contactSelection];
    this.setState({
      contactSelection: newContactSelection.push(randomContact)
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.AddRandomBtn}>Add random contact</button>
        {
          this.state.contactSelection.map((contact, index) =>
            <Contact
              key={index}
              pictureUrl={contact.pictureUrl}
              name={contact.name}
              popularity={contact.popularity}
            />
            )  
        }
      </div>
    )
  }
}
