import "./Contacts.css"
import contacts from "../../contacts.json"
import ContactCard from "../ContactCard/ContactCard"
import { useState } from "react"


const ContactList = () => {

    const contactsCopy = [...contacts]
    const firstFive = contactsCopy.slice(0, 5)
    const rest = contactsCopy.slice(5)

    const [contact, setContact] = useState(firstFive)

    const addContact = () => {
        const randomNum = Math.floor(Math.random() * contacts.length)

        firstFive.push(rest[randomNum])
        setContact(firstFive)
    }


    return (
        <>
            <h2>ContactList </h2>
            <button onClick={addContact}>Añadir contacto</button>
            <table><thead>

                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won Oscar</th>
                <th>Won Emmy</th>




            </thead>
                <tbody>

                    {
                        contact.map(elm => {
                            return <ContactCard key={elm._id}{...elm} />
                        })
                    }
                </tbody>

            </table>



        </>)


}

export default ContactList