import React from 'react';
import contacts from "./contacts.json";


class App extends React.Component {

  state = {
    fiveContacts: contacts.slice(0,5)
  };

  addRandomContact = () => {
    const contactCopy = [...contacts];

    let random = Math.floor(Math.random()*contactCopy.length);
        let newContact = contactCopy[random];

    this.setState({ fiveContacts: [newContact, ...this.state.fiveContacts] })
  }

  sortByName = () => {
    const currentContactCopy = [...this.state.fiveContacts]
        let sortName = currentContactCopy.sort((a,b) => a.name.localeCompare(b.name))

          this.setState({fiveContacts: [...sortName]})
  }

  sortByPopularity = () => {
    const currentContactCopy = [...this.state.fiveContacts]
      let sortPop = currentContactCopy.sort((a,b) => b.popularity - a.popularity)

        this.setState({fiveContacts: [...sortPop]})
  }

  deleteContact = (contact) => {
    const currentContactCopy = [...this.state.fiveContacts]
      let newContacts = currentContactCopy.filter((contacts) => contacts.id !== contact.id)

        this.setState({fiveContacts: [...newContacts]})

  }



  render() {
    const movieProfiles = this.state.fiveContacts.map(contact => 
      (<tr  key={contact.id}><td> 
        <img src={contact.pictureUrl}style={{width:"50px"}}/>
        </td> <td>{contact.name}</td>
        <td>{contact.popularity}</td>
        <td><button onClick={this.deleteContact.bind(this, contact)}>Delete</button></td>
      </tr>));
     
       
      return (
      <div>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort By Name</button>
        <button onClick={this.sortByPopularity}>Sort By Popularity</button>
           <table className="Table">
       <tr>
          <th><h1>Picture</h1></th>
          <th><h1>Name</h1></th>
          <th><h1>Popularity</h1></th>
          <th><h1>Action</h1></th>
        </tr>
        {movieProfiles}

      </table>
      </div>
      )

    }
} 

export default App;
