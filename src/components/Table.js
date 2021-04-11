import React, { useState } from 'react'
import Contacts from '../contacts.json'
import  '../components/Table.css'

export default function Table() {

    let [contacts, setContact] = useState(Contacts.slice(0, 5))



    let addContact = () => {
        const newRandomContact = Contacts[Math.floor(Math.random() * (Contacts.length - 1) + 5)]

        setContact([
            ...contacts,
            newRandomContact
        ])
    }

    const sortByName = () => {
        const sortContacs = contacts.sort((a, b) => {
            return a.name.localeCompare(b.name)
        })

        setContact([
            ...sortContacs
        ])

    }


    const sortByPopularity = () => {
        const sortContacs = contacts.sort((a, b) => {
            return b.popularity - a.popularity
        })
        setContact([
            ...sortContacs
        ])
    }

    const remove = (id) => {
        const newList = contacts.filter((e) => {
            return e.id !== id
        })

        setContact(newList)
    }



    return (
        <div className="container "> 
                <h1 className="card "> IronContacts</h1>
                <button className="btn btn-outline-primary " onClick={() => addContact()}> Add Random Contact</button>
                <button className="btn btn-outline-secondary" onClick={() => sortByName()}> Sort by Name</button>
                <button className="btn btn-outline-success" onClick={() => sortByPopularity()}> Sort by Popularity</button>
                <div className="row">
                <table className="table">
                    <thead>
                        <tr className="table-sucess">
                            <th scope="col">Picture</th>
                            <th scope="col">Name</th>
                            <th scope="col">Popularity</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>

                    {contacts.map((e, id) => {
                        return (
                            <tbody>
                                <th scope="row"></th>
                                <tr key={id}>
                                    <td><img className="img" width="95px" src={e.pictureUrl} /></td>
                                    <td className="name"><strong>{e.name}</strong></td>
                                    <td>{(e.popularity).toFixed(2)}</td>
                                    <button className="btn btn-outline-danger" onClick={() => remove(e.id)}>Delete</button>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>
        </div>
    )

}