import React, { Component } from 'react';
import './App.css';

import contacts from './contacts.json'
import Table from './components/Table'

class App extends Component {


constructor () {
    super()
    this.state = {
      listOfContacts : contacts.splice(0,5)
      
    }
  }

  randomContacts = () => {
    const stateCopy = [...this.state.listOfContacts]
  
    const newRandomContact = Math.floor(Math.random() * contacts.length)
  
    // console.log(contacts[newRandomContact])
    
    stateCopy.push(contacts[newRandomContact])
    
    this.setState ({
      listOfContacts: stateCopy
    })
  }


  sortByName = () => {
    const stateCopy = [...this.state.listOfContacts]
    // console.log(stateCopy)

    const nameSorted = stateCopy.sort(function(a,b) {
      return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0
    })

    this.setState ({
      listOfContacts: nameSorted
    })
  }


  sortByPopularity = () => {
    const stateCopy = [...this.state.listOfContacts]

    const popularSorted = stateCopy.sort(function(a,b) {
      return (a.popularity > b.popularity) ? -1 : (a.popularity < b.popularity) ? 1 : 0
    })

    this.setState ({
      listOfContacts: popularSorted
    })
  }


   deleteOneContact = idx => {
      const stateCopy = [...this.state.listOfContacts]

      stateCopy.splice(idx, 1)

      this.setState ({
        listOfContacts: stateCopy
      })
   } 



  render() {
    // console.log(this.state)

    return (
      <div className="container"> 

        <h1>IronContacts</h1>  

        <button type="button" className="btn btn-primary" onClick={this.randomContacts}>Add Random Contact</button>

        <button type="button" className="btn btn-success" onClick={this.sortByName}>Sort by name</button>

        <button type="button" className="btn btn-success" onClick={this.sortByPopularity}>Sort by popularity</button>

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
        this.state.listOfContacts.map((elm, idx) => {
            return (
                <Table key={idx} picture= {elm.pictureUrl} name={elm.name} popularity={elm.popularity} deleteContact={() => this.deleteOneContact(idx)}/>

            )
          })
        }
            </tbody>
        </table>
      </div>
    );
  }
}




export default App;
