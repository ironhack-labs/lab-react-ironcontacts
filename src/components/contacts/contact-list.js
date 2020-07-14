import React, { Component } from 'react'
import './contact-list.css'
// import ContactCard from './contact-card'
import contactsFromList from './../../contacts.json'
import ContacCard from './contact-card'
class Contact extends Component {
    constructor (){
        super ()
        this.state = {
            contacts: this.slicedContacts,
        }
    }

    slicedContacts = contactsFromList.slice(0, 5)
    sortByPopularity = () => { 
        const newContacts = [...this.state.contacts]
        newContacts.sort((a, b) => { 
            if (a.popularity > b.popularity) { 
                return -1 
            }
            this.setState({contacts: newContacts})
        })
    }

    removeContact = (id) => {
        const newContacts = [...this.state.contacts]
        console.log (newContacts)
        newContacts.splice(id, 1)
        this.setState({ contacts: newContacts })
    }
    
    sortByName = () => { 
        const newContacts = [...this.state.contacts]
        newContacts.sort((a, b) => {
            if (a.name < b.name) {  
                return -1
            }
            this.setState ({contacts: newContacts})
        })
        
    }
    

    randomContac = () => {
        
        let theContact = contactsFromList[Math.floor(Math.random() * contactsFromList.length)]
        const newContacts = [...this.state.contacts]
        newContacts.push (theContact)
        this.setState({ contacts: newContacts})
    
    }
    

    render() {
        return (
            <>
                <article>
                    
                    <button className="btn btn-md btn-dark" onClick={this.randomContac}>añadir contacto</button>
                    <button className="btn btn-md btn-dark" onClick={this.sortByName}>Short by name</button>
                    <button className="btn btn-md btn-dark" onClick={this.sortByPopularity}>Short by popularity</button>
                    
                    {this.state.contacts.map((elm, idx) => <ContacCard removeContact={()=> this.removeContact(elm.id)} {...elm} key={elm.id} />)}
                    
                </article>
            </>
        )
    }
}


export default Contact