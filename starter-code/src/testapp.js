import React, { Component } from 'react'
import allContacts from './contacts.json'
import Contact from './components/Contact'

export default class App extends Component {
    state={
        contacts: allContacts.slice(0, 5)
    }

    //Usamos spread para hacer una copia del arreglo anterior
    //Creamos el metodo para agregar contactos
    addContact = () => {
        this.setState({
            contacts: [...this.state.contacts, allContacts[this.state.contacts.length]]
        })
    }

    //Creamos metodo para sortear contactos
    sortByName = () => {
        this.setState({
            contacts: this.state.contacts.sort((a, b) => (a.name < b.name ? -1 : 1))
        })
    }

    //Metodo para sorterar por popularidad ascendente
    sortByPopularity = () => {
        this.setState({
            contacts: this.state.contacts.sort((a, b) => (a.popularity < b.popularity ? 1 : -1))
        })
    }

    //Metodo para remover contactos
    deleteContact = (name) => {
        this.setState({
            contacts: this.state.contacts.filter(contact => contact.name !== name)
        })
    }

    deleteAll = () => {
        this.setState({
           contacts: []
        })
    }


    render() {
        //La destructuracion debe ser dentro del metodo
        const { contacts } = this.state
        return (
<div className="container">
    <div className="columns is-centered">
    <div>
                <h1 className='is-size-2 has-text-centered	'>IronContacts</h1>
                <div>
                    {/* Recuerda siempre poner el callback */}
                    <button className="button is-primary" onClick={() => this.addContact()}>Add One</button>
                    <button className="button is-primary" onClick={() => this.sortByName()}>Sort By Name</button>
                    <button className="button is-primary" onClick={() => this.sortByPopularity()}>Sort By Popularity</button>
                    <button className="button is-danger" onClick={() => this.deleteAll()}>Delete All</button>
                </div>
                {/* Table */}
                <table className='table is-fullwidth'>
                    <thead>
                        <tr>
                            <th className='has-text-centered'>Picture</th>
                            <th className='has-text-centered'>Name</th>
                            <th className='has-text-centered'>Popularity</th>
                            <th className='has-text-centered'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                         {contacts.map((contact, i) => (<Contact key={i} contactInfo={contact} deleteOne={this.deleteContact}/>))}
                    </tbody>
                </table>
            </div>
    </div>
</div>
        )
    }
}