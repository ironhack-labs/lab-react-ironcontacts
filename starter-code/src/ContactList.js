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

const Contact = ({ pic, name, pop }) => {
    return (
        <tr>
            <th><img src={pic} alt={name} /></th>
            <th>{name}</th>
            <th>{Math.round(pop * 100) / 100}</th>
        </tr>)
}


const starterContacts = contacts.slice(0, 5);

const ContactList = () => {

    const [contactList, setContacts] = useState(starterContacts);
    const getRandomContact = () => ( contacts[Math.floor(Math.random() * contacts.length)])

    const addRandomContact = () => {
        const newContactList = [...contactList];
        let newContact = getRandomContact();
        while (contactList.includes(newContact)){
            newContact = getRandomContact();
        }
        newContactList.push(newContact);
        setContacts(newContactList);
    }

    return (<div>
        <h1>IronContacts</h1>
        <button onClick={() => addRandomContact()}>Add Random Contact</button>

        <Tabla>
            <table>
                <tbody>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                    {contactList.map((e, i) => (
                        <Contact pic={e.pictureUrl} name={e.name} pop={e.popularity} key={i} />
                    ))}
                </tbody>
            </table>
        </Tabla>
    </div>
    )
}


export default ContactList;