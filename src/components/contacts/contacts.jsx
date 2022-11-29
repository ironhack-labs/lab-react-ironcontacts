import contact from '../../contacts.json'
import { useState } from 'react'
import './contacts.css'

const Contacts = () => {

    const [contacts, setContacts] = useState(contact)
    const newContact = contacts.slice(12, 17)
    const addContact = () => {
        const randomNumber = Math.floor(Math.random() * contact.length)
        const randomContact = contacts[randomNumber]
        const contactCopy = [...contacts, randomContact]


        contactCopy.unshift(randomContact)


        setContacts(contactCopy)
    }

    return (
        <>
            <p>IronContacts</p>
            <button onClick={addContact}>AÑADIR</button>
            <button onClick={addContact}>Sort Popularity</button>
            <button onClick={addContact}>Sort By Name</button>
            {
                newContact.map((elm, id) => {

                    return <table key={id} >
                        <thead>
                            <tr>
                                <th>Picture</th>

                                <th>Name</th>

                                <th>Popularity</th>

                                <th>Won Oscar</th>

                                <th>Won Emmy</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src={elm.pictureUrl} className='image' /></td>
                                <td>{elm.name} </td>
                                <td> {elm.popularity}</td>
                                <td>

                                    {elm.wonOscar ? <p>👑
                                    </p> : <p>💩
                                    </p>}
                                </td>

                                <td>

                                    {elm.wonEmmy ? <p>👑
                                    </p> : <p>💩
                                    </p>}</td>
                            </tr>
                        </tbody>
                    </table>





                })
            }

        </>


    )
}
export default Contacts