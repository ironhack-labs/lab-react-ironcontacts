import React, {Component} from 'react';
import contacts from '../contacts.json'
import ArtistList from './ArtistList'


import './App.css';

 class App extends Component {
      constructor() {
          super()
          this.state = {
             contacts: contacts.splice(0,6),
            
       }
  }

  addOne = () => {
          let array = contacts

          let random = Math.floor(Math.random()* array.length)
          let newState = this.state.contacts

          newState.push(array[random])

        this.setState({
          contacts : newState
    })

   }

  sortByName = () => {

          const newContacts = this.state.contacts
          newContacts.sort((a , b) => a.name > b.name ? 1 : -1)
          console.log(newContacts)

          this.setState({
            contacts : newContacts
        })
      }

  sortByPopularity = () => {

          const newContacts = this.state.contacts
          newContacts.sort((a , b) => b.popularity - a.popularity)
          console.log(newContacts)

          this.setState({
            contacts : newContacts
        })
      }

  removeContact = contactID => {
          this.setState({
              contacts: this.state.contacts.filter(elm => elm.id !== contactID)
        })
      }


  
  
  render() {

    
      
    

    return ( 
    <>
    <div className='ironcontacts'>
      <h1>Iron Contacts</h1>
      <div>
        <button onClick={this.addOne}>add Random Contact</button>
        <button onClick={this.sortByName}>Sort By Name</button>
        <button onClick={this.sortByPopularity}>Sort By Popularyty</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
            
            {this.state.contacts.map(elem => <ArtistList key={elem.id} {...elem} removeContact ={() => this.removeContact(elem.id)}/>)}
        </tbody>
          
          
      </table>

    </div>
    
      
    </>
    )};
}

export default App;
