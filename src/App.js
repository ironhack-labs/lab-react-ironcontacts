import contacts from "./contacts.json";
import './App.css';
import React from 'react';



class Contacts extends React.Component {
  state = {
    contactsArray: contacts.slice(0,5)
  }
  addRandomContact = () => {
    const newContact = contacts[Math.floor(Math.random() * contacts.length)];
    this.setState(state => {
      return {
        contactsArray: [...state.contactsArray, newContact]        
      }
    })

  }
  sortByName = () => {
    const contactsCopy = this.state.contactsArray;
    this.setState({
      contactsArray: contactsCopy.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    })
  }
  sortByPop = () => {
    const contactsCopy = this.state.contactsArray;
    this.setState({
      contactsArray: contactsCopy.sort((a,b) => (b.popularity - a.popularity))
    })
  }

  deleteContact = (id) => {
    const contactsCopy = this.state.contactsArray;
      this.setState({
        contactsArray: contactsCopy.filter(contact => contact.id !== id)
      })
  }
  render() {
    const tableContents = this.state.contactsArray.map(contact => {
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
