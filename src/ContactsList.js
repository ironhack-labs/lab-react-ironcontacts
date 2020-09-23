import React from 'react'

export default function contactsList(props) {



    const contacts = props.contacts.map(contact => {
        return (
            <tr key={contact.id}>
                <td><img src={contact.pictureUrl} className="portrait" alt="portrait" /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
            </tr>
        )
    })
    return <tbody >{contacts}</tbody >
}
