import React, { Component } from 'react'


import contacts from '../../contacts.json'
import './Contacts.css'


class Contacts extends Component {
    constructor() {
        super()
        this.state = {contacts: contacts.slice(0, 5)}
        
    } 
    
    addRandomContact = () => {
        const randomAleatory = Math.floor(Math.random() * contacts.length)
        const randomContact = contacts[randomAleatory]
        const newRandomContact = [...this.state.contacts]

        newRandomContact.push(randomContact);

        this.setState({contacts: newRandomContact})
    }

    sortByName = () => {
        const orderByName = [...this.state.contacts].sort((a, b) => a.name.localeCompare(b.name))

    this.setState({contacts: orderByName})
    }

    sortByPopularity = () => {
        const orderByPopularity = [...this.state.contacts].sort((a, b) => (b.popularity - a.popularity)
    )
    this.setState({contacts: orderByPopularity})
    }

    deleteContact = id => {
        const contactsCopy = [...this.state.contacts]
        contactsCopy.splice(id, 1)
        this.setState({contacts: contactsCopy})
        
    }
    
    render() {
        return (
         <>
            <section>
                    <h2>IronContacts</h2>
                    <button onClick={this.addRandomContact}>Add Random Contact</button>
                    <button onClick={this.sortByName} >Sort by name</button>
                    <button onClick={this.sortByPopularity} >Sort by Popularity</button>
                    
            </section>

            <section>
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
                        {this.state.contacts.map((elm, idx) => (
                            <tr key={idx}>
                                <th><img src={elm.pictureUrl} alt= "Contact" /></th>
                                <th> {elm.name}</th>
                                <th> {elm.popularity.toFixed(2)}</th>
                                <th><button onClick={this.deleteContact} >Delete Contact</button></th>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </section>
        </>
    )
}

}

export default Contacts