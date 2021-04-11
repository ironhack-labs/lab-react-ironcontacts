import React, { useState } from 'react'
import Contacts from '../contacts.json'

export default function Table() {

    let [contacts, setContact] = useState(Contacts.slice(0, 5))


    return (
        <div className="">
            <h1 className="title"> IronContacts</h1>
            <table className="table">
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>

                {contacts.map((e, id) => {
                    return (
                        <tr key={id}>
                            <td><img width="100px" src={e.pictureUrl} /></td>
                            <td>{e.name}</td>
                            <td>{(e.popularity).toFixed(2)}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )

}