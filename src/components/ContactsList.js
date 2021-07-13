import { Component } from "react"
import './ContactsList.css'
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
        let contacts2 = [...this.state.contacts]

        this.setState({

            contacts: [randomContact, ...contacts2]

        })
    }//mah

    sortAlphabetically = () => {

        let contacts2 = [...this.state.contacts]

        this.setState({
            contacts: contacts2.sort((a, b) => a.name.localeCompare(b.name))
        })
    }

    sortByPopularity = () => {

        let contacts2 = [...this.state.contacts]

        this.setState({
            contacts: contacts2.sort((a, b) => b.popularity - (a.popularity))
        })

    }

    deleteById = cardId => {



        this.setState({
            contacts: this.state.contacts.filter(elm => elm.id !== cardId)
        })
    }

    render() {

        return (
            <>
                <button onClick={this.addRandomContact}> premi qui</button>
                <button onClick={this.sortAlphabetically}> ordina alfabeticamente qui</button>
                <button onClick={this.sortByPopularity}> ordina per popolarità qui</button>

                {
                    this.state.contacts.map(elm => <Card key={elm.id} name={elm.name} pictureUrl={elm.pictureUrl} popularity={elm.popularity} deleteById={() => this.deleteById(elm.id)} />)
                }


            </>
        )
    }
}

export default ContactsList