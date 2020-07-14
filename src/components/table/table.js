import React, { Component } from 'react'

import contacts from '../../contacts.json'
import './table.css'

class Table extends Component {

    constructor() {
        super()
        this.state = {
            contacts, 
            contactsNumber: contacts.slice(0,5)
        }
    }

    addRandomContact = () => {

        const arrayContacts = [...this.state.contactsNumber]
        let index = parseInt(Math.random()*this.state.contacts.length)

        let randomContact = this.state.contacts[index]
        arrayContacts.push(randomContact)

        this.setState({contactsNumber: arrayContacts})
    } 

    sortByName = () => {

        const arrayContacts = [...this.state.contactsNumber]
        arrayContacts.sort((a,b) => a.name.localeCompare(b.name))

        this.setState({contactsNumber: arrayContacts})
    }

    sortByPopularity = () => {

        const arrayContacts = [...this.state.contactsNumber]
        arrayContacts.sort((a,b) => b.popularity - a.popularity)

        this.setState({contactsNumber: arrayContacts})
    }

    removeContacts = idx => {

        const arrayContacts = [...this.state.contactsNumber]
        arrayContacts.splice(idx, 1)
        this.setState({contactsNumber: arrayContacts})

    }

    

    render() {

        return(

            <div className = "container">
                <button onClick = {this.addRandomContact}>Add Random Contact</button>
                <button onClick = {this.sortByName}>Sort by Name</button>
                <button onClick = {this.sortByPopularity}>Sort by Popularity</button>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Picture</th>
                            <th scope="col">Name</th>
                            <th scope="col">Popularity</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contactsNumber.map((elm, idx) => 
                            <tr key = {idx}>
                                <td><img className = "imageSize" src = {elm.pictureUrl} alt = {elm.name}></img></td>
                                <td>{elm.name}</td>
                                <td>{elm.popularity.toFixed(2)}</td>
                                <td><button onClick = {() => this.removeContacts(idx)}>Delete</button></td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        
        )
    }
}

export default Table