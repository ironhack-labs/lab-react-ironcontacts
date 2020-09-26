import React from 'react';
import logo from './logo.svg';
import './App.css';
import allContacts from './contacts.json'
import Contacts from './components/Contact';

class App extends React.Component {

  state = {
    firstContacts: allContacts.slice(0,5)
  }

  addRandomContact = () => {
    const selectedRandomContact = allContacts[Math.floor(Math.random()*allContacts.length)];
    this.setState({
        firstContacts: [...this.state.firstContacts, selectedRandomContact]
    });
  }

  render () {
    return (
      <div className="App">
        <h1 style={{textAlign: 'center'}}>IronContacts</h1>
        <div className="add-contact">
          <button className="add-contact" onClick={this.addRandomContact}>Add random contact</button>
        </div>
          {this.state.firstContacts.map((contact, idx) => {
              return(
                <Contacts 
                  name={contact.name} 
                  popularity={contact.popularity.toFixed(2)} 
                  picture={contact.pictureUrl} 
                />
              )
            })
          }
      </div>
    )
  }
}

export default App;
