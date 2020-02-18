import React from 'react'

class ContactManager extends React.Component {

  state = {
    contactsPool : this.props.contacts,
    contacts : this.props.contacts.splice(0, 5)
  }

  addRandomContact = () => {
    const contacts = this.state.contactsPool;
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)]
    this.setState({contacts  : [...this.state.contacts, randomContact]})
  }

  sortByName = () => {
    const contacts = [...this.state.contacts].sort((a, b) => { return a.name.localeCompare(b.name) });
    this.setState({contacts : contacts })
  }

  sortByPopularity = () => {
    const contacts = [...this.state.contacts].sort((a, b) => { return a.popularity - b.popularity});
    this.setState({contacts : contacts })
  }

  onDelete = (index) => {
    this.setState({contacts : this.state.contacts.filter((v, i) => { return i !== index }) })
  }

  render () {
    return(
      <div className="contact-manager">

        <div className="contact-manager-buttons">

        <button onClick={this.addRandomContact}>Add random contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        </div>

        <table>

          <thead>
            <tr><th>Picture</th><th>Name</th><th>Popularity</th><th>Action</th></tr>
          </thead>

          <tbody>
          {this.state.contacts.map((v, i) => (
            <tr key={i}>
              <td><img src={v.pictureUrl} alt={v.name} /></td>
              <td>{v.name}</td>
              <td>{v.popularity.toFixed(2)}</td>
              <td><button onClick={() => this.onDelete(i)}>Delete</button></td>
            </tr>
          ))}
          </tbody>

        </table>

      </div>
    )
  }
}

export default ContactManager;
