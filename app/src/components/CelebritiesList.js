import React, { Component } from 'react'
import contactsFromJson from '../contacts.json'
import 'bulma/css/bulma.css'
import Tr from './table-row/TableRow'
import './CelebritiesList.css'

class Celebrity extends Component {

    constructor() {
        super()
        this.state = {
            contacts: [...contactsFromJson].slice(0, 5)
        }
    }

    addRdm = () => {

        const rdmIdx = parseInt(Math.random() * contactsFromJson.length)
        this.state.contacts.push(contactsFromJson[rdmIdx])
        this.setState({
            contacts: this.state.contacts
        })
        console.log(this.state.contacts)
    }

    sortByName = () => {

        const contactsCopy = this.state.contacts.sort((a, b) => a.name > b.name ? 1 : -1)
        console.log(contactsCopy)
        this.setState({
            contacts: contactsCopy
        })
    }

    sortByPop = () => {

        const contactsCopy = this.state.contacts.sort((a, b) => b.popularity - a.popularity)
        console.log(contactsCopy)
        this.setState({
            contacts: contactsCopy
        })
    }

    removeContact = contactIdx => {
        this.setState({
            contacts: this.state.contacts.filter(elm => elm !== this.state.contacts[contactIdx])
        })
    }

    render() {

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th><abbr title="picture">Picture</abbr></th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th><button className='button is-primary is-small' onClick={this.addRdm}>Add Contact</button></th>
                        <th><button className='button is-info is-small' onClick={this.sortByName}>Sort by name</button></th>
                        <th><button className='button is-info is-small' onClick={this.sortByPop}>Sort by popularity</button></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.contacts.map((elm, idx) => <Tr key={idx} pic={elm.pictureUrl} remove={() => this.removeContact(idx)} name={elm.name} pop={elm.popularity} />)}
                </tbody>
            </table>
        )
    }
}

export default Celebrity

