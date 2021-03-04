import React from 'react'
import contacts from '../../contacts.json'
import AddRandom from './add-random/AddRandom';
import Contact from './contact/Contact'


class ContactList extends React.Component {

  state = {
    contacts: contacts.slice(0, 5)
  }

  addRandomContact = (event) => {

    event.preventDefault();
    const randomContact = contacts[Math.floor(Math.random() * contacts.length) + 0];

    this.setState((prev) => {
      return {
        contacts: [randomContact, ...prev.contacts]
      }
    });
  }

  sortByNameHandler = () => {

    const orderedNameContacts = this.state.contacts.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    this.setState((prev) => {
      return {
        contacts: orderedNameContacts
      }
    });
  }

  sortByPopularityHandler = () => {

    const orderedPopularityContacts = this.state.contacts.sort((a, b) => {
      return parseFloat(b.popularity) - parseFloat(a.popularity);
    });

    this.setState((prev) => {
      return {
        contacts: orderedPopularityContacts
      }
    });

  }

  deleteContact = (id) => {
    this.setState((prev) => {
      return {
        contacts: prev.contacts.filter(i => i.id !== id)
      }
    })
  }

  render() {

    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="col-4">
              <form onSubmit={this.addRandomContact} >
                <button className="btn btn-dark" type="submit" >Add Random Contact</button>
              </form>
            </div>
            <div className="col-4">
              <button className="btn btn-light" onClick={this.sortByNameHandler} >Sort by Name</button>
            </div>
            <div className="col-4">
              <button className="btn btn-primary" onClick={this.sortByPopularityHandler} >Sort by Popularity</button>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.contacts.map((contact, i) => {
                  return <Contact contact={contact} deleteContact={this.deleteContact} />
                })
              }
            </tbody>
          </table>
        </div>
      </div>

    );
  }

}



export default ContactList
