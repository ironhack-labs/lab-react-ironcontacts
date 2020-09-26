import { render } from '@testing-library/react'
import React from 'react'
import contacts from '../contacts.json'
import RandContButton from './RandContButton'
import RemoveContact from './RemoveContact'
import SortContacts from './SortContacts'
import SortPopContacts from './SortPopContacts'

export default class ContactList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            onlyFiveCont: contacts.slice(0, 5),
            contactList: contacts
        }

    }

    handleRandomUser() {

        const randomNum = Math.floor(Math.random() * contacts.length)
        const newContact = [...this.state.onlyFiveCont, this.state.contactList[randomNum]]
        this.setState({
            onlyFiveCont: newContact
        })
    }

    handleSortContacts() {

        const sortContacts = this.state.onlyFiveCont.sort((a, b) => {
            if (a.name < b.name) { return -1 }
            if (a.name > b.name) { return 1 }
            return 0
        })

        this.setState({
            onlyFiveCont: sortContacts
        })
    }

    handleSortPop() {

        const sortContacts = this.state.onlyFiveCont.sort((a, b) => {
            if (a.popularity < b.popularity) { return 1 }
            if (a.popularity > b.popularity) { return -1 }
            return 0
        })

        this.setState({
            onlyFiveCont: sortContacts
        })
    }

    RemoveCont(contact) {

        this.setState({
            onlyFiveCont: this.state.onlyFiveCont.filter(f => f !== contact)
        })
    }

    render() {
        return (
            <div className="App">
                <h1>IronContacts</h1>
                <RandContButton RandomClick={this.handleRandomUser.bind(this)} />
                <SortContacts SortClick={this.handleSortContacts.bind(this)} />
                <SortPopContacts SortPopClick={this.handleSortPop.bind(this)} />
                <div className="container">
                    <table>
                        <tr>
                            <th><b>Picture</b></th>
                            <th><b>Name</b></th>
                            <th><b>Popularity</b></th>
                        </tr>
                        {this.state.onlyFiveCont.map(contact => {
                            return (
                                <tr>
                                    <th><img src={contact.pictureUrl} style={{ width: 80 }} /></th>
                                    <th>{contact.name}</th>
                                    <th>{contact.popularity.toFixed(2)}</th>
                                    <th><RemoveContact RemoveContClick={() => this.RemoveCont(contact)} /></th>
                                </tr>
                            )
                        })}

                    </table>
                </div>
            </div>
        )
    }
}