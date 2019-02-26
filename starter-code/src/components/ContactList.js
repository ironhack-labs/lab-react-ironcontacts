import React, { Component } from 'react';
import ContactItem from './ContactItem'
import Buttons from './Buttons'
import contacts from '../data/contacts.json'


export default class ContactList  extends Component {

  state = {
    contacts: new Array(5).fill(null).map((_, index) => contacts[index])
  }

  OnClickAddRandomItem = () => {
    const newContact = contacts[Math.floor(Math.random() * contacts.length)]
    
    this.setState({
      contacts: [...this.state.contacts, newContact]
    }, () => this.OnClickSortByName())
  }

  OnClickSortByName = () => {
    this.setState({
      contacts: this.state.contacts.sort((a,b) => {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      })
    })
  }

  OnClickSortByRating = () => {
    this.setState({
      contacts: this.state.contacts.sort((a,b) => b.popularity - a.popularity)
    })
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
      <React.Fragment>
        <div>
          <div className="d-flex justify-content-center mb-3">
            <Buttons 
              OnClickAddRandomItem={this.OnClickAddRandomItem}
              OnClickSortByName={this.OnClickSortByName}
              OnClickSortByRating={this.OnClickSortByRating} />
          </div>
        </div>
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
      </React.Fragment>
    )
  }
}

