import React from 'react';
import contacts from './contacts.json'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Contact from './components/Contact'
import _ from 'lodash';


class App extends React.Component {

  state = {
    arrContacts: contacts.slice(0, 5)
  }

  randomContactHandler = () => {
    /* let copyContacts = [...this.state.arrContacts]
    console.log(copyContacts) */

    // TODO: set fallback for double keys
    let randomContact = _.sample(contacts)

    this.setState({
      arrContacts: this.state.arrContacts.concat(randomContact)
    })
  }

  // TODO: orderBy depending on lastName / firstName
  sortNameHandler = () => {
    let sortedByList = _.orderBy(this.state.arrContacts, ['name'],['asc'])
    console.log(sortedByList)

    this.setState({
      arrContacts: sortedByList
    })
  }

  sortPopularityHandler = () => {
    let sortedByList = _.orderBy(this.state.arrContacts, ['popularity'],['desc'])
    console.log(sortedByList)

    this.setState({
      arrContacts: sortedByList
    })
  }

  deleteHandler = (id) => {

    this.setState({
        arrContacts: this.state.arrContacts.filter((contact) => contact.id !== id)
    })
}

  render() {

    return (
      <div>
      <h1>Iron Contacts</h1>
      <button className="btn btn-success" onClick={this.randomContactHandler}>Add random contact</button> 
      <button className="btn btn-warning" onClick={this.sortNameHandler}>Sort by name</button>
      <button className="btn btn-danger" onClick={this.sortPopularityHandler}>Sort by popularity</button> 
        <table className="table table-striped">
          <thead>
          <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {this.state.arrContacts.map((contact) => <Contact key={contact.id} contactId={contact.id} pictureUrl={contact.pictureUrl} name={contact.name} popularity={contact.popularity} deleteHandler={this.deleteHandler}></Contact>)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
