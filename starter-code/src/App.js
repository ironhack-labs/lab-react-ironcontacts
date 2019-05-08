import React, { Component } from 'react';
import './App.css';
import Table from './Components/Table';
import contacts from './contacts.json'

class App extends Component {
  
  contacto = contacts.slice(0,5) //estoy tomando solo los primeros 5 - no incluye el último
  
  state={ /* NECESITO STATE PARA CUALQUIER MODIFICACIÓN AL LOS DATOS */
    contacts : this.contacto
  }

  addRandomContact = () => {
    /* Generar el random con Math */
  //  let randomContact = contacts[(contacts.length * Math.random())]
    /*empujo el random */
  //  const {contact} = this.state.contacto
  //  contact.push(randomContact)
    /* setState para que genere un cambio en state */
  //  this.setState({contacts: randomContact})
  }

  sortByName= () => {
    /* llamar contact del state */
    const {contact} = this.state.contacto
    /* crear el sort */
    const sortName = contact.sort((a,b) => (a.name < b.name ? -1 : 1))
    /* setState para que genere cambio en state */
    this.setState({
      contacts: sortName
    })
  }

  sortByPopularity = () => {
      /* llamar contact del state */
    const {contact} = this.state.contacto
    /* crear el sort */

    /* setState para que genere cambio a state */
  }

  render() {

    //console.log(contacts)
      
    return(
      <div>
        <br/>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        <br/>
        <br/>
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
