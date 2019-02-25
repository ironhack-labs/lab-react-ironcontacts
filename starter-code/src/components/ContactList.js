import React, { Component } from 'react';
import ContactItem from './ContactItem'
import contacts from '../data/contacts.json'

export default class ContactList  extends Component {

  state = {
    contacts: [...contacts]
  }

  

  OnClickDeleteItem = (contact) => {
    this.setState({
      contacts: this.state.contacts.filter(c => c.name !== contact.name)
    })
  }

  renderItems = () => {
    return this.state.contacts.map((contact, index) => {

      return <ContactItem key={index} {...contact} onClickDelete={this.OnClickDeleteItem.bind(this, contact)}/>
    });
  }
render() {
  return (
    <div>
      <table className="table w-25 mx-auto">
        <thead>
          <tr>
            <th className="col">Image</th>
            <th className="col">Name</th>
            <th className="col">Popularity</th>
            <th className="col"></th>
          </tr>
        </thead>
        <tbody>
          {this.renderItems()}
        </tbody>
</table>
    </div>
  )
}

}

