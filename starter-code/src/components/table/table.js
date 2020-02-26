import React, { Component } from 'react'
import contacts from '../../contacts.json';
import Card from '../cards/card'
import './table.css'
class Table extends Component {

    constructor() {
        super()
        this.state = {
            contact: contacts.slice(0, 5)
        }
    }
    //se hace el constructor arriba



    //para las siguientes funciones, se crean copias para no mutar el original----->

    pushContact = () => {
        const contactsCopy = [...this.state.contact]
        contactsCopy.push(contacts[Math.floor(Math.random() * contacts.length)])
        this.setState({ contact: contactsCopy })
    }
    //se hace una funcion con random para sacar un contacto y se pone el .length para que coja todos, además de
    //un push para que lo ponga en la tabla cuando le llamemos.



    deleteContact = idx => {
        const contactsCopy = [...this.state.contact]
        contactsCopy.splice(idx, 1)
        this.setState({ contact: contactsCopy })
    }
    //se hace un delete para quitar un contacto, usando un splice sobre el idx




    sortByName = () => {
        const contactsCopy = [...this.state.contact]
        contactsCopy.sort(function (a, b) {
            if (a.name > b.name) { return 1 }
            if (a.name < b.name) { return -1 }
            return 0
        })
        this.setState({ contact: contactsCopy })
    }
    //se hace una funcion que ordene en este caso por nombre usando sort.



    sortByPopularity = () => {
        const contactsCopy = [...this.state.contact]
        contactsCopy.sort(function (a, b) {
            if (a.popularity < b.popularity) { return 1 }
            if (a.popularity > b.popularity) { return -1 }
            return 0
        })
        this.setState({ contact: contactsCopy })
    }
    //se hace una funcion que ordene en este caso por popularity usando sort.


    render() {

        return (
            // creamos los botones llamando a las funciones
            <>
                <button className="coolbuttonblue" onClick={() => this.pushContact()}>Add random Contact</button>
                <button className="coolbuttongreen" onClick={() => this.sortByName()}>Sort by name</button>
                <button className="coolbuttonorange" onClick={() => this.sortByPopularity()}>Sort by popularity</button>



                <table>
                    <thead>
                        <tr>
                            <td>Picture</td>
                            <td>Name</td>
                            <td>Popularity</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contact.map((elm, idx) => <Card key={idx} {...elm} deleteOneContact={() => this.deleteContact(idx)} />)}
                    </tbody>

                </table>
            </>
        )
    }
}

export default Table