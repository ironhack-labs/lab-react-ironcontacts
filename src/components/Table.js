import React, { Component } from 'react'
import contacts from '../contacts.json'

class Table extends Component {
    constructor() {
        super()
        this.state = {
            contacts: contacts.slice(0, 5)
        }
    }

    contactsResult() {
        return this.state.contacts.map(ele => (
            <tr key={ele.name}>
                <td><img className="tablePic" src={ele.pictureUrl} alt='contact img' /></td>
                <td><p>{ele.name}</p></td>
                <td><p>{ele.popularity}</p></td>
            </tr>
        ))
    }

    render() {
        console.log(this.contactsResult())
        return (
            <div className="tableDiv">
                <table>
                    <thead>
                        <tr>
                            <th><h2>Picture</h2></th>
                            <th><h2>Name</h2></th>
                            <th><h2>Popularity</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.contactsResult()}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Table
