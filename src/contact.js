import React, { Component } from 'react'
import contacts from "./contacts.json";
import "./contact.css"


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
    sortName() {
        const { contactsArray } = this.state
        const sorta = contactsArray.sort((a, b) => a.name.localeCompare(b.name))
        this.setState({
            sorta
        })
    }
    sortPop() {

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
    
    delete(batmanID) {
        const { contactsArray } = this.state
        const gtfo = contactsArray.filter(contactsArray => contactsArray.id !== batmanID)
        this.setState({
            contactsArray: gtfo
        })
    }
  

    render() {


        return (
            <div class="default">
                <button onClick={() => this.addRandom()}>
                    Add Random Contact
                </button>
                <button onClick={() => this.sortName()}>
                    Sort by Name
                </button>
                <button onClick={() => this.sortPop()}>
                    Sort by Popularity
                </button>

                <table >

                    <thead>
                        <tr>

                            <th>Picture</th>

                            <th>Name</th>

                            <th>Popularity</th>

                        </tr>
                    </thead>

                    <tbody>
                        {this.state.contactsArray.map(eachContact => (
                            <tr className="table">
                                <td><img src={eachContact.pictureUrl} alt={eachContact.name} /></td>

                                <td>{eachContact.name}</td>

                                <td>{eachContact.popularity}</td>

                                <button onClick={() => this.delete(eachContact.id)}>
                                    Remove from favs.
                                </button>

                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>


        )
    }
}

export default Contact

