import contacts from "./contacts.json"
import { Component } from 'react'


class ContactList extends Component {

    constructor() {
        super()
        this.state = {
            contacts: contacts.slice(0, 5)
        }
    }


    addContact = () => {
        const random = contacts[Math.floor(Math.random() * contacts.length)]
        const List = [...this.state.contacts]
        List.push(random)
        this.setState({
            contacts: List
        })
    }


    sortByName = () => {
        const sortListName = this.state.contacts.sort((a, b) => a.name.localeCompare(b.name))
        this.setState({
            contacts: sortListName
        })
    }


    sortByPopularity = () => {
        const sortListPopularity = this.state.contacts.sort((a, b) => b.popularity - a.popularity)
        this.setState({
            contacts: sortListPopularity
        })
    }


    deleteContact = contactId => {
        this.setState({
            contacts: this.state.contacts.filter(elm => elm.id !== contactId)
        })
    }


    render() {

        return (
            <>
                <button onClick={this.addContact}>Add Random Contact</button>
                <button onClick={this.sortByName}>Sort by Name</button>
                <button onClick={this.sortByPopularity}>Sort by Popularity</button>
                {
                    this.state.contacts.map((elm) => <table className='Table'key={elm.id}> <img src={elm.pictureUrl} alt="picture" style={{ width: '10%' }} />{elm.name} {elm.popularity.toFixed(2)} <button onClick={ () => this.deleteContact(elm.id) }>Delete</button></table>)
                }

            </>
        )
    }
}

export default ContactList 