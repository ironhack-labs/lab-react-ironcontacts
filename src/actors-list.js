import React, { Component } from 'react'
import ActorCard from './ActorCard';
import contacts from "./contacts.json";




class ActorsList extends Component {
    constructor() {
        super()
        //1. Instrucciones lista estática: montamos un estado con los datos
        this.state = {
            contacts: contacts.slice(0, 5)
        }


    }

    addRandonActor() {
        const arr = [...this.state.contacts]
        arr.push(contacts[Math.floor(Math.random() * contacts.length)])
        this.setState({
            contacts: arr

            /*Primero del array quiero sacar los elementos a partir de la length 5-- y hacer una copia de ese resto
             let copyActors = contacts.slice(6, 53) */
        })

    }

    orderedByName() {
        const arr = [...this.state.contacts]
        
        arr.sort(function (a, b) {
            if (a.name < b.name) { return -1 }
            if (a.name > b.name) { return 1 }
            return 0
        })
        
        
        this.setState({
            contacts: arr
        })
    }

    orderedByPopularity() {
        const arr = [...this.state.contacts]

        arr.sort(function (a, b) {
            if (a.popularity < b.popularity) { return 1 }
            if (a.popularity > b.popularity) { return -1 }
            return 0
        })

        this.setState({
            contacts: arr
        })
    }

    removeActor(contactId) {
        const newContacts = this.state.contacts.filter(contact => contact.id !== contactId)

        this.setState({
            contacts: newContacts
        })



    }

    render() {
        //2. Instrucciones lista estática: Mapeamos la lista desde el estado, 
        //pasandole las props que necesite
        return (
            <>
                <button className="button-add" onClick={() => this.orderedByPopularity()}>
                    sort by popularity
                </button>
                
                <button className="button-add" onClick={() => this.orderedByName()}>
                    sort by name
                </button>
                
                
                
                <button className="button-add" onClick={() => this.addRandonActor()}>
                    Add random Contact
                </button>

                <table>
                    <thead>
                        <tr>
                            <th>picture</th>
                            <th>name</th>
                            <th>popularity</th>
                        </tr>

                    </thead>
                    <tbody>
                        {this.state.contacts.map((eachContact) => (
                            <ActorCard key={eachContact.id} pictureUrl={eachContact.pictureUrl} name={eachContact.name} popularity={eachContact.popularity.toFixed(2)} onClick={() => this.removeActor()} />
                        ))}
                    </tbody>
                </table>
            </>
        )
    }

}

export default ActorsList