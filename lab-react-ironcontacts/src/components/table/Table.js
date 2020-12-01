import React, { Component } from 'react'
import OneElemTable from './OneElemTable'
import contacts from '../../contacts.json';
import './Table.css'

class ContactList extends Component{
    constructor() {
        super()
        this.state = {
            contacts: contacts.slice(0,5),
        }
    }
    randomContact = () => {
        //alert('hey')
        
        const newNumber = contacts[Math.floor(Math.random() * contacts.length)]
        //console.log(newNumber)
        const contactNew = this.state.contacts
        contactNew.push(newNumber)
        //console.log(contactNew)
        this.setState({
             contacts: contactNew
         })
      
    }


        sortPopularity = () => {
        this.state.contacts.sort((a, b) => {
            if (a.popularity < b.popularity) {
                return 1
            } else if (a.popularity > b.popularity) {
                return -1
            } else {
                return 0
            }
        })
            console.log(this.state.contacts)
            this.setState({
             contacts: this.state.contacts
         })
    }

  
sortName = () => {
        this.state.contacts.sort((a, b) => {
            if (a.name < b.name) {
                return -1
            } else if (a.name > b.name) {
                return 1
            } else {
                return 0
            }
        
        })
    console.log(this.state.contacts)
    this.setState({
            contacts: this.state.contacts
        }) 
}
    
    deleteContact = contactId=> {
        //  alert ('hey')
        this.setState({
            contacts: this.state.contacts.filter(elm => elm.id !== contactId)
        })
    }

    render() {
        return (
            <>
                <section className="buttons">
                <button onClick={() => { this.sortName() }}>Sort by name</button>
                <button onClick={ () => { this.sortPopularity() }}>Sort by popularity</button>
                <button onClick={() => { this.randomContact() }}> Add Random Contact </button>
                </section>
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
                        {this.state.contacts.map(elm => <OneElemTable key={elm.id} deleteContact={()=>this.deleteContact(elm.id)} pictureUrl={elm.pictureUrl} name={elm.name} popularity={elm.popularity}/>)}
                    </tbody>
                </table>  
                
            </>
        
    )
}


}
export default ContactList