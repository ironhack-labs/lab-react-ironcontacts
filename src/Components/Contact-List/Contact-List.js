import React from "react"
import contactsList from "./../../contacts.json"
import DisplayOne from '../Display-All/Display-All'
import Button from '../Button/Button'
import './Contact-List.css'


class DynamicList extends React.Component {
    constructor() {
        super()

        this.state = {
            contact: contactsList.slice(0, 5)
        }
    }


    displayAll = () => {
        const contactOne = this.state.contact

        return (
            contactOne.map((contact, idx) => {
                return <DisplayOne {...contact} deleteContact={(id) => this.deleteContact(id)} key={idx} />
            })
        )
    }



    addRandom = () => {
        let random = Math.floor(Math.random() * contactsList.length)
        const contactCopy = [...this.state.contact]
        contactCopy.push(contactsList[random])
        this.setState({
            contact: contactCopy
        })
    }

    sortListByName = () => {
        const contactCopy = [...this.state.contact]
        contactCopy.sort((a, b) => a.name.localeCompare(b.name))
        this.setState({
            contact: contactCopy
        })
    }
    sortListByPopularity = () => {
        const contactCopy = [...this.state.contact]
        contactCopy.sort((a, b) => a.popularity - b.popularity)
        this.setState({
            contact: contactCopy
        })

    }

    deleteContact = (id) => {

        this.setState({
            contact: this.state.contact.filter(contact => contact.id !== id)
        })

    }

    render() {
        return (
            <div className="contact-card">
                <h1 className="center">IronContacts</h1>
                <Button func={this.addRandom}>Add Random Contact</Button>
                <Button func={this.sortListByName}>Sort by Name</Button>
                <Button func={this.sortListByPopularity}>Sort by Popularity</Button>

                {this.displayAll()}

            </div>
        )
    }
}

export default DynamicList
