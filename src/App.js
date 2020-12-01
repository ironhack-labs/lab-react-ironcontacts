import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import ContactCard from './contactcard/ContactCard'

class App extends React.Component {
  state = {
      contactList: contacts.slice(0, 5),
      
    }

    handleRandomContact = () =>{
      const randomNumber = Math.floor(Math.random()*contacts.length)
      const randomContact = contacts[randomNumber];
      if(this.state.contactList.indexOf(randomContact) !== -1){
        console.log("Already there")
         this.handleRandomContact()
         return
      }
      const newContacts = [...this.state.contactList, randomContact];
      this.setState( { contactList: newContacts} );
    }

    handleSortByName = () =>{
      const newContacts = this.state.contactList;

      newContacts.sort(function(a, b){
        if(a.name<b.name){
          return -1;
        }else{
          return 1;
        }
      })

      this.setState( {contactList:newContacts })
    }

    handleSortByPopularity = () =>{
      const newContacts = this.state.contactList;

      newContacts.sort(function(a, b){
        return b.popularity - a.popularity
      })
      this.setState( {contactList:newContacts })

    }

    handleDelete = (contactId) => {
        const newContacts = this.state.contactList;

        const filteredContacts = newContacts.filter((contact) => {
          if(contact.id !== contactId){
            return true
          }else{
            return false
          }
        })

        this.setState({ contactList: filteredContacts })
    }

  render(){

  return (

    <div className="App">

    <button onClick ={this.handleRandomContact}>Add Random Contact</button>
    <button onClick = {this.handleSortByName}>Sort by Name</button>
    <button onClick = {this.handleSortByPopularity}>Sort by Popularity</button>


      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Photo</th>
          <th>Popularity</th>
          <th>Action</th>

        </tr>
        </thead>
          <tbody>

                {this.state.contactList.map((list) => {
                return( 
                        <ContactCard 
                        key={list.id}
                        handleDelete = {this.handleDelete}
                        {...list}
                             />
                  )
                })}

          </tbody>
      </table>
    </div>
  );
      }
}

export default App;
