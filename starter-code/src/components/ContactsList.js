import React, {Component} from 'react'

import contacts from '../contacts.json'
import Card from './Card.js';

class ContactsList extends Component  {
    
    constructor(){
        super()

        this.state =  {Allcontacts: contacts.splice(0, 5)}        
        
    }

    render() {
      console.log(this.state.Allcontacts)
      return (
        <tbody>
          
        {this.state.Allcontacts.map((elm, idx) => {
          return <Card key={idx} name={elm.name} pictureUrl={elm.pictureUrl} popularity={elm.popularity} /> 
        })}
      
        </tbody>        
      )
    }
}  


 export default ContactsList //= contacts.map((elm, idx) => {
//     return <td key={idx} name={elm.name} pictureUrl={elm.pictureUrl} popularity={elm.popularity} />
//})