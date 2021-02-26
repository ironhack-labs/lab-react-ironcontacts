import React, { Component } from 'react'
import contacts from "../contacts.json";
import Contact from "./Contact"



export default class ContactList extends Component {
    

    
    
    state = {
        displayedContacts: contacts.slice(0, 5)
    }

    addRandom = () => {
    const newContact =  contacts[Math.floor(Math.random() * contacts.length)];

        this.setState((state, props) => ({
            displayedContacts: [newContact, ...state.displayedContacts]
            // movies: moviesCopy
          })) 
    }

    
    
    render() {
        return (
            <div>

            <h1>IronContact</h1>

            <nav>

            <button onClick = {() => this.addRandom()}>Add random</button> 

            </nav>
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
            
               {this.state.displayedContacts.map((elem) => <Contact {...elem}/>)}

               </tbody>
               </table>
            </div>
        )
    }
}
