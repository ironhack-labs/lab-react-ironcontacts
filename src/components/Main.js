// src/App.js
import "./Main.css";
import contactsArray from "../contacts.json";
import { useState } from "react";
const firstFive = contactsArray.slice(0, 5);

function Main() {
    const [contactsList, setContactsList] = useState(firstFive);


    function addContact() {
        const visibleIds = contactsList.map((c) => c.id)
        const eligibleContacts = contactsArray.filter((c) => !visibleIds.includes(c.id))

        const index = Math.floor(Math.random() * eligibleContacts.length)
        const newContact = eligibleContacts[index]

        setContactsList([...contactsList, newContact]);
    }




    return (<div className="main" >
        <button onClick={addContact}>Add Random Contact</button>
        <button onClick={addContact}>Sort by popularity</button>
        <button onClick={addContact}>sort by name</button>
        <table>
            <tbody>
                <tr>
                    <th><h3>Picture</h3></th>
                    <th><h3>Name</h3></th>
                    <th><h3>Popularity</h3></th>
                    <th><h3>Won an Oscar</h3></th>
                    <th><h3>Won an Emmy</h3></th>

                </tr>
            </tbody>
            <tbody>
            {contactsList && contactsList.length > 0  && contactsList.map((contact, index) => {
                return (
                    <tr key={index}>
                        <td><img src={contact.pictureUrl} /></td>
                        <td><p>{contact.name}</p></td>
                        <td><p>{contact.popularity}</p></td>
                        <td>{contact.wonOscar && <p> 🏆 </p>}</td>
                        <td>{contact.wonEmmy && <p> Yes </p>}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    </div>);
}

export default Main;