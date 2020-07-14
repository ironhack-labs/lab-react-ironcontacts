import React, {Component} from 'react'

import contacts from '../../contacts.json'
import './Actor-list.css'


class ActorsList extends Component {

    constructor(){
        super()
        this.state = {

            allContacts: contacts,
            contacts: contacts.slice(0,5)

        }
    }

    addActor = () => {
        const contactsCopy = [...this.state.contacts]
        let index = parseInt(Math.random()*this.state.allContacts.length)
        let randomContact = this.state.allContacts[index]
        contactsCopy.push(randomContact)
        this.setState({contacts: contactsCopy})
    }

    sortName = () => {
        const contactsCopy = [...this.state.contacts]
        contactsCopy.sort((a, b) => a.name.localeCompare(b.name))
        this.setState({contacts: contactsCopy})
    }

    sortPopularity = () => {
        const contactsCopy = [...this.state.contacts]
        contactsCopy.sort((a, b) => b.popularity-a.popularity)
        this.setState({contacts: contactsCopy})
    }

    deleteActor = (idx) => {
        const contactsCopy = [...this.state.contacts]
        contactsCopy.splice(idx, 1)
        this.setState({contacts: contactsCopy})
    }



    render() {
        return (

        <main>
            <button onClick ={this.addActor}>Add Random Contact</button>
            <button onClick ={this.sortName}>Sort by name</button>
            <button onClick ={this.sortPopularity}>Sort by popularity</button>
            <table className="table table-borderless">
            <thead>
                <tr>
                <th scope="col">Picture</th>
                <th scope="col">Name</th>
                <th scope="col">Popularity</th>
                </tr>
            </thead>
            <tbody>
                {this.state.contacts.map((actor, idx) => 
                <tr key={idx}>
                    <td><img className="picture" alt={actor.name} src={actor.pictureUrl}/></td>
                    <td>{actor.name}</td>
                    <td>{actor.popularity.toFixed(2)}</td>
                    <td><button onClick ={() => this.deleteActor(idx)}>Delete</button></td>
                </tr>
                )}
            </tbody>
            </table>
        </main>
            
        )
    }
}

export default ActorsList