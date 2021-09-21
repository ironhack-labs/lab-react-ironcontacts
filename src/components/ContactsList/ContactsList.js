import React from 'react';
import allContacts from './../../contacts.json';
import ContactItem from './../ContactItem/ContactItem';
import './ContactsList.css';

const fiveContacts = allContacts.slice(0, 5)


class ContactsList extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      contacts: fiveContacts,
    }
  }


  addRandomContact = () => {

    const contactsCopy = [...this.state.contacts];
    contactsCopy.push(allContacts[Math.floor(Math.random() * allContacts.length)])

    this.setState({
      ...this.state,
      contacts: contactsCopy
    })
  }


  sortBy = (key) => {

    const contactsCopy = [...this.state.contacts];

    this.setState({
      ...this.state,
      contacts: contactsCopy.sort((contact1, contact2) => {

        if (key === 'name') return contact1.name.localeCompare(contact2.name)
        else if (key === 'popularity') return contact2.popularity - contact1.popularity

      })
    })
  }


  deleteContact = (id) => {

    this.setState({
      ...this.state,
      contacts: this.state.contacts.filter(contact => contact.id !== id)
    })
  }


  render() {
    return (
      <section className={this.props.listClass}>
        <h1>IronContacts</h1>
        <button onClick={() => this.addRandomContact()} className={this.props.mainBtnClass}>Add Random Contact</button>
        <button onClick={() => this.sortBy('name')} className={this.props.mainBtnClass}>Sort By Name</button>
        <button onClick={() => this.sortBy('popularity')} className={this.props.mainBtnClass}>Sort By Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.contacts.map(contact => {
                return (
                  <ContactItem
                    deleteBtnClass="delete"
                    key={contact.id}
                    {...contact}
                    deleteContact={(id) => this.deleteContact(id)}
                  />
                )
              })
            }
          </tbody>
        </table>
      </section>
    );
  }

}


export default ContactsList;
