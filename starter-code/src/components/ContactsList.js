import React, { Component } from 'react';
import Contact from './Contact.js'


class ContactsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: this.props.contacts || [],
      firstContacts: this.props.contacts.slice(0, 5)
    }
  }
  addNewContact = () => {
    const newContacts = this.state.contacts.filter(c => !this.state.firstContacts.includes(c))
    const randomContact = newContacts[Math.floor(Math.random() * newContacts.length)]
    this.setState({ firstContacts: [...this.state.firstContacts, randomContact] })
  }

  sortByName = () => {
    const sortFirstByName = this.state.firstContacts.sort((a, b) => a.name.localeCompare(b.name))
    this.setState({
      firstContacts: sortFirstByName
    })
  }
  sortByPopularity = () => {
    const sortFirstByPopularity = this.state.firstContacts.sort((a, b) => b.popularity - a.popularity)
    this.setState({
      firstContacts: sortFirstByPopularity
    })
  }
  deleteContact = (index) => {
    const newFirst = this.state.firstContacts;
    newFirst.splice(index, 1);
    this.setState({
      firstContacts: newFirst
    })
  }

  render() {
    return (
      <div>
        <div className="btn-group" role="group" aria-label="...">
          <button type="button" className="btn btn-success" onClick={this.addNewContact}>Add contact</button>
          <button type="button" className="btn btn-info" onClick={this.sortByName}>Sort by name</button>
          <button type="button" className="btn btn-warning" onClick={this.sortByPopularity}>Sort by Popularity</button>
        </div>
        <table className="table" style={{ textAlign: 'center', margin: 'auto' }}>
          <thead>
            <tr className="list-group list-group-horizontal-lg">
              <th className="list-group-item col-lg-3">Picture</th>
              <th className="list-group-item col-lg-3">Name</th>
              <th className="list-group-item col-lg-3">Popularity</th>
              <th className="list-group-item col-lg-3">Delete contact</th>
            </tr>
            {this.state.firstContacts.map((contact, index) => {
              return (<Contact key={index} {...contact} deleteContact={() => this.deleteContact(index)} />)
            })}
          </thead>
        </table>
      </div>
    );
  }
}

export default ContactsList; 