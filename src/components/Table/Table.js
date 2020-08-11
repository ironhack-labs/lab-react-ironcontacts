import React, {Component} from 'react'

import contacts from '../../contacts.json'

import './table.css'


class Table extends Component {
    constructor (){
        super ()
        this.state = {
            contactsFull: contacts,
            contacts: contacts.slice(0, 5)
        }
    }

    randomActor = () => {
        const copyContacts = [...this.state.contacts]
        let index = parseInt(Math.random(this.state.contactsFull.length)*this.state.contactsFull.length)
        let randomActor = this.state.contactsFull[index]
        copyContacts.push(randomActor)
        this.setState({contacts: copyContacts})
    }

    sortByName = () => {
        const copyContacts = [...this.state.contacts]
        copyContacts.sort((a, b) => a.name.localeCompare(b.name))
        this.setState({contacts: copyContacts})
    }

    sortByPopularity = () => {
        const copyContacts = [...this.state.contacts]
        copyContacts.sort((a, b) => b.popularity - a.popularity )
        this.setState({contacts: copyContacts})
    }

    deleteActor = (idx) => {
        const copyContacts = [...this.state.contacts]
        copyContacts.splice(idx, 1)
        this.setState({contacts: copyContacts})
    }

    render () {
        return ( 
        <div className='container'>
            <button onClick={this.randomActor}>Add Random Contact</button>
            <button onClick={this.sortByName}>Sort By Name</button>
            <button onClick={this.sortByPopularity}>Sort By Popularity</button>
            <table className="table">
                <thead className='thead-dark'>
                    <tr>
                    <th scope="col"></th>
                    <th scope="col">Picture</th>
                    <th scope="col">Name</th>
                    <th scope="col">Popularity</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {this.state.contacts.map((actor, idx) => 
                        <tr key={idx}>
                            <th scope="row"></th>
                            <td><img src={actor.pictureUrl} alt={actor.name}></img></td>
                            <td>{actor.name}</td>
                            <td>{actor.popularity.toFixed(2)}</td>
                            <td><button onClick={()=>this.deleteActor({idx})}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

        )
    }
}

export default Table