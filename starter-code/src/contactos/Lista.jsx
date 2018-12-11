import React, { Component } from "react";
import Contacto from './Contacto'
import contacts from '../contacts.json'

class Lista extends Component {
state = {
    contactList: contacts.slice(0, 5),
    showList: contacts.slice(0, 5)
}

  render() {
      const {contactList} = this.state;
    return (<div>
        {contactList.map(contactList=><Contacto key={contactList.id} {...contactList}/>)}

    </div>);
  }
}

export default Lista;
