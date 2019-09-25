import React, { Component } from 'react'
import contacts from './contacts.json'
import Tableitem from './components/Tableitem.jsx'

export default class App extends Component {
  state = {
    contacts: contacts.slice(0, 5)
  }

  addNextContact = () => {
    this.setState({
      contacts: [...this.state.contacts, contacts[this.state.contacts.length]]
    })
  }

  sortByName = () => {
    this.setState({
      contacts: this.state.contacts.sort((a, b) => (a.name < b.name ? -1 : 1))
    })
  }

  sortByPopularity = () => {
    this.setState({
      contacts: this.state.contacts.sort((a, b) => (a.popularity < b.popularity ? -1 : 1))
    })
  }

  removeContact = name => {
    this.setState({
      contacts: this.state.contacts.filter(e => e.name !== name)
    })
  }

  render() {
    const { contacts } = this.state
    return (
      <div className='container my-5'>
        <div className='row'>
          <div className='col-12 col-md-5 mx-auto'>
            {/* Heading */}
            <h1 className='font-weight-bold h2 text-center'>IronContacts</h1>
            <div className='btn-group mt-5 w-100'>
              <button className='btn btn-secondary' onClick={() => this.addNextContact()}>
                Add random
              </button>
              <button className='btn btn-secondary' onClick={() => this.sortByName()}>
                Sort by name
              </button>
              <button className='btn btn-secondary' onClick={() => this.sortByPopularity()}>
                Sort by popularity
              </button>
            </div>
            {/* Table */}
            <table className='table table-striped table-dark mt-5'>
              <thead>
                <tr>
                  <th scope='col'>Picture</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Popularity</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
                {contacts.length === 0 && (
                  <tr>
                    <td>No hay contactos</td>
                    <td></td>
                    <td></td>
                    <td>
                      <button className='btn btn-primary btn-sm' onClick={() => this.addNextContact()}>
                        Add one
                      </button>
                    </td>
                  </tr>
                )}
                {contacts.map((contact, i) => (
                  <Tableitem key={i} data={contact} removeContact={this.removeContact} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
