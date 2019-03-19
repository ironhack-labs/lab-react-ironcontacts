import React, { Component } from 'react';
import contacts from '../contacts.json'

import ContactTable from '../components/ContactTable'

class Contacts extends Component {

  constructor() {

    super()

    this.state = {
        allContacts: contacts.splice(0, 5),
      
    }

   
    
  }

  addRandomContact = () => {

    //add random actor
    const randomContactsCopy = [...this.state.allContacts]
    const randomNumber = Math.floor(Math.random() * 50) + 5
    randomContactsCopy.push(contacts[randomNumber])


    this.setState({
      allContacts: randomContactsCopy
  })
  }

  sortByName = () => {

    const allContactsCopy = [...this.state.allContacts]

    const sortedContactsName = allContactsCopy.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    })
    

    this.setState({
      allContacts: sortedContactsName
    })

  }

  sortByPopularity = () => {

    const allContactsCopy = [...this.state.allContacts]

    const sortedContactsPopularity = allContactsCopy.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return 1;
      }
      if (a.popularity < b.popularity) {
        return -1;
      }
      return 0;
    })
    

    this.setState({
      allContacts: sortedContactsPopularity
    })

    
  }

  deleteContact = contactIndex => {

    const allContactsCopy = [...this.state.allContacts]

    allContactsCopy.splice(contactIndex, 1)

    this.setState({
      allContacts: allContactsCopy  
  })

  }

  

  render() {

    return (
        <div>
          <h2>IronContacts</h2>

          <button onClick={this.addRandomContact}>Add Random Contact</button>
          <button onClick={this.sortByName}>Sort By Name</button>
          <button onClick={this.sortByPopularity}>Sort By Popularity</button>

          <article className="contacts-container">

            <table>
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {
                    this.state.allContacts.map((contact, index) => {
                      return <ContactTable  
                                key={index} 
                                {...contact} 
                                clickToDelete = {() => this.deleteContact(index)}/>
                    }) 
                  }
              
              </tbody>
            </table>

          </article>
          
        </div>
    
    )
  }


}



export default Contacts