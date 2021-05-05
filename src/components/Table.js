import React, { Component } from 'react'
import './Table.css'

export default class Table extends Component {
  state = {
    contacts: this.props.data.slice(0, 5),
  }

  addRndContact = () => {
    this.setState((state) => {
      const availableContacts = this.props.data.filter(
        (contact) => !state.contacts.includes(contact)
      )

      const newContact =
        availableContacts[Math.floor(Math.random() * availableContacts.length)]

      return {
        contacts: [newContact, ...state.contacts],
      }
    })
  }

  sortByPopularity = () => {
    this.setState((state) => {
      const sortedContacts = state.contacts.sort((a, b) => {
        return b.popularity - a.popularity
      })
      return {
        contacts: sortedContacts,
      }
    })
  }

  sortByName = () => {
    this.setState((state) => {
      const sortedContacts = state.contacts.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
      return {
        contacts: sortedContacts,
      }
    })
  }

  deleteContact = (id) => {
    this.setState((state) => {
      const newContacts = state.contacts.filter((contact) => {
        return contact.id !== id
      })

      return {
        contacts: newContacts,
      }
    })
  }

  render() {
    //   USE THIS IF I WANT TO CREATE HEADERS DYNAMICALLY
    // const tableHeader = Object.keys(this.props.data[0]).map((header) => (
    //   <th>{header}</th>
    // ))

    const tableRows = this.state.contacts.map((contact) => {
      return (
        <tr key={contact.id}>
          <td className='picture'>
            <img src={contact.pictureUrl} />
          </td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
          <td>
            <button onClick={() => this.deleteContact(contact.id)}>
              delete
            </button>
          </td>
        </tr>
      )
    })

    return (
      <div>
        <button onClick={this.addRndContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        <table className='table'>
          {/* USE THIS IF I WANT TO CREATE HEADERS DYNAMICALLY  */}
          {/* <tr>{tableHeader}</tr> */}
          <thead>
            <tr>
              <th>picture</th>
              <th>name</th>
              <th>popularity</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    )
  }
}
