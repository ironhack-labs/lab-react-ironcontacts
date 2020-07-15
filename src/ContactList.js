import React from 'react'



export default function ContactList(props) {
    console.log(props)
    const contacts = props.contacts.map(contact => {
        return (
            <tr key={contact.id}>
                <td><img src = {contact.pictureUrl} width = "60px" height = "70px"/></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td onClick = {() => props.deleteContact(contact.id)}><button>Delete</button></td>
            </tr>
        )
    })
    return contacts
}