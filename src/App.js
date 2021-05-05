import contacts from "./contacts.json";
import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    fiveFirstContacts: contacts.slice(0, 5)
  }

  randomContact = () => {
    const random = contacts[Math.floor(Math.random() * contacts.length-5)+5]
    const fiveFirstContactsCopy = [...this.state.fiveFirstContacts]
    console.log(fiveFirstContactsCopy)
    fiveFirstContactsCopy.push(random)
    this.setState({...this.state, fiveFirstContacts: fiveFirstContactsCopy})
  }

  sortedNameContacts = () => {
    const fiveFirstContactsCopy = [...this.state.fiveFirstContacts]
    const oderedName = fiveFirstContactsCopy.sort((a, b) => {
      if(a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) return -1 
      if(a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) return 1 
      return 0
    })
    this.setState({...this.state, fiveFirstContacts: oderedName})
    
  }

  sortedPopularityContacts = () =>{
    const fiveFirstContactsCopy = [...this.state.fiveFirstContacts]
    const oderedPopularity = fiveFirstContactsCopy.sort((a, b) => {
      if(a.popularity < b.popularity) return -1 
      if(a.popularity > b.popularity) return 1 
      return 0
    })
    this.setState({...this.state, fiveFirstContacts: oderedPopularity})

  }


  render() {
    const contactList = this.state.fiveFirstContacts.map((contact, index) => (
      <tr key={index}>
        <td ><img src={contact.pictureUrl} alt={contact.name} className='contactImg'/></td>
        <td>{contact.name}</td>
        <td>{contact.popularity.toFixed(2)}</td>
      </tr>
      ));  

    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div className='buttons'>
        <button onClick={this.randomContact}>Add Random Contact</button>
        <button onClick={this.sortedNameContacts}>Sort by name</button>
        <button onClick={this.sortedPopularityContacts}>Sort by popularity</button>
        </div>
        <div className='Contacts-table'>
          <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {contactList}
          </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
