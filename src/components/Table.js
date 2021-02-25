import React, {useState} from 'react'
import contacts from '../contacts.json'

export default function Table() {
    let [contactos, setContactos] = useState(contacts.slice(0, 5))
    console.log(contactos)

    const [newContact, setNewContact] = useState({
        name: "",
        pictureUrl: "",
        popularity: undefined
    })

    const [id, setId] = useState("")

    let addContact = () => {
        const randomContact = contacts[Math.floor(Math.random() * (contacts.length -1) + 5)]
        setContactos([
            ...contactos,
            randomContact
        ])
    }

    const sortByName = () => {
        const sortedContacts = contactos.sort((a, b) => {
            return a.name.localeCompare(b.name)
        })
        
        setContactos([
            ...sortedContacts
        ])
    }

    const sortByPopularity = () => {
        const sortedContacts = contactos.sort((a, b) => {
            return b.popularity - a.popularity
        })
        setContactos([
            ...sortedContacts
        ])
    }

    const remove = (id) => {
        const newList = contactos.filter((e) => {
            return e.id !== id
        })
        setContactos(newList)
    }

    return (
        <>
            <button onClick={() => addContact()}>Add Random Contact</button>
            <button onClick={() => sortByName()}>Sort by name</button>
            <button onClick={() => sortByPopularity()}>Sort by popularity</button>
            <table>
                <caption>IronContacts</caption>

                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>
              
                {contactos.map((e, id) => {
                    return (
                        <tr key={id}>
                            <td><img width="90px" src={e.pictureUrl} /></td>
                            <td>{e.name}</td>
                            <td>{(e.popularity).toFixed(2)}</td>
                            <button onClick={() => remove(e.id)}>Delete</button>
                        </tr>
                    ) 
                })
                }
              
          </table>  
        </>
    )
}

