import React, { Component } from 'react'
import contacts from './../../contacts.json';
import './List.css'

class List extends Component {

    constructor() {
        super()

        this.state = {

            listContact: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]

        }
    }

    
    sortPopularity = () => {
        const sortPop = this.state.listContact
        sortPop.sort((a, b) => (a.popularity > b.popularity) ? -1 : 1)
        this.setState({listContact: sortPop})
    }
    
    sortName = () => {
        const sortList = this.state.listContact
        sortList.sort((a, b) => (a.name > b.name) ? 1 : -1)
        this.setState({listContact: sortList})
    }
    
    addRandom = () => {
        const randomNumber = Math.floor(Math.random() * (contacts.length - this.state.listContact.length)) + this.state.listContact.length
        const newListContact = this.state.listContact
        newListContact.push(contacts[randomNumber])
        this.setState({listContact: newListContact})
    }
    
    deleteContact = idDelete => this.setState({listContact: this.state.listContact.filter(elm => elm.id != idDelete) })
        

    render() {

        return (
            <section className="container">
                <button onClick={this.addRandom}>Add Random Contact</button>
                <button onClick={this.sortName}>Sort by name</button>
                <button onClick={this.sortPopularity}>Sort by popularity</button>
                <table>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
                    </tr>
                    {this.state.listContact.map(elm => {
                        return (
                            <tr>
                                <td><img src={elm.pictureUrl}/></td>
                                <td>{elm.name}</td>
                                <td>{elm.popularity.toFixed(2)}</td>
                                <td><button className="red" onClick={() => this.deleteContact(elm.id)}>Delete</button></td>
                            </tr>
                        )
                    })}
                </table>
            </section>

        )
    }
}

export default List