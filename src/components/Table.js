import React, { Component } from 'react'
import contacts from '../contacts.json';

const copyContacts = JSON.parse(JSON.stringify(contacts))
const newContacts = copyContacts.slice(0,5)
console.log(newContacts)


class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: newContacts
        }
    }

    contactList() {
        return this.state.contacts.map(contact => {
            return (
                <tr key={contact.id}>
                    <th><img style={{width:"100px"}} src={contact.pictureUrl}/></th>
                    <th>{contact.name}</th>
                    <th>{contact.popularity}</th>
                </tr>
            )
        })
    }

    addRandom(array) {
        const randomElement = array[Math.floor(Math.random() * array.length)]
        if (newContacts.indexOf(randomElement) === -1) {
            newContacts.push(randomElement)
            this.setState({
                contacts: newContacts
            })
        } else {
            console.log("Already exists !")
        }  
    }

    sortByName(array) {
        const sortedArray = newContacts.sort((a, b) => a.name.localeCompare(b.name))
        this.setState({
            contacts: sortedArray
        })
    }

    sortByPopularity(array) {
        const sortedArray = newContacts.sort((a, b) =>  (a.popularity < b.popularity) ? 1 : ((b.popularity < a.popularity) ? -1 : 0))
        this.setState({
            contacts: sortedArray
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.addRandom(copyContacts)}>
                    ADD
                </button>
                <button onClick={() => this.sortByName(copyContacts)}>
                    SORT BY NAME
                </button>
                <button onClick={() => this.sortByPopularity(copyContacts)}>
                    SORT BY POPULARITY
                </button>
                <table>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                    {this.contactList()}
                </table>
            </div>
        )
    }
}

export default Table