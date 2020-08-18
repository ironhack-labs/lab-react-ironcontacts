import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import ContactDetail from './components/ContactDetail'


class App extends React.Component {
  constructor(props){
    super(props) 
    this.state = {
        initialContacts: contacts.filter((contact, index) => index < 5),
        otherContacts: contacts.filter((contact, index) => index >= 5)
    }
}

  handleAddContact = () => {
    let randomIndex = Math.floor(Math.random() * this.state.otherContacts.length)
    let randomContact = this.state.otherContacts[randomIndex]
    let newList = [...this.state.otherContacts]
    newList.splice(randomIndex, 1) // We delete this contact from the remaining ones
    this.setState({
      initialContacts: [...this.state.initialContacts, randomContact], // We add this random contact to the initial list
      otherContacts: newList // The remaining list now has one contact less
    })
  }

  handleSort = (sorting) => {
    let cloneContacts = [...this.state.initialContacts]
    cloneContacts.sort((a,b) => {
      if (a[sorting] < b[sorting]) {
        return sorting === "name" ? -1: 1 // The name sorting is from a to z, the popularity from highest to lowest
      } else if (a[sorting] > b[sorting]){
        return sorting === "name" ? 1: -1 // The name sorting is from a to z, the popularity from highest to lowest
      } else {
        return 0
      }
    })
    this.setState({
      initialContacts: cloneContacts
    })
  }

  handleDelete = (contactId) => {
    let cloneContacts = [...this.state.initialContacts]
    let index = cloneContacts.map(e => e.id).indexOf(contactId)
    cloneContacts.splice(index, 1)
    this.setState({
      initialContacts: cloneContacts
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.handleAddContact} > Add Random Contact </button>
        <button onClick={() => this.handleSort("name")} > Sort by name </button>
        <button onClick={() => this.handleSort("popularity")} > Sort by popularity </button>
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
                    this.state.initialContacts.map((contact, index) => {
                        return <ContactDetail 
                                contact={contact} 
                                key={contact.id}
                                onDelete = {this.handleDelete} /> 
                        })
                }
            </tbody>
        </table>
      </div>
    );
  }
}

export default App;
