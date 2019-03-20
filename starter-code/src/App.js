import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'

import Contact from './components/stateless/Contact'
import Title from './components/stateless/Title'

class App extends Component {

  constructor() {
    super()
    this.state = {
      contacts: contacts.splice(0, 5) 
    }
  }



  clickHandler = () => {

    const randomContact = Math.floor(Math.random() * contacts.length) 
    contacts[randomContact] 
    console.log(contacts[randomContact] )

      let newContacts = this.state.contacts;
      newContacts.push(contacts[randomContact])

      this.setState({
        contacts: newContacts


      })
    }

    
    sortByName = () => {

      let sortedContacts = this.state.contacts.sort((a, b) => {

        if (a.name > b.name) {
          return 1
        } 
        if (a.name < b.name) {
          return -1
        }
          return 0
        }

      )
        this.setState({
          contacts : sortedContacts
        })
      
    }



    
    sortByPopularity = () => {
      console.log("pollas")
      let sortedPopContacts = this.state.contacts.sort((a, b) => {

        if (a.popularity > b.popularity) {
          return 1
        } 
        if (a.popularity < b.popularity) {
          return -1
        }
          return 0
        }

      )
        this.setState({
          contacts : sortedPopContacts
        })
      
    }

    deleteContact = (contactIndex) => {
      const contactsCopy = [...this.state.contacts];
      contactsCopy.splice(contactIndex, 1);
      this.setState({
          contacts: contactsCopy
      })
  }




  render() {

    return (
    <main>

    <section className="contactos">


                <div>
                  <Title text="IronContacts" />
                  <button onClick={this.clickHandler}>Add Random Contact</button>
                  <button onClick={this.sortByName}>Sort by name</button>
                  <button onClick={this.sortByPopularity}>Sort by popularity</button>
                  
                  <table>
                <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                </tr>

                {this.state.contacts.map((contact, index) => {
                    return <Contact key={index} {...contact} deleteContact= {() => this.deleteContact(index) }
                    />

                })}
                </table>
                
                </div>

    </section>


  </main>

    );
  }
}




export default App;
