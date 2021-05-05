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
        <div className='Contacts-table'>
        <h1>IronContacts</h1>
        <button onClick={this.randomContact}>Add Random Contact</button>
          <table>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            {contactList}
          </table>
        </div>
      </div>
    );
  }
}

export default App;
