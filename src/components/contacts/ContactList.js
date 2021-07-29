import React, { Component } from "react";
import ContactItem from "./ContactItem";
import data from "../../data/contacts.json"
import "./Contact.css"

class ContactList extends Component {
    state = {
        contacts: [],
      }
    
      componentDidMount() {
        this.setState({ contacts: data.slice(0, 5) })
      }
    
      handleDeleteContact(id) {
        this.setState(({contacts}) => ({
          contacts: contacts.filter(contact => contact.id !== id)
        }))
      }

      handleAddContact() {
        const { contacts } = this.state;        
        const restOfContacts = data.filter( ({ id }) => !contacts.some(contact => contact.id === id))
        if (restOfContacts.length > 0) {
            const random = restOfContacts[Math.floor(Math.random() * restOfContacts.length)];        
            this.setState(({contacts}) => ({ contacts: [...contacts, random]}))
        }
    } 

     handleSortByname() {          
        this.setState(( {contacts} ) => ({            
            contacts: contacts.sort((a, b) => a.name.localeCompare(b.name)) 
        }))
     }

     handleSortByPopularity() {         
        this.setState(({contacts}) => ({            
            contacts: contacts.sort((a, b) => b.popularity - a.popularity) 
        }))
     }

    


    render(){

    const { contacts } = this.state;

    return (
     
            <React.Fragment>
            <div className="container text-center">
            <img src="/logo.png" alt="IronHack Contacts" />
            <h1 className="text-info mb-5">IronContacts</h1> 

            <div className="btn-group m-5" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary" onClick={() => this.handleAddContact()}>Add random Contact</button>
                <button type="button" class="btn btn-secondary" onClick={() => this.handleSortByname()}>Order by name</button>
                <button type="button" class="btn btn-secondary" onClick={() => this.handleSortByPopularity()}>Order by popularity</button>
            </div>           
            
                     
            <table className="table text-left">
                <thead className="bg-info text-white mb-5">
                    <tr>
                    <th scope="col">Picture</th>
                    <th scope="col">Name</th>
                    <th scope="col">Popularity</th> 
                    <th scope="col">Delete</th>                   
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => 
                        <ContactItem 
                                key={contact.id}
                                {...contact} 
                                onClikDelete = {(id) => this.handleDeleteContact(id)}                
                        />
                    )}
                </tbody>
            </table>
            </div>
            </React.Fragment>
        )
    }
}

export default ContactList


