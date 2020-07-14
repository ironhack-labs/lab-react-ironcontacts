import React, { Component } from 'react'
import contacts from '../contacts.json'
import "./IronContacts.css"

class IronContacts extends Component {
    constructor() {
        super()
        this.state = {
            contacts: contacts.slice(0, 5)
        }
        this.contacts = contacts

    }

    addContact = () => {
        let addContact = [...this.state.contacts]
        addContact.push(contacts[Math.floor(Math.random() * (this.contacts.length))])
        this.setState({ contacts: addContact })
    }

    sortByName = () => {
        const sortByName = [...this.state.contacts]
        sortByName.sort((a,b) => a.name.localeCompare(b.name))
        this.setState({contacts: sortByName})
    }

    sortByPopularity = () => {
        const sortByPopularity = [...this.state.contacts]
        sortByPopularity.sort((a, b) => b.popularity - a.popularity)
        this.setState({ contacts: sortByPopularity })
    }

    deleteContact= (idx) => {
        const deleteContact = [...this.state.contacts]
        deleteContact.splice(idx, 1)
        this.setState({contacts: deleteContact})
    }

    render() {

       
        console.log(IronContacts);

        return (
            <div className='container'>
                <h1>Contactos</h1>
                <div className='button'>
                    <button className="btn btn-light" onClick={this.addContact}>Agregar Contactos</button>
                    <button className="btn btn-light" onClick={this.sortByName}>Ordenar Contactos</button>
                    <button className="btn btn-light" onClick={this.sortByPopularity}>Popularidad</button>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Picture</th>
                            <th scope="col">Name</th>
                            <th scope="col">Popularity</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.contacts.map((elm, idx) =>
                            <tr key={idx}>
                                <td><img alt={elm.name} src={elm.pictureUrl}></img></td>
                                <td>{elm.name}</td>
                                <td>{elm.popularity.toFixed(2)}</td>
                                <td><button className="btn btn-outline-secondary" onClick={this.deleteContact}>Eliminar contaco</button></td>
                            </tr>
                        )}

                    </tbody>
                </table>

            </div>

        )
    }


}

export default IronContacts