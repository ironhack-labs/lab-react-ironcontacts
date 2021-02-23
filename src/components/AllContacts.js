import './AllContacts.css'
import { Component } from 'react'

import contacts from './../contacts.json'

class AllContacts extends Component {
    constructor() {
        super()
        this.state = {
            fiveContacts: contacts.filter((contact, idx) => idx < 5)
        }
    }

    render() {
        const { fiveContacts } = this.state

        console.log( fiveContacts )

        return(
            <div className="contacts-table">
                <h1>IronContacts</h1>
                <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>
                        {fiveContacts.map((elm, idx) => {
                            return <tr key={idx}>
                            <td><img src={elm.pictureUrl} alt={elm.name} /></td>
                            <td>{elm.name}</td>
                            <td>{elm.popularity}</td>
                            </tr>
                            }
                        )}
                </tbody>
                </table>
            </div>
        )
    }
}

export default AllContacts