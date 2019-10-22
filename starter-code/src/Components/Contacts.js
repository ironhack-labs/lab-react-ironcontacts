import React from 'react';
import contacts from '../contacts.json';


class Contacts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contactList: contacts.slice(0, 5)
    }
  }

  addRandomContact() {
    const randomIdx = Math.floor(Math.random() * contacts.length)
    this.state.contactList.push(contacts[randomIdx])
    this.setState({ contactList: this.state.contactList })
  }

  sortByName() {
    this.setState({ contactList: this.state.contactList.sort((a, b) => a.name < b.name ? -1 : 1) })
  }

  sortByPopularity() {
    this.setState({ contactList: this.state.contactList.sort((a, b) => b.popularity - a.popularity) })
  }

  deleteContact(contactIdx) {
    const copyContactList = [...this.state.contactList]
    copyContactList.splice(contactIdx, 1)
    this.setState({ contactList: copyContactList })
  }

  render() {
    const contactRows = this.state.contactList.map((c, idx) => {
      return (
        <tr key={'contact_' + idx}>
          <td><img src={c.pictureUrl} alt="actor" /></td>
          <td>{c.name}</td>
          <td>{c.popularity}</td>
          <td><button onClick={this.deleteContact.bind(this, idx)}>Delete</button></td>
        </tr>
      )
    })

    return (
      <div className="container">

        <div className="buttons">
          <button onClick={this.addRandomContact.bind(this)}>Add Random Contact</button>
          <button onClick={this.sortByName.bind(this)}>Sort by name</button>
          <button onClick={this.sortByPopularity.bind(this)}>Sort by popularity</button>
        </div>

        <div className="contact-list">
          <table >
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {contactRows}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Contacts;
