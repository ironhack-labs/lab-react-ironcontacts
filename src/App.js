import React from 'react';
import './App.css';
import Contacts from './contacts.json'


const fiveContact = []
Contacts.filter((elem, i) => {
  if (i <= 4) {
    fiveContact.push(elem)
  }
})


class App extends React.Component {
    state = {
        contact: fiveContact,
    }
    
    randomContact = () => {
      let newContact = Contacts[Math.floor(Math.random()*Contacts.length)]
      // console.log(newContact)
      const otherContact = [...this.state.contact]
      if (otherContact.includes(newContact)) {
        this.randomContact()
      } else {
        // console.log('toto');
        otherContact.push(newContact)
        this.setState({
        contact: otherContact
        })
      }
    }
    
    sortByName = () => {
      const sortedContactName = [...this.state.contact]
      sortedContactName.sort((a,b) => {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      })
      this.setState({
        contact: sortedContactName
      })
    }

    sortByPopularity = () => {
      const sortedContactPopularity = [...this.state.contact]
      sortedContactPopularity.sort((a,b) => {
        if(a.popularity < b.popularity) { return 1; }
        if(a.popularity > b.popularity) { return -1; }
        return 0;
      })
      // console.log(sortedContactPopularity)
      this.setState({
        contact: sortedContactPopularity
      })
    }

    deleteContact = (i) => {
      const cleanContact = [...this.state.contact]
      cleanContact.splice(i, 1)
      console.log(cleanContact)
      this.setState({
        contact: cleanContact
      })
    }

    render() {
        return (
            <div>
            <h1>IronContacts</h1>
            <button onClick={this.randomContact}>Add Random Contact</button>
            <button onClick={this.sortByName}>Sort By Name</button>
            <button onClick={this.sortByPopularity}>Sort By Popularity</button>
                <table>
                    <thead>
                        <tr>
                          <td><h2>Picture</h2></td>
                          <td><h2>Name</h2></td>
                          <td><h2>Popularity</h2></td>
                          <td><h2>Action</h2></td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contact.map((elem, i) => (
                          <tr key={i}>
                            <td><img src={elem.pictureUrl} alt='' /></td>
                            <td>{elem.name}</td>
                            <td>{elem.popularity.toFixed(2)}</td>
                            <td><button onClick={(evt) => this.deleteContact(i)}>Delete</button></td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
         
        )
    }
}

export default App;
