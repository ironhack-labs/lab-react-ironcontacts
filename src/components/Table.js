import React, { useState } from 'react'
import Contacts from '../contacts.json'

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



    return (
        <div className="">
            <h1 className="title"> IronContacts</h1>
            <button onClick={() => addContact()}> Add Random Contact</button>
            <button onClick={() => sortByName()}> Sort by Name</button>
            <button onClick={() => sortByPopularity()}> Sort by Popularity</button>
            <table className="table">
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>

                {contacts.map((e, id) => {
                    return (
                        <tr key={id}>
                            <td><img width="95px" src={e.pictureUrl} /></td>
                            <td>{e.name}</td>
                            <td>{(e.popularity).toFixed(2)}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )

}