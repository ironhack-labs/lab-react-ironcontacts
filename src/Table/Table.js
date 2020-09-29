import React, { Component } from 'react'
import contacts from '.././contacts.json';
import TableRow from "./TableRow"
import "./Table.css"


class Table extends Component {
    constructor() {
        super()
        this.state = {
            initialNumber: 5,
            showContacts: contacts.slice(0, 5)
        }
    }

    addRandom = () => {
        let randomContact = Math.floor((Math.random() * contacts.length))

        this.setState(previousState => ({
               showContacts: [...previousState.showContacts , contacts[randomContact]]
           }))

    }

    sortContactsName = () => {

        let contactToSort = [...this.state.showContacts]
        const sortContent = [].concat(contactToSort).sort((a, b) => a.name > b.name ? 1 : -1)
        
       
        this.setState(() => ({
            showContacts: sortContent
        }))
       
    }

    sortContactsPopularity = () => {
        let contactToSort = [...this.state.showContacts]
        const sortContent = [].concat(contactToSort).sort((a, b) => a.popularity < b.popularity ? 1 : -1)

     
        this.setState(() => ({
            showContacts: sortContent
        }))


    }

    removeContact = contanctID => {
        this.setState({
            showContacts: this.state.showContacts.filter(elm => elm.id != contanctID)
        })
    }
    

    render() {
        
          
       
        return (
            <>
                <div><button onClick={this.addRandom}>Add Random Contanct</button> <button onClick={this.sortContactsName}>Sort by name</button> <button onClick={this.sortContactsPopularity}>Sort by popularity</button></div>

                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.showContacts.map(elm => <TableRow key={elm.id} {...elm} removeContact={() => this.removeContact(elm.id)}/>)}

                    </tbody>
                </table>
            </>
        )
    }

}
export default Table