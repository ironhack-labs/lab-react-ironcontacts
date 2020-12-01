import React, { Component } from 'react'
import './Contact.css'
import contacts from '../../contacts.json'
import ContactCard from './ContactCard'

class Contacts extends Component {
    constructor() {

        super()
        this.state = {
            celebrities: contacts.slice(0, 5)
        }

    }

    randomContact = () => {

        let selectRandom = contacts[Math.floor(Math.random() * contacts.length)]
        this.setState({ contacts: this.state.celebrities.push(selectRandom) })

        //if (this.state.celebrities.includes([contacts][selectRandom].id)){
        //     this.randomContact()
        // }

    }

    sortedName = () => {

        let orderedList = this.state.celebrities.sort((a, b) => {
            if (a.name > b.name) {
                return 1
            }
            if (a.name < b.name) {
                return -1
            }
            return 0
        })

        this.setState({ celebrities: orderedList })
    }

    sortedPopularity = () => {

        let orderedList = this.state.celebrities.sort((a, b) => {
            if (a.popularity > b.popularity) {
                return -1
            }
            if (a.popularity < b.popularity) {
                return 1
            }
            return 0
        })

        this.setState({ celebrities: orderedList })
    }


    removeCelebrity = celebrityId => {
        alert(celebrityId)
        this.setState({
            celebrities: this.state.celebrities.filter(elm => elm.id != celebrityId)
        })
    }


    render() {

        return (
            <section className="document">
                <h1>IronContacts</h1>
                <section className="buttons">
                    <button onClick={this.randomContact}>Add Random Contact</button>
                    <button onClick={this.sortedName}>Sort by name</button>
                    <button onClick={this.sortedPopularity}>Sort by popularity</button>
                </section>
                <table className ="table">
                    <thead>
                        <tr className="titles">
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.celebrities.map(elm => <ContactCard key={elm.id} listOfMovies={() => this.state.celebrities(elm.id)} deleteCelebrity={() => this.removeCelebrity(elm.id)} name={elm.name} pictureUrl={elm.pictureUrl} popularity={elm.popularity.toFixed(2)} />)}
                    </tbody>
                </table>
            </section>
        )

    }
}


export default Contacts