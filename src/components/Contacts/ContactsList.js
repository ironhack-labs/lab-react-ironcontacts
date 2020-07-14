import React, { Component } from 'react'
import ContactsCard from './ContactsCard'
import contacts from '../../contacts.json'



class ContactsList extends Component {
    constructor() {
        super()
        this.state = {
            contactsList: contacts.splice(0, 5),
            sortName: false,
            sortPopularity: false
        }
    }



    addRandom = () => {
        let ramdomPick = Math.round(Math.random() * (contacts.length - 1))
        let randomContact = contacts[ramdomPick] //from original contacts array
        let contactsCopy = [...this.state.contactsList] //copy from spliced arr
        contactsCopy.push(randomContact) //adds random pick from original array into spliced arr
        this.setState({ contactsList: contactsCopy })
    }


    sortByName = () => {
        let contactsCopy = [...this.state.contactsList]
        let orderedName = contactsCopy.sort((a, b) => this.state.sortName ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
        this.setState({ contactsList: orderedName, sortName: !this.state.sortName })
    }


    sortByPopularity = () => {
        let contactsCopy = [...this.state.contactsList]
        let orderedPopularity = contactsCopy.sort((a, b) => this.state.sortPopularity ? a.popularity - b.popularity : b.popularity - a.popularity)
        this.setState({ contactsList: orderedPopularity, sortPopularity: !this.state.sortPopularity })
    }



    deleteContact = id => {
        const contactsCopy = [...this.state.contactsList]
        contactsCopy.splice(id, 1) //exactly one occurrence
        this.setState({ contactsList: contactsCopy }) //always set.State after a modification
    }



    render() {

        return (
            <>
                <button onClick={this.addRandom}>Add random contact</button>
                <button onClick={this.sortByName}>Sort by name</button>
                <button onClick={this.sortByPopularity}>Sort by popularity</button>
                <table className="contact-table">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contactsList.map(elm => <ContactsCard key={elm.id} name={elm.name} pictureUrl={elm.pictureUrl} popularity={elm.popularity} removeContact={this.deleteContact} />)}
                    </tbody>
                </table>
            </>

        )
    }
}



export default ContactsList