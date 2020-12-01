import React, {Component} from 'react'
import '../components/App.css'
import contacts from '../components/contacts.json'

class Contactlist extends Component {
    constructor() {
        super()

        this.state = {
            contactList: [contacts[0],contacts[1],contacts[2],contacts[3],contacts[4]]
        }
    }

    addRandom = () => {
        const randomPos = Math.floor(Math.random() * (contacts.length - this.state.contactList.length)) + this.state.contactList.length
        const newContact = this.state.contactList
        newContact.push(contacts[randomPos])
        this.setState({contactList: newContact})
    }

    render() {
        return (
            <section className="container">
                <button onClick={this.addRandom}>New Random Contact</button>
                <table className="table">
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
                    </tr>
                    {this.state.contactList.map(elm => {
                        return (
                            <tr>
                                <th><img src={elm.pictureUrl} /></th>
                                <th>{elm.name}</th>
                                <th>{elm.popularity.toFixed(1)}</th>
                            </tr>
                        )
                    })}
                </table>
            </section>
        )
    }

}

export default Contactlist