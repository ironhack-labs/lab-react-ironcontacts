import React, { Component } from 'react';
import DB from '../../../src/contacts.json'
import Contact from '../Contact/Contact.js';
class ContactsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DB: DB.slice(0, 5)
    }
  }
  render() {
    return (
      <div className=''>
        {
          this.state.DB.map(p => {
            return (<Contact name={p.name} />)
          })}
      </div>
    )
  }
}

export default ContactsPage;