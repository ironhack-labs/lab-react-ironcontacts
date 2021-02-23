import './AllContacts.css'
import { Component } from 'react'

import ContactTable from '../contact-table/ContactTable'
import contacts from './../../contacts.json'

class AllContacts extends Component {
    constructor() {
        super()
        this.state = {
            allContacts: contacts,
            firstContacts: contacts.filter((contact, idx) => idx < 5)
        }
    }

    addRandom() {
        const contact = this.state.allContacts[Math.floor(Math.random() * (this.state.allContacts.length -5 + 1)) + 5]

        const firstContactsCopy = [...this.state.firstContacts]
        firstContactsCopy.push(contact)

        this.setState({
            firstContacts: firstContactsCopy
        })
    }

    sortByName() {
        const orderByName = this.state.firstContacts
        orderByName.sort((a, b) => ( a.name < b.name ) ? -1 : ( a.name > b.name ? 1 : 0 ))

        this.setState({
            firstContacts: orderByName
        })
    }

    sortByPopularity() {
        const orderByPopularity = this.state.firstContacts
        orderByPopularity.sort((a, b) => (a.popularity < b.popularity) ? 1 : (a.popularity > b.popularity ? -1 : 0))

        this.setState({
            firstContacts: orderByPopularity
        })
    }

    render() {
        const { firstContacts } = this.state

        return(
            <>
                <h1>IronContacts</h1>
                <div>
                <table className="contacts-table">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                    </thead>
                    {firstContacts.map( (elm) => <ContactTable  {...elm} key={elm.id}/>)}
                </table>
                <button onClick={() => this.addRandom()}>Add random contact</button>
                <button onClick={() => this.sortByName()}>Sort by Name</button>
                <button onClick={() => this.sortByPopularity()}>Sort by Popularity</button>
                </div>
            </>
        )
    }
}

export default AllContacts