import React, { Component } from 'react';
import './App.css';
import Table from './Components/Table';
import contacts from './contacts.json'

class App extends Component {
  

  render() {

    console.log(contacts)

    return(
      <div>
        {contacts.map((e, i) => {
          return(
            <Table key={i}
            picture={e.pictureUrl}
            name={e.name}
            popularity={e.popularity}
            />  
            )
          })
        }
      </div>
    ) 
  }
}

export default App;
