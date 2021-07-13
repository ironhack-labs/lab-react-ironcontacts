import { Component } from 'react'
import contacts from "../contacts.json";
import ContactRow from './ContactRow'
import './ContactList.css'

class ContactList extends Component {

    constructor() {
        super()
        this.state = {
            firstFive: contacts.filter((elm, i) => { if (i < 5) return elm })
        }
    }

    showRandom = () => {

        const getRandom = contacts[Math.floor(Math.random() * contacts.length)]
        const firstFiveCopy = [...this.state.firstFive]
        firstFiveCopy.push(getRandom)

        this.setState({ firstFive: firstFiveCopy })
    }

    sortByName = () => {
        const sortedByName = [...this.state.firstFive]

        sortedByName.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))

        this.setState({ firstFive: sortedByName })
    }

    sortByPopularity = () => {

        const sortedByPopularity = [...this.state.firstFive]

        sortedByPopularity.sort((a, b) => (b.popularity > a.popularity) ? 1 : ((a.popularity > b.popularity) ? -1 : 0))

        this.setState({ firstFive: sortedByPopularity })
    }

    deleteContact = contactId => {
        this.setState({
            firstFive: this.state.firstFive.filter(elm => elm.id !== contactId)
        })
    }

    render() {

        return (
            <>
                <div class='buttons'>
                    <button onClick={this.sortByName} class='btn btn-block btn-lg btn-light' type='button'>
                        Sort by Name
                    </button>
                    <button onClick={this.sortByPopularity} class='btn btn-block btn-lg btn-light' type='button'>
                        Sort by Popularity
                    </button>

                    <button onClick={this.showRandom} class='btn btn-block btn-lg btn-light' type='button'>
                        Add random contact
                    </button>
                </div>

                <table>
                    <thead>
                        <th></th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </thead>
                    {
                        this.state.firstFive.map(elm => <ContactRow picture={elm.pictureUrl} firstName={elm.name} popularity={elm.popularity} key={elm.id} {...elm} deleteContact={() => this.deleteContact(elm.id)} />)
                    }
                </table>

            </>
        )
    }

}

export default ContactList