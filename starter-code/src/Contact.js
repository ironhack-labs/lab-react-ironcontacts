import React, { Component } from 'react';
import contacts from './contacts.json'

export default class Contact extends Component {

    constructor() {
        super();

        this.state = { contacts: contacts.slice(0, 5) }


    }

    clickRandom = () => {
        this.setState({
            contacts: [...this.state.contacts, contacts[Math.floor(Math.random() * (contacts.length - 5)) + 5]]
        })
    }

    sortName = () => {
        this.setState({
            contacts: this.state.contacts.sort((a, b) => {
                return a.name.localeCompare(b.name)
            })

        }
        )
    }

    sortPop = () => {
        this.setState({
            contacts: this.state.contacts.sort((x, y) => {
                return y.popularity - x.popularity
            }),
        })
    }

    deleteContact = (index) => {
        const contactsAfterDelete =  [...this.state.contacts];
        contactsAfterDelete.splice(index, 1)
        this.setState({
            contacts: contactsAfterDelete
        });
    };


    render() {
        console.log(this.state.contacts)
        return (
            <div>
                <div className="buttons">
                    <div className="add-random-button"><button onClick={this.clickRandom}>Add Random Contact</button></div><br />
                    <div className="add-random-button"><button onClick={this.sortName}>Sort by name</button></div><br />
                    <div className="add-random-button"><button onClick={this.sortPop}>Sort by popularity</button></div><br />
                </div>
                    <div className="contacttable">
                    <table >
                        <thead>
                            <tr>
                                <th>Picture</th>
                                <th>Name</th>
                                <th>Popularity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.contacts.map((oneP, index) => {
                                return (
                                    <tr key={oneP.id}>
                                        <td><img src={oneP.pictureUrl} alt="bild" /> </td>
                                        <td>{oneP.name}</td>
                                        <td>{oneP.popularity.toFixed(2)}</td>
                                        <td><button onClick={() => this.deleteContact(index)}>Delete</button></td>
                                    </tr>)
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
