import React from 'react';
import './App.css';
import contacts from "./contacts.json";


class App extends React.Component {

  constructor(){
    super();
      this.state = {
        remainingContacts: contacts.slice(5, contacts.length-1),
        initialContacts: contacts.slice(0,5)
        }
    };
    


    addRandomContact() {
      const originalContacts = [...this.state.remainingContacts]
      let i = Math.floor(Math.random() * originalContacts.length)
      
      const shownContacts = [...this.state.initialContacts]
      shownContacts.push(originalContacts[i])
      originalContacts.splice(i, 1)
      console.log(originalContacts)

      this.setState({
        ...this.state,
        initialContacts: shownContacts,
        remainingContacts: originalContacts.length > 0 ? originalContacts : contacts
      })

    };


    sortByName() {
      const shownContacts = [...this.state.initialContacts].sort((contact1, contact2) => contact1.name.localeCompare(contact2.name))
  
      this.setState({
        ...this.state,
        initialContacts: shownContacts
      })
    }

    sortByPopularity() {
      const shownContacts = [...this.state.initialContacts].sort((contact1, contact2) => contact2.popularity - contact1.popularity)
  
      this.setState({
        ...this.state,
        initialContacts: shownContacts
      })
    }



    removeContact = (id) => {
      const shownContacts = [...this.state.initialContacts].filter(contact => contact.id !== id)
      this.setState({
        ...this.state,
        initialContacts: shownContacts
      })
    }
  



   

  render() {

   return (
    <div className="App">
     <button onClick={() => this.addRandomContact()}>Add contacts</button>
     <button onClick={() => this.sortByName()}>Sort by name</button>
     <button onClick={() => this.sortByPopularity()}>Sort by popularity</button>
     
        <table>
          { this.state.initialContacts.map((contact, idx) => {
            return <tr key={contact.id + idx}>
                      <td><img src={contact.pictureUrl} className='img-actor' alt={contact.name} /></td> 
                      <td><h2>{contact.name}</h2></td> 
                      <td><h4>{contact.popularity.toFixed(2)}</h4></td>
                      <td><button onClick={() => this.removeContact(contact.id)}>Remove</button></td>   
                   </tr>
          })}
        </table>   
    </div>
   )
  }
}

export default App;



