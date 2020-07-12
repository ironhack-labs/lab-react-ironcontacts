import React, { Component } from 'react'
import contacts from '../contacts.json';
import Button from './Button';
import './Table.css'


class Table extends Component {
    constructor(props) {
         super(props)
         this.allContacts = JSON.parse(JSON.stringify(contacts));
        const firstFiveContacts = this.allContacts.splice(0, 5)
         this.state = {
           contacts: firstFiveContacts,
         };
        
}

    contactList() {
        return this.state.contacts.map(contact => {
            return (
                <tr key={contact.id}>
                    <td> <img className="contactPic" src={contact.pictureUrl} alt=""/></td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity.toFixed(2)}</td>
                    <td><Button key={contact.id} clickEvent={() => this.deleteContact(contact.id)} clase="btn btn-danger">Delete</Button></td>
                </tr>
            )
        })
    }

    addRandom() {
        const allContacts = this.allContacts;
        const contactsCopy = [...this.state.contacts]
        const getRandom = () => {
            for (let i = 0; i < contactsCopy.length; i++){
                const random = allContacts[Math.floor(Math.random() * allContacts.length)]
                console.log(random.id)
                const isEqual = contactsCopy.find(elem => elem.id === random.id)
                if(!isEqual){
                    return random
                }
            }
        }
        const randomElement = contactsCopy.length > 0 ? getRandom() : allContacts[Math.floor(Math.random() * allContacts.length)]
        contactsCopy.push(randomElement)
        const randomIndex = contactsCopy.findIndex(contact => contact.id === randomElement.id)
        this.allContacts.splice(randomIndex,1)
        this.setState({
            contacts: contactsCopy
        })
    }

    sortByName() {
        const contactsCopy = [...this.state.contacts]
        const sortedArray = contactsCopy.sort((a,b) => a.name.localeCompare(b.name))
        this.setState({
            contacts: sortedArray
        })
    }

    sortByPopularity() {
        const contactsCopy = [...this.state.contacts]
        const sortedArray = contactsCopy.sort((a, b) => (a.popularity < b.popularity) ? 1 : ((b.popularity < a.popularity) ? -1 : 0))
        this.setState({
            contacts: sortedArray
        })
    }

    deleteContact(id) {
        const contactsCopy = [...this.state.contacts]
        const contactIndex = contactsCopy.findIndex(contact => contact.id === id)
        const deletedContact = contactsCopy.splice(contactIndex, 1)
        this.allContacts.push(deletedContact[0])
        console.log(this.allContacts)
        this.setState({
            contacts: contactsCopy
        })
    }



    render() {
        return (
            <div>
                <div className="text-center mt-4">
                    <Button clickEvent={() => this.addRandom()} clase="btn btn-dark mr-2">Add Random Contact</Button>
                    <Button clickEvent={() => this.sortByName()} clase="btn btn-secondary mr-2">Sort by name</Button>
                    <Button clickEvent={() => this.sortByPopularity()} clase="btn btn-info">Sort by popularity</Button>
                </div>
                <table className="table table-hover mt-3 border">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Picture</th>
                            <th scope="col">Name</th>
                            <th scope="col">Popularity</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.contactList()}
                    </tbody>
                </table>
            </div>
            
        )
    }
}
export default Table