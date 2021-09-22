import React, { Component } from 'react'
import data from '../contacts.json'

const dinamicData = data.slice(0, 5)
export default class ContactsList extends Component {
    state = {
        contact: dinamicData,
        count: 0
    }

    addRandomContact = () => {
        let idRandom = Math.floor(1 + Math.random() * data.length)
        let numberRandom = Math.floor(1 + Math.random() * data.length)
        let contactFound = data.filter((element, index) => numberRandom === index)

        contactFound.map(({ name, pictureUrl, popularity, id }) => {
            dinamicData.unshift({ name, pictureUrl, popularity, id: idRandom })
            return
        })

        this.setState({
            ...this.state,
            contact: dinamicData
        })

    }
    sortForPopulate = () => {
        let contactCopy = this.state.contact.map(contact => contact)
        this.setState({
            ...this.state,
            contact: contactCopy.sort((contact1, contact2) => contact2.popularity - contact1.popularity)
        })
    }

    sortForName = () => {
        let contactCopy = this.state.contact.map(contact => contact)
        let newList = contactCopy.sort((a, b) => b.name > a.name)
        console.log(newList)
        this.setState({
            ...this.state,
            contact: contactCopy.sort((contact1, contact2) =>
                contact2.name > contact1.name ? -1 : 1)
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
            <div className="container-contacts container">

                <h1>Lista de Actores</h1>
                <div className="row container-buttons">
                    <a onClick={() => this.addRandomContact()} className="btn btn-primary">Agregar aleatorio</a>
                    <a onClick={() => this.sortForPopulate()} className="btn btn-primary">ordenar por popularidad</a>
                    <a onClick={() => this.sortForName()} className="btn btn-primary">ordenar por name</a>
                </div>

                <div className="row">
                    {
                        this.state.contact.map(({ name, pictureUrl, popularity, id }) => {
                            return (
                                <div key={`${id}-${name}`} className="col-md-3">
                                    <div className="card mt-3" >
                                        <img src={pictureUrl} className="card-img-top" alt="Foto del actor" />
                                        <div className="card-body">
                                            <h5 className="card-title">{name}</h5>
                                            <p className="card-text">{popularity}</p>
                                        </div>
                                        <a onClick={() => this.deleteContact(id)} className="btn btn-primary">Eliminar</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div >
        )
    }
}
