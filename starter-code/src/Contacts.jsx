import React, { Component } from 'react'
import allContacts from "./contacts.json";


// Display that array of 5 contacts in a <table>
//and display the picture, name, and popularity of each contact.

export default class Instruments extends Component {
    state = {
        contacts: allContacts.splice(0, 5)
    }

    render() {
        console.log(allContacts.splice(0, 5));
        return (
            <table className="iron-contacts">
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>

                    {this.state.contacts.map((c, i) => (
                        <tr key={i}>
                            <td><img src={c.pictureUrl} alt={c.name} /></td>
                            <td>{c.name}</td>
                            <td>{c.popularity.toFixed(2)}</td>
                        </tr>
                    ))}

                </tbody>

            </table>
        )
    }
}
