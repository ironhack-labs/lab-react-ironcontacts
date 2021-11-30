import React, { Component } from 'react'
import contacts from "./contacts.json";
import "./Contact.css"

class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            contactsArray: contacts.slice(0, 5),
            contactsLeft: contacts.slice(5, contacts.length)
        }

    }

    addRandom() {

        const random = this.state.contactsLeft.splice(Math.floor(Math.random() * this.state.contactsLeft.length), 1)[0]

        const { contactsArray } = this.state

        contactsArray.push(random)

        this.setState({
            contactsArray
        })
    }

    sortByName() {

        const { contactsArray } = this.state

        const sortedArray = contactsArray.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }

            return 0;
        });

        this.setState({
            sortedArray
        })
    }

    sortByPopularity() {

        const { contactsArray } = this.state

        const sortedArray = contactsArray.sort((a, b) => {
            if (a.popularity < b.popularity) {
                return 1;
            }
            if (a.popularity > b.popularity) {
                return -1;
            }

            return 0;
        });

        this.setState({
            sortedArray
        })
    }

    removeContact(contactID) {

        const { contactsArray } = this.state

        const newContact = contactsArray.filter(eachContact => eachContact.id !== contactID)

        this.setState({
            contactsArray: newContact
        })
    }

    render() {


        return (
            <div className="default">
                <button onClick={() => this.addRandom()}>Add Random Contact</button><button onClick={() => this.sortByName()}>Sort by name</button><button onClick={() => this.sortByPopularity()}>Sort by popularity</button>

                <table >

                    <thead>
                        <tr>

                            <th>Picture</th>

                            <th>Name</th>

                            <th>Popularity</th>

                            <th>Action</th>

                        </tr>
                    </thead>

                    {this.state.contactsArray.map(eachContact => (

                        <tbody key={eachContact.id}>
                            <tr className="tableBody">
                                <td><img src={eachContact.pictureUrl} alt={eachContact.name} /></td>

                                <td>{eachContact.name}</td>

                                <td>{(eachContact.popularity).toFixed(2)}</td>

                                <td>
                                    <button onClick={() => this.removeContact(eachContact.id)}>
                                        Delete
                                    </button>
                                </td>


                            </tr>



                        </tbody>
                    ))}
                </table>
            </div>


        )
    }
}

export default Contact