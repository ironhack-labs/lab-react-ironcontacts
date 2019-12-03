import React, { Component } from "react";
import contacts from '../contacts.json'
import ContactCard from './contactCard.js'


class ContactList extends Component {
    constructor() {
        super()
        this.state = {
            contacts: contacts.slice(0, 5)
        }
    }

    randomClickHandler = () => {

        const copyContacts = [...this.state.contacts]
        let randomContact = contacts[Math.floor(Math.random() * contacts.length)]
        copyContacts.push(randomContact)

        this.setState ({contacts : copyContacts})
    }

    sortNameClickHandler = () => {
        const copyContacts = [...this.state.contacts]
        copyContacts.sort((a,b) => a.name.localeCompare(b.name))
       
        this.setState({ contacts: copyContacts })

    }

    sortPopularityClickHandler = () => {
        const copyContacts = [...this.state.contacts]
        copyContacts.sort(function (a, b) {
            return b.popularity - a.popularity
        });
        this.setState({ contacts: copyContacts })
    }

    buttonDelete = id => {
        const copyContacts = [...this.state.contacts] 
        copyContacts.splice(id, 1) //se pasan dos parámetros: borrar por id y la cantidad

        this.setState({ contacts: copyContacts })

    }



    render() {
        return (
            <>
                <div>
                        <button onClick={this.randomClickHandler }>Add random contacts</button>
                        <button onClick={this.sortNameClickHandler}>Sort by name</button>
                        <button onClick={this.sortPopularityClickHandler}>Sort by popularity</button>
                </div>
                    <table>
                        <thead>
                            <th><strong>Picture</strong></th>
                            <th><strong>Name</strong></th>
                            <th><strong>Popularity</strong></th>
                        </thead>

                        <tbody>
                            {this.state.contacts.map((contact, idx) => {
                                return (
                                <ContactCard
                                    key={idx}
                                    pictureUrl={contact.pictureUrl}
                                    name={contact.name}
                                    popularity={contact.popularity} 
                                    buttonDelete={()=> this.buttonDelete(idx)} />)
                            })}
                        </tbody>
                    </table>
            </>
        )}

    
}

export default ContactList;
