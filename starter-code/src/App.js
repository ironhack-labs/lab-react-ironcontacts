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
    const contactsCopy = [...this.state.listOfContacts]
  
    const newRandomContact = Math.floor(Math.random() * contacts.length)
  
    // console.log(contacts[newRandomContact])
    
    contactsCopy.push(contacts[newRandomContact])
    
    this.setState ({
      listOfContacts: contactsCopy
    })
  }


  render() {
    // console.log(this.state)

    return (
      <div className="container"> 

        <h1>IronContacts</h1>  

        <button onClick={this.randomContacts}>Add Random Contact</button>

        <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>  

            <tbody>

        {
        this.state.listOfContacts.map((elm, idx) => {
            return (
                <Table key={idx} picture= {elm.pictureUrl} name={elm.name} popularity={elm.popularity}/>

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
