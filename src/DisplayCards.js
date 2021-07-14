import { Component } from "react";
import ContactCard from "./ContactCard";
import contacts from './contacts.json'
import Button from './Button';

import './DisplayCards.css'
import { randomNumberGenerator, compareStrings } from './utils'

class DisplayCards extends Component {
    constructor() {
        super()
        this.state = {
            allContacts: contacts,
            chosedContacts: contacts.filter((el, idx) => idx < 5)
        }
    }

    addRandomContact = () => {
        const chosedContactsIds = this.state.chosedContacts.map(elm => elm.id)
        const unusedContacts = this.state.allContacts.filter(elm => !chosedContactsIds.includes(elm.id))
        const unusedContactsNumber = unusedContacts.length
        const randomIndex = randomNumberGenerator(0, unusedContactsNumber)
        let temp = []
        temp = [...this.state.chosedContacts]
        temp.push(unusedContacts[randomIndex])
        this.setState({
            chosedContacts: temp
        })
    }

    sortByName = () => {
        let temp = []
        temp = [...this.state.chosedContacts]
        temp.sort((a, b) => compareStrings(a.name, b.name))
        this.setState({
            chosedContacts: temp
        })
    }

    sortByPopularity = () => {
        let temp = []
        temp = [...this.state.chosedContacts]
        temp.sort((a, b) => b.popularity - a.popularity)
        this.setState({
            chosedContacts: temp
        })
    }

    removeContact = contactId => {
        this.setState({
            chosedContacts: this.state.chosedContacts.filter(elm => elm.id !== contactId)
        })
    }

    render() {
        // const chosedContacts = this.state.allContacts.filter((el, idx) => idx < 5)

        return (
            <>
                <div className="commandArea">
                    <Button className="commandAreaButton" buttonText='Add Random Contact' buttonAction={() => this.addRandomContact()} />
                    <Button className="commandAreaButton" buttonText='Sort By Name' buttonAction={() => this.sortByName()} />
                    <Button className="commandAreaButton" buttonText='Sort By Popularity' buttonAction={() => this.sortByPopularity()} />
                </div>

                <div className="chosenCards">
                    {this.state.chosedContacts.map(elm => <ContactCard className="card" key={elm.id} {...elm} removeContact={() => this.removeContact(elm.id)} />)}
                </div>

            </>

            // chosedContacts.map(elm => <ContactCard key={elm.id} {...elm} />)
        )
    }
}

export default DisplayCards