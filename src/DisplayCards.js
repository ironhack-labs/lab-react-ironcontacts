import { Component } from "react";
import ContactCard from "./ContactCard";
import contacts from './contacts.json'
import AddContactButton from './AddContactButton';

import './DisplayCards.css'
import { randomNumberGenerator, compareStrings } from './utils'

class DisplayCards extends Component {
    constructor() {
        super()
        this.state = {
            allContacts: contacts,
            choosedContacts: contacts.filter((el, idx) => idx < 5)
        }
    }

    addRandomContact = () => {
        const choosedContactsIds = this.state.choosedContacts.map(elm => elm.id)
        const unusedContacts = this.state.allContacts.filter(elm => !choosedContactsIds.includes(elm.id))
        const unusedContactsNumber = unusedContacts.length
        const randomIndex = randomNumberGenerator(0, unusedContactsNumber)
        let temp = []
        temp = [...this.state.choosedContacts]
        temp.push(unusedContacts[randomIndex])
        this.setState({
            choosedContacts: temp
        })
    }

    sortByName = () => {
        let temp = []
        temp = [...this.state.choosedContacts]
        temp.sort((a, b) => compareStrings(a.name, b.name))
        this.setState({
            choosedContacts: temp
        })
    }

    sortByPopularity = () => {
        let temp = []
        temp = [...this.state.choosedContacts]
        temp.sort((a, b) => b.popularity - a.popularity)
        this.setState({
            choosedContacts: temp
        })
    }

    removeContact = contactId => {
        this.setState({
            choosedContacts: this.state.choosedContacts.filter(elm => elm.id !== contactId)
        })
    }

    render() {
        // const choosedContacts = this.state.allContacts.filter((el, idx) => idx < 5)

        return (
            <>
                <div className="filterArea">
                    <AddContactButton className="filterAreaButton" buttonAction='Add Random Contact' addContact={() => this.addRandomContact()} />
                    <AddContactButton className="filterAreaButton" buttonAction='Sort By Name' addContact={() => this.sortByName()} />
                    <AddContactButton className="filterAreaButton" buttonAction='Sort By Popularity' addContact={() => this.sortByPopularity()} />
                </div>

                {this.state.choosedContacts.map(elm => <ContactCard key={elm.id} {...elm} removeContact={() => this.removeContact(elm.id)} />)}
            </>

            // choosedContacts.map(elm => <ContactCard key={elm.id} {...elm} />)
        )
    }
}

export default DisplayCards