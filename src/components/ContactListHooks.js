import React, { useEffect, useState } from 'react'
import dataHooks from '../contacts.json'

const dinamicData = dataHooks.splice(0, 5)

export default function ContactListHooks() {
    const [listContact, setListContact] = useState(dinamicData)


    const addRandomContactHooks = () => {
        let idRandom = Math.floor(1 + Math.random() * dataHooks.length)
        let numberRandom = Math.floor(1 + Math.random() * dataHooks.length)
        let contactFound = dataHooks.filter((element, index) => numberRandom === index)

        // console.log(contactFound)

        contactFound.map(({ name, pictureUrl, popularity }) => {
            dinamicData.unshift({ name, pictureUrl, popularity, id: idRandom })
            return
        })

        setListContact(dinamicData)
    }

    useEffect(() => {

    }, [listContact])

    return (
        <div className="container container-contacts ">
            <h1>Lista de Actores con Hooks</h1>
            <div className="row container-buttons ">
                <a onClick={() => addRandomContactHooks()} className="btn btn-primary">Agregar aleatorio</a>
                {/* <a onClick={() => this.sortForPopulate()} className="btn btn-primary">ordenar por popularidad</a> */}
                {/* <a onClick={() => this.sortForName()} className="btn btn-primary">ordenar por name</a> */}
            </div>
            <div className="row ">
                {
                    listContact.map(({ name, popularity, pictureUrl, id }) => {
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
        </div>
    )
}
