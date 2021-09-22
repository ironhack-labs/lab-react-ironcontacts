import React from "react";
import contactList from "../../contacts.json";
import "./ContactList.css"
import DisplayAll from "../DisplayAll/DisplayAll"



class DynamicContactList extends React.Component {

    constructor() {

        super()
        this.state = {
            contact: contactList.slice(0, 5)
        }

    }

    componentDidMount = () => {

        contactList.slice(0, 5)

    }

    displayAll = () => {

        const contactsAll = this.state.contact

        return (

            contactsAll.map((contact) => {

                return <DisplayAll {...contact} deleteContact={(id) => this.deleteContact(id)} />
            })
        )
    }

    addContact = () => {

        const contactCopy = [...this.state.contact]
        contactCopy.push(contactList[Math.floor(Math.random() * contactList.length)])

        this.setState({
            contact: contactCopy
        })

    }

    sortByName = () => {

        const contactCopy = [...this.state.contact]

        this.setState({
            ...this.state,
            contact: contactCopy.sort((contact1, contact2) => contact1.name.localeCompare(contact2.name))
        })

    }

    sortByPopularity = () => {

        const contactCopy = [...this.state.contact]

        this.setState({
            ...this.state,
            contact: contactCopy.sort((contact1, contact2) => contact1.popularity - contact2.popularity)
        })

    }

    deleteContact = (id) => {

        this.setState({
            ...this.state,
            contact: this.state.contact.filter(contact => contact.id !== id)
        })

    }

    render() {

        return (

            <div>

                <button onClick={() => this.sortByName()}>Ordenar por nombre</button>

                <button onClick={() => this.sortByPopularity()}>Ordenar por popularidad</button>

                <button onClick={() => this.addContact()}>Añadir </button>

                <table className="tableFive" >

                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
                    </tr>

                    <tr>
                        <body>
                            {this.displayAll()}
                        </body>
                    </tr>

                </table>

            </div>

        )
    }

}

export default DynamicContactList;