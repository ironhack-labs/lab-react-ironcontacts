import contacts from "./contacts.json";
import './App.css';
import React from 'react';



class Contacts extends React.Component {
  state = {
    contacts: contacts.slice(0,5)
  }
  addRandomContact = () => {
    const newContact = contacts[Math.floor(Math.random() * contacts.length)];
    if (this.state.contacts.find(contact => contact.id === newContact.id)) {
      if (this.state.contacts.length < contacts.length) {
        this.addRandomContact();
      }
      return;
    }
    this.setState(state => {
      return {
        contacts: [...state.contacts, newContact]        
      }
    })

  }
  sortByName = () => {
    const contactsCopy = this.state.contacts;
    this.setState({
      contacts: contactsCopy.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    })
  }
  sortByPop = () => {
    const contactsCopy = this.state.contacts;
    this.setState({
      contacts: contactsCopy.sort((a,b) => (b.popularity - a.popularity))
    })
  }

  deleteContact = (id) => {
    const contactsCopy = this.state.contacts;
      this.setState({
        contacts: contactsCopy.filter(contact => contact.id !== id)
      })
  }
  render() {
    const tableContents = this.state.contacts.map(contact => {
      return (
         <tr key={contact.id}>
            <td><img src={contact.pictureUrl} alt={contact.name}/></td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td><button onClick={() => this.deleteContact(contact.id)}>Delete</button></td>
          </tr>
      )
    })
    //console.log(tableContents)
    return (
      <>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPop}>Sort by Popularity</button>
        <table className="contacts">
          <tbody>
            {tableContents}
          </tbody>
        </table>
      </>
    )
  }
}

function App() {

  return (
    <div className="App">
      <h1>Contacts</h1>
      <Contacts />
    </div>
  );
}

export default App;
