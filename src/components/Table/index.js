import React, { Component } from 'react'
import Contacts from '../../contacts.json'
import './index.css'
import Card from '../Card'

class Table extends Component{
    constructor() {
        super()
        this.state = {
            fiveContacts: Contacts.slice(0, 5)
        }
    }

    randomContact = () =>{
        const indexRandom = Math.floor(Math.random() * (Contacts.length - 0))
        const randomContact = Contacts[indexRandom]
        const addRandom = [...this.state.fiveContacts]
        addRandom.push(randomContact)
        this.setState({fiveContacts: addRandom})
    }

    sortName = () => {
        const contactsCopy = [...this.state.fiveContacts]
        contactsCopy.sort((a, b) => a.name.localeCompare(b.name))
        this.setState({fiveContacts: contactsCopy})
    }

    sortPopularity = () => {
        const contactsCopy = [...this.state.fiveContacts]
        contactsCopy.sort((a, b) => b.popularity - a.popularity)
        this.setState({ fiveContacts: contactsCopy })
    }

    deleteContact = idx => {
        const contactsCopy = [...this.state.fiveContacts]
        contactsCopy.splice(idx, 1)
        this.setState({ fiveContacts: contactsCopy })
        
    }

    render() {
        const { fiveContacts } = this.state //destructuramos el state para no estar poniendo el this.state 
        return (
            <section>
                <button onClick={this.randomContact}>Add Random Contacts</button>
                <button onClick={this.sortName}>Sort by name</button>
                <button onClick={this.sortPopularity}>Sort by Popularity</button>
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
                        {fiveContacts.map((elm, idx) => {
                            const { pictureUrl, name, popularity } = elm
                           
                            return (
                                <Card
                                    key={idx}
                                    pictureUrl={pictureUrl}
                                    name={name}
                                    popularity={popularity}
                                    idx={idx}
                                    onDeleteClick={()=> this.deleteContact(idx)} 
                                />
                            ) 
                        })}
                    </tbody>
                </table>
            </section>
        
        
        )
    }
}

export default Table