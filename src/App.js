import React from 'react';
import logo from './logo.svg';
import './App.css';
import allContacts from './contacts.json'
import Contacts from './components/Contact';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>IronContacts</h1>

        {allContacts.filter((contact, idx) => idx < 5).map((contact, idx) => {
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
  );
}

export default App;
