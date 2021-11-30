import React, { Component } from "react"
import contacts from "../contacts.json";

class Fivecontacts extends Component {

    constructor() {
        super()

        this.state = {
            contacts: contacts,
            filteredContacts: contacts.slice(0, 5),
            contactsRest: contacts.slice(5, contacts.length)
        }
    }

    addRandom() {
        //contacto aleatorio
        const random = this.state.contactsRest.splice(Math.floor(Math.random() * this.state.contactsRest.length), 1)[0]
        const filteredContacts = this.state.filteredContacts
        filteredContacts.push(random)

        this.setState({
            filteredContacts
        })
    }

    selectForname() {
        const { filteredContacts } = this.state
        const sortedArray = filteredContacts.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });

        this.setState({
            sortedArray
        })

    }


    selectPopularity() {



        const { filteredContacts } = this.state

        const sortedArray = filteredContacts.sort((a, b) => {
            if (a.popularity < b.popularity) {
                return 1;
            }
            if (a.popularity > b.popularity) {
                return -1;
            }

            return 0;
        });

        this.setState({
            sortedArray
        })
    }

    deleteContact(contactsID) {
        const { filteredContacts } = this.state

        const remove = this.state.filteredContacts.filter(contacts => contacts.id !== contactsID)
        console.log(remove)
        this.setState({
            filteredContacts: remove
        })
    }

    render() {


        return (
            <div>
                <h2>IronContacts</h2>
                <button onClick={() => this.addRandom()} > Añadir contactos</button>
                <button onClick={() => this.selectForname()} > Ordenar contactos</button>
                <button onClick={() => this.selectPopularity()} > Ordenar popu</button>


                {this.state.filteredContacts.map((eachContacts, idx, id) =>
                    <div key={idx}>
                        <p > Name:{eachContacts.name} </p>
                        <p >Popularity:{eachContacts.popularity} </p>

                        <img src={eachContacts.pictureUrl} />
                        <button onClick={() => this.deleteContact(eachContacts.id)} > Eliminar</button>

                    </div>
                )}

            </div>




        )
    }


}


export default Fivecontacts