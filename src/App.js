import React, { Component } from 'react'
import contacts from './contacts.json'
import ContactRow from './components/Contact/Contact'
import RandomButton from './components/Button/Button'
import SortName from './components/SortBy/SortName'
import SortPopul from './components/SortBy/SortByPopularity'

class App extends Component {
  state = {
    contactsList5: [...contacts].slice(0, 5)
  }

  addRandomContact = () => {
    let inlist = true;
    let newContact;
    const {contactsList5} = this.state
    while (inlist){
      newContact = contacts[Math.floor(Math.random() * contacts.length)];
      inlist = false;
      for (let i = 0; i<contactsList5.length; i++){
        if (contactsList5[i].name === newContact.name) {
          inlist=true
        }
      }
    }
    this.setState({
      contactsList5: [...this.state.contactsList5, newContact]
    })
  };

  sortByName = () => {
    const sortedList = [...this.state.contactsList5];
    sortedList.sort((a,b) => a.name.localeCompare(b.name))
    this.setState({
      contactsList5: sortedList
    })
  }

  sortByPopularity = () => {
    const sortedList = [...this.state.contactsList5];
    sortedList.sort((a,b) => b.popularity - a.popularity)
    this.setState({
      contactsList5: sortedList
    })
  }

  removeContact = (id) => {
    const removeContact = this.state.contactsList5.filter((contact) => contact.id !==id);
    this.setState({
      contactsList5: removeContact
    })
  };
  

  render() {
    return (
      <div>
        <h1>IronContact</h1>
        <RandomButton addRandomContact={this.addRandomContact} />  
        <SortName sortByName={this.sortByName}/>
        <SortPopul sortByPopularity={this.sortByPopularity}/>
        <table>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
            {this.state.contactsList5.map(contact => <ContactRow contact={contact} clickToDelete={this.removeContact}/> )}
        </table>
      </div>
    )
  }
}


export default App
