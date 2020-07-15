import React, { Component } from 'react'
import './Celebrities.css'
import contacts from '../../contacts.json';

class Celebrities extends Component{

    constructor(){
        super()
        this.state = {
            contacts : contacts.slice(0 , 5)
        }
        this.contacts = contacts
    }
    
    addContact = () => {
        let addContact = [...this.state.contacts]
        addContact.push(contacts[Math.floor(Math.random() * (this.contacts.length))])
        this.setState({ contacts: addContact })
    }

    sortName = () => {
        const sortName = [...this.state.contacts]
        sortName.sort((a,b) => a.name.localeCompare(b.name))
        this.setState({contacts: sortName})
    }

    sortPopularity = () => {
        const sortPopularity = [...this.state.contacts]
        sortPopularity.sort((a, b) => b.popularity - a.popularity)
        this.setState({ contacts: sortPopularity })
    }

    removeContact= (idx) => {
        const removeContact = [...this.state.contacts]
        removeContact.splice(idx, 1)
        this.setState({contacts: removeContact})
    }

    render(){
        return(
            <>
                <div>
                    <button onClick = {this.addContact}>Add Random Contact</button>
                    <button onClick = {this.sortName}>Sort by name</button>
                    <button onClick = {this.sortPopularity}>Sort by popularity</button>

                </div>
                <table>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularuity</th>
                        <th>Action</th>
                    </tr>

                    {this.state.contacts.map((elm, idx) =>
                    <tr key={idx}>
                        <td><img alt={elm.name} src={elm.pictureUrl} /></td>
                        <td>{elm.name}</td>
                        <td>{elm.popularity.toFixed(2)}</td>
                        <td><button onClick = {() => this.removeContact(idx)}>Delete</button></td>
                    </tr>
                )}
            </table>
            </>
        )
    }
}


export default Celebrities