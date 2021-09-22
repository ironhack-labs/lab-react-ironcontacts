import contacts from "../../contacts.json";
import React from 'react'
import './ContactList.css'
import ContactItem from "../ContactItem/ContactItem";

class ContactsList extends React.Component {
    constructor() {
        super()
        this.state = {
            contactsList: contacts,
            newContacts: []
        }
    }
    
    componentDidMount() {
        this.takeFive()
    }

    takeFive = () => {
        const arr = []
        for (let i = 0; i < 5; i++){
            arr.push(contacts[i])
        }
        this.setState({
            ...this.state, 
            newContacts: arr
        })
    }

    displayContacts = () => {
        return (
            this.state.newContacts.map((contact, idx) => {
                return (
                <ContactItem
                {...contact}
                key={`${idx}-${contact.name}`}
                deleteContact={(id) => this.deleteContact(id)}  
                />
                )
            })
        )
    }

    randomNum = () => Math.floor(Math.random() * this.state.contactsList.length)

    addNewContact = () => {
        const random = this.randomNum()
        const contactsCopy = [...this.state.newContacts]
        contactsCopy.push(this.state.contactsList[random])
        this.state.contactsList.splice(random, 1)
        
        this.setState({
            ...this.state,
            newContacts: contactsCopy
        })
    }

    sortByName = () => {
    const contactsCopy = [...this.state.newContacts]
    contactsCopy.sort((contact1, contact2) => contact1.name.localeCompare(contact2.name))

    this.setState({
            ...this.state,
            newContacts: contactsCopy
        })
    }

    sortByPopularity = () => {
    const contactsCopy = [...this.state.newContacts]

     this.setState({
            ...this.state,
            newContacts: contactsCopy.sort((contact1, contact2) => contact2.popularity - contact1.popularity)
        })
    }
    
    deleteContact = (id) => {
        this.setState({
            ...this.state,
            newContacts: this.state.newContacts.filter(contact => contact.id !== id)
        })
    }

   render(){
       return (
           <div className='first-row' >
                <button  className='btn' onClick={() => this.addNewContact()}>Add Contact</button>
                <button  className='btn' onClick={() => this.sortByName()}>Sort by Name</button>
                <button  className='btn' onClick={() => this.sortByPopularity()}>Sort by Popularity</button>
                <table className='table'>
                <thead className='head'>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        {this.displayContacts()}
                </tbody>
                </table>
           </div>
    )
   }
}

export default ContactsList