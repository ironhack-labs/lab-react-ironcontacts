import React, { Component } from 'react';

import Card from './components/Card'
import contacts from './contacts.json'
import Boton from './components/Boton'
import Boton2 from './components/Boton2'
import Boton3 from './components/Boton3'

import './App.css';
import { constants } from 'crypto';


class App extends Component {
  
  constructor(){
    super()

    this.state = {
      //el JSON se llama contacts
      contacts: contacts
    }
  }
  
  
  addContact = () =>{
    
    const otra = [...this.state.contacts]
  
        
    otra.push(contacts[Math.floor(Math.random()* contacts.length)])

        this.setState({
          ...this.state,
          contacts : otra
        })

}



deleteContact= idx => {
            
  const contactsCopy = [...this.state.contacts]
  contactsCopy.splice(idx, 1)

  this.setState({
      contacts: contactsCopy
  })
}



orderContacts= () => {
  const order = [...this.state.contacts]

  order.sort(function (a, b) {

    return b.popularity - a.popularity

  })
  
      this.setState({
        contacts : order
   })

  }

  orderByName =() =>{

  }




render(){
  //creamos una variable que se llama contactList que sera igual al state original para modificar el original precisamnte
  const contacList = this.state.contacts
  //creamos otra constante a la que le aremos el slice para que nos devuelva de la posicion 0 a la 4 del JSON (que es un array)
  const parapintar= contacList.slice(0, 4)

      return(
        <div className="container md-12">

        <h1>Iron Contacts</h1>
        <div>
          <div className="row"></div>

            <div className="col-md-4 mb-2 disp">
              <Boton  addContact={() => this.addContact()} >Añadir contacto random</Boton>
            </div>

            <div className="col-md-4 mb-2 disp">
              <Boton2 orderContacts={() => this.orderContacts()}>Ordenar por popularidad</Boton2>
            </div>

            <div className="col-md-4 disp">
            <Boton3 >Ordenar Contactos por nombre</Boton3>
            </div>


          {/* <button className="btn btn-dark" onClick={() => this.addContact()} >
            Add Random contact
          </button> */}
        </div>
        <div>
          <ul>
            {/* mapeamos para crear un array nuevo, como mapeamos el array al que hicimos splice, solo nos devuelve los elementos que le indicamos antes */}
           { parapintar.map((elm,idx) => {
                return  <Card key={idx} pictureUrl={elm.pictureUrl} name={elm.name} popularity={elm.popularity} deleteContact={()=> this.deleteContact(idx)}/>
                  })
           }
           

          </ul>
        </div>
      </div>
      )
    }
}

export default App;
