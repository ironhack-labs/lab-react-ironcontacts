import React, { Component } from 'react'
import Contacts from '../contacts.json'
import UserTable from '../Contacts/table'



class List extends Component {

    constructor() {
        super()
        this.state = {
            contacts: Contacts,
            fiveFirtContact: Contacts.slice(0, 5)
        }
    }

    pushRandomUser = () => {
        let contactRandom = this.state.contacts[Math.floor(Math.random() * this.state.contacts.length)]
        this.setState({
            fiveFirtContact: [...this.state.fiveFirtContact, contactRandom]

        })
    }

    sortByName = () => {
        let sortByName = this.state.fiveFirtContact.sort(((a, b) => a.name > b.name ? 1 : -1))
        console.log(sortByName)
        this.setState({
            fiveFirtContact: sortByName
        })
    }

    sortByPopularity = () => {
        let sortByPopularity = this.state.fiveFirtContact.sort(((a, b) => a.popularity > b.popularity ? 1 : -1))
        this.setState({
            fiveFirtContact: sortByPopularity
        })
    }

    remove = contactID => {
        this.setState({
            fiveFirtContact: this.state.fiveFirtContact.filter(elm => elm.id != contactID)
        })
    }

    render() {

        return (

            <>
                <h2> IronContacts</h2>

                <button onClick={this.pushRandomUser}>Add Random Contact</button>
                <button onClick={this.sortByName}>Sort by name</button>
                <button onClick={this.sortByPopularity}>Sort by popularity</button>

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
                        {this.state.fiveFirtContact.map(elm => < UserTable key={elm.id} {...elm} remove={() => this.remove(elm.id)} />)}

                    </tbody>

                </table>
            </>

        )
    }
}




export default List
