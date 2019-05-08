import React, { Component } from 'react';
import './App.css';
import Table from './Components/Table';
import contacts from './contacts.json'

class App extends Component {
  
  contacto = contacts.slice(0,5) //estoy tomando solo los primeros 5 - no incluye el último
  
  state={ /* NECESITO STATE PARA CUALQUIER MODIFICACIÓN AL LOS DATOS */
    contacts : this.contacto
  }

  render() {

    //console.log(contacts)
      
    return(
      <div>
        {this.state.contacts.map((e, i) => {
          return(
            <Table 
            key={i}
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
