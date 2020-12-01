import React from 'react';
import './App.css';
import contacts from './contacts.json';

 class App extends React.Component{
  
      state = {
        contactsPortfolio: contacts.slice(0,5)
      }

      contactRandom = () => {
        const randomContact = Math.floor(Math.random()*contacts.length)
        return contacts[randomContact]
      }

      addContactRandom = () => {
        const contactsPortfolioCopy = [...this.state.contactsPortfolio]
        contactsPortfolioCopy.push(this.contactRandom())
        this.setState({ contactsPortfolio: contactsPortfolioCopy})
      }

      contactsSortName = () => {
        const contactsPortfolioCopy = [...this.state.contactsPortfolio]
        contactsPortfolioCopy.sort((a,b) => {
          if(a.name < b.name){
            return -1 
          }
          if(a.name > b.name){
            return 1 
          } else {
            return 0
          }
        })
        this.setState({ contactsPortfolio: contactsPortfolioCopy})
      }

      contactsSortPopularity = () => {
        const contactsPortfolioCopy = [...this.state.contactsPortfolio]
        contactsPortfolioCopy.sort((a,b) => {
          if(a.popularity < b.popularity){
            return -1 
          }
          if(a.popularity > b.popularity){
            return 1 
          } else {
            return 0
          }
        })
        this.setState({ contactsPortfolio: contactsPortfolioCopy})
      }

      deleteContact = (index) => {
        const contactsPortfolioCopy = [...this.state.contactsPortfolio]
        contactsPortfolioCopy.splice(index, 1)
        this.setState({ contactsPortfolio: contactsPortfolioCopy})
      }

      render(){
        return (
          <div className="App">
            <h1>Celebrity Agenda</h1>
            <button class="buttons" onClick={()=>this.addContactRandom()}>Add Random Contact</button>
            <button class="buttons" onClick={()=>this.contactsSortName()}>Sort by name</button>
            <button class="buttons" onClick={()=>this.contactsSortPopularity()}>Sort by popularity</button>
            <table >
                <tr id="columns">
                  <th class="columnsSpace">Picture</th>
                  <th class="columnsSpace">Name</th>
                  <th class="columnsSpace">Popularity</th>
                  <th class="columnsSpace">Action</th>
                </tr>
                <tr>
                {this.state.contactsPortfolio.map((contact, index) => {
                  return(
                  <tr key={index}>
                    <td><img src={contact.pictureUrl} alt={contact.name} /></td>
                    <td><p>{contact.name}</p></td>
                    <td><p>{contact.popularity}</p></td>
                    <td><button id="buttonDelete" onClick={() => this.deleteContact(index)}>Delete</button></td>
                  </tr>
                  )
                })}
                </tr>
            </table>
          </div>
        )
      }
}

export default App
