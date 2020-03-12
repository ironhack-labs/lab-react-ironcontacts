import React, { useState } from "react";
import contacts from './contacts.json';
import styled from "styled-components";


const Tabla = styled.div`
display:flex;
justify-content:center;
img{
  width:60px;
}
th {
  word-spacing:100vw; /*forces linebreak*/
  width:5vw;
}
 `;

const Contact = ({ pic, name, pop, idx, deleteFunction }) => {

    return (
        <tr>
            <th><img src={pic} alt={name} /></th>
            <th>{name}</th>
            <th>{Math.round(pop * 100) / 100}</th>
            <th><button onClick={() => deleteFunction(idx)}>Delete</button></th>
        </tr >)
}


const starterContacts = contacts.slice(0, 5);

const ContactList = () => {

    const [contactList, setContacts] = useState(starterContacts);

    // Add random contact
    const getRandomContact = () => (contacts[Math.floor(Math.random() * contacts.length)])
    const addRandomContact = () => {
        const newContactList = [...contactList];
        let newContact = getRandomContact();
        while (contactList.includes(newContact)) {
            newContact = getRandomContact();
        }
        newContactList.push(newContact);
        setContacts(newContactList);
    }

    //Sort by
    const sortBy = (e) => {
        const sortedContactList = [...contactList].sort((a, b) => (a[e] > b[e]) ? 1 : -1);
        if (e === "popularity") {
            sortedContactList.reverse();
        }
        setContacts(sortedContactList);
    }

    //Delete
    const deleteContact = (idx) => {
        const newContactList = [...contactList];
        newContactList.splice(idx, 1);
        setContacts(newContactList);
    }

    return (<>
        <h1>IronContacts</h1>

        <button onClick={() => addRandomContact()}>Add Random Contact</button>
        <button onClick={() => sortBy("name")}>Sort by name</button>
        <button onClick={() => sortBy("popularity")}>Sort by popularity</button>

        <Tabla>
            <table>
                <tbody>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
                    </tr>
                    {contactList.map((e, i) => (
                        <Contact pic={e.pictureUrl} name={e.name} pop={e.popularity} key={i} deleteFunction={deleteContact} idx={i} />
                    ))}
                </tbody>
            </table>
        </Tabla>
    </>
    )
}


export default ContactList;