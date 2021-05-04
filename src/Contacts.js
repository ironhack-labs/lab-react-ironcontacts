import './Contacts.css'

import { Component } from 'react'
import contacts from './contacts.json'

class Contacts extends Component {

    constructor() {
        super()
        this.state = {
            contacts: contacts,
            filteredContacts: contacts.slice(0, 5)
        }
    }

    randomSelect = () => {
        const newRandomContact = contacts[Math.floor(Math.random() * contacts.length)]
        //copiamos
        const copy = [...this.state.filteredContacts]
        //push
        copy.push(newRandomContact)
        //modificar state
        this.setState({
            filteredContacts: copy
        })
        //this.setState()
    }

    sortByName = () => {

        const sort = this.state.filteredContacts
            .sort(function (a, b) {
                if (a.name < b.name) { return -1 }
                if (a.name > b.name) { return 1 }
                return 0
            })

        this.setState({
            filteredContacts: sort
        })

    }

    sortByPopularity = () => {

        const sort = this.state.filteredContacts
            .sort(function (a, b) {
                if (a.popularity > b.popularity) { return -1 }
                if (a.popularity < b.popularity) { return 1 }
                return 0
            })

        this.setState({
            filteredContacts: sort
        })

    }

    deleteMovie(idx) {
        this.setState({
            filteredContacts: this.state.filteredContacts.filter(( elm , index) => index !== idx)
        })
    }

    render() {
        return (

            <section>

                <h1>Contacts</h1>

                <button onClick={this.randomSelect}>
                    Add Random Contact
                </button>
                <button onClick={this.sortByName}>
                    Sort by name
                </button>
                <button onClick={this.sortByPopularity}>
                    Sort by popularity
                </button>

                {
                    this.state.filteredContacts.map((elm, idx) => <table key={idx}>
                        <thead>
                            <tr>
                                <th>Picture</th>
                                <th>Name</th>
                                <th>Popularity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='data'>
                                <td><img src={elm.pictureUrl}></img></td>
                                <td>{elm.name}</td>
                                <td>{elm.popularity}</td>
                                <button onClick={() => this.deleteMovie(idx)}>Delete</button>

                            </tr>
                        </tbody>
                    </table>)
                }

            </section>

        )
    }
}


export default Contacts