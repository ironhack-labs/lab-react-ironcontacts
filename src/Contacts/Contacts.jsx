import { useState } from 'react'
import contacts from "../contacts.json";
import('./contacts.css')

const Contacts = () => {

    const getFiveContacts = contacts.slice(0, 5)
    contacts.splice(0, 5)

    const [contactsList, setContactsList] = useState(getFiveContacts)

    const addRandomContact = () => {
        let getRandomContact = contacts[Math.floor(Math.random() * contacts.length)]
        setContactsList([...contactsList, getRandomContact])
    }

    const deleteContact = contactId => {
        const filterContactsList = contactsList.filter(contact => {
            return contact.id !== contactId
        })
        setContactsList(filterContactsList)
    }

    const sortByName = () => {
        const sortName = [...contactsList].sort((a, b) => a.name.localeCompare(b.name))
        setContactsList(sortName)
    }

    const sortByPopularity = () => {
        const sortPopularity = [...contactsList].sort((a, b) => b.popularity - a.popularity)
        setContactsList(sortPopularity)
    }

    return (
        <div className='contacts'>
            <table>
                <tbody>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Won Oscar</th>
                        <th>Won Emmy</th>
                    </tr>
                    {
                        contactsList.map(contact => {
                            const roundPopularity = Math.round(contact.popularity * 100) / 100
                            return (
                                <tr key={contact.id}>
                                    <th><img src={contact.pictureUrl} alt="" /></th>
                                    <th>{contact.name}</th>
                                    <th>{roundPopularity}</th>
                                    <th>{contact.wonOscar ? <p>🏆</p> : <p>😢</p>}</th>
                                    <th>{contact.wonEmmy ? <p>🎖️</p> : <p>😢</p>}</th>
                                    <th>
                                        <button onClick={() => deleteContact(contact.id)} >Delete</button>
                                    </th>
                                </tr>)
                        })
                    }
                </tbody>
            </table>
            < button onClick={() => addRandomContact()}>Add random contact</button>
            < button onClick={() => sortByName()}>Sort by name</button>
            < button onClick={() => sortByPopularity()}>Sort by popularity</button>


        </div>

    )
}
export default Contacts
