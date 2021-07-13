import contacts from './../contacts.json'
import ContactRow from './ContactRow'
import { Component } from "react"

class ContactsList extends Component {
    constructor() {
        super()
        this.state = {
            contacts: contacts,
            artist: contacts.slice(0, 5)
        }
    }

    render() {
        return (
            <table>
                <ul>Picture Name Popularity
                    {
                        this.state.artist.map((elm, idx) => <ContactRow key={elm.idx} {...elm} />)
                    }
                </ul>
            </table>
        )

    }
}

export default ContactsList