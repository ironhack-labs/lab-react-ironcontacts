import { Component } from 'react'
import contacts from '../contacts.json'
import './ContactsTable.css'

class ContactsTable extends Component {
    constructor() {
        super()
        this.state = {
            contactsArr: contacts.slice(0, 5),
        }
    }

    addRandomContact() {

        const noDupsContacts = contacts.filter(elm => {
            const contactsNames = this.state.contactsArr.map(elm => elm.name)
            if (!contactsNames.includes(elm.name)) {
                return elm
            } 
        })

        const randomContact = noDupsContacts[Math.floor((Math.random()*noDupsContacts.length))]
        const contactsArrCopy = [...this.state.contactsArr]

        contactsArrCopy.push(randomContact)

        this.setState({
            contactsArr: contactsArrCopy
        })
        
    }

    sortByName() {

        const contactsArrCopy = [...this.state.contactsArr]

        contactsArrCopy.sort((a, b) => {

            const nameA = a.name.toUpperCase()
            const nameB = b.name.toUpperCase()

            if (nameA < nameB) {
                return -1
            }
            else {return 1}
        })

        this.setState({
            contactsArr: contactsArrCopy
        })
    }

    sortByPopularity(){

        const contactsArrCopy = [...this.state.contactsArr]

        contactsArrCopy.sort((a, b) => {
            return b.popularity - a.popularity
        })

        this.setState({
            contactsArr: contactsArrCopy
        })

    }

    deleteContact (name) {

        this.setState ({
            contactsArr: this.state.contactsArr.filter(elm => elm.name !== name)
        })

    }

    render() {
        
        return (
            <>
                <button onClick={() => this.addRandomContact()}>Add Random Contact</button>
                <button onClick = {() => this.sortByName()}>Sort by name</button>
                <button onClick={() => this.sortByPopularity()}>Sort by popularity</button>

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
                        {this.state.contactsArr.map((elm, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>
                                    <img src={elm.pictureUrl} alt={elm.name} />
                                    </td>
                                    <td>{elm.name}</td>
                                    <td>{elm.popularity.toFixed(2)}</td>
                                    <td><button onClick={() => this.deleteContact(elm.name)}>Delete</button></td>
                                </tr>
                            )
                            })
                            }                    
                    </tbody>

                </table>
            </>
        )
    }
}

export default ContactsTable