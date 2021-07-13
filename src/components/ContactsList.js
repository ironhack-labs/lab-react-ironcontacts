import { Component } from "react"
import contactsList from "./../contacts.json"
import Card from "./ActorsCard"

class ContactsList extends Component {

    constructor() {
        super()
        this.state = {
            contacts: contactsList.slice(0, 5)
        }

    }

    addRandomContact = () => {
        let randomContact = contactsList[Math.floor(Math.random() * contactsList.length)]

        this.setState({

            contacts : [randomContact, ...contactsList]

        })
    }



render() {

    return (
        <>
            <button onClick={this.addRandomContact}> premi qui</button>

            {
                this.state.contacts.map(elm => <Card key={elm.id} name={elm.name} pictureUrl={elm.pictureUrl} popularity={elm.popularity} />)
            }


        </>
    )
}
}

export default ContactsList