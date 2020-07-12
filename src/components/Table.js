import React, { Component } from 'react'
import contacts from '../contacts.json'
import Button from './Button'

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allContacts: [...contacts].splice(5),
            fiveContacts: [...contacts].splice(0,5)
        }
        this.randomContact = this.randomContact.bind(this)//El valor de this es ignorado cuando la función es llamada con el operador new.

    }

    contactsResult() {
        return this.state.fiveContacts.map(ele => (
            <tr key={ele.name}>
                <td><img className="tablePic" src={ele.pictureUrl} alt='contact img' /></td>
                <td><p>{ele.name}</p></td>
                <td><p>{ele.popularity}</p></td>
            </tr>
        ))
    }

    randomContact() {
        let index = Math.floor(Math.random() * this.state.allContacts.length);
        let copyFiveContacts = [...this.state.fiveContacts]
        let copyAllContacts = [...this.state.allContacts]
        copyFiveContacts.push(copyAllContacts[index])

        this.setState({
            allContacts: copyAllContacts,
            fiveContacts: copyFiveContacts
        })



    }

    render() {
        
        console.log(this.state.allContacts)
        console.log(this.state.fiveContacts)

        return (
            <div className="tableDiv">
            <Button
                addContact={this.randomContact}
            />
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
