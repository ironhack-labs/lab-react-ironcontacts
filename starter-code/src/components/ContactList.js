import React, { Component } from 'react';
import ContactItem from './ContactItem'
import Buttons from './Buttons'
import contacts from '../data/contacts.json'


export default class ContactList  extends Component {

  state = {
    contacts: new Array(5).fill(null).map((_, index) => contacts[index]),
    activeSort: undefined
  }

  OnClickAddRandomItem = () => {
    const newContact = contacts[Math.floor(Math.random() * contacts.length)]

    if (!this.state.contacts.includes(newContact)) {
      this.setState({
        contacts: [...this.state.contacts, newContact]
      }, () => this.sorter(this.state.activeSort))
    } else {
      this.OnClickAddRandomItem()
    }

  }

  OnClickSortByName = () => {
    this.setState({
      activeSort: "name",
      contacts: this.state.contacts.sort((a,b) => {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      })
    })
  }

  OnClickSortByRating = () => {
    this.setState({
      activeSort: "rating",
      contacts: this.state.contacts.sort((a,b) => b.popularity - a.popularity)
    })
  }

  OnClickDeleteItem = (contact) => {
    this.setState({
      contacts: this.state.contacts.filter(c => c.name !== contact.name)
    })
  }


  sorter = type => {

    const values =  {
      "name": this.OnClickSortByName,
      "rating": this.OnClickSortByRating
    }

    console.log(this.state.activeSort, values[type])
    values[type] && values[type]()

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

