import { useState } from "react";
// import contactArray  from "../data/index";
import contactArray from "../contacts.json";
import { v4 as uuid } from "uuid";
import "./ContactCard.css";


function ContactList({id}) {
    
    // const [contacts, setContacts ] = useState(0);
    // const [picture, setPicture] = useState (" ");
    // const [name, setName] = useState(" ");
    // const [popularity, setPopularity] = useState (" ");

    const [showContacts, setShowContacts] = useState(true)
    const firstFive = contactArray.slice(0,5)
    console.log(firstFive)
    const [contactsList, setContactsList] = useState(firstFive)

    const contactListCopy = [...ContactList]
    const newRandomContact = () => {
        setShowContacts(!showContacts)
    }
    const currentContactList = [...contactsList, newRandomContact];

    const addRandomContacts = () => {
        // const generateUUID = (min, max) => {
        //     return Math.floor(Math.random() * (max - min + 1)) + min;
        //   }
        //   return generateUUID();
          
        setContactsList(currentContactList);
    }

    const sortByName = () => {
        currentContactList.sort(function (a,b) {
            return (
                a.name - b.name
            )
        })
    }

    const sortByPopularity = () => {
        currentContactList.sort(function (a,b) {
            return (
                a.popularity - b.popularity
            )
        })
    }

    const removeContact = (id) => {
        const updateContactList = contactListCopy.filter(
            contact => contact.id !== id
        )
        setContactsList(updateContactList);
    }

    const key = uuid()
   

    return (
    <div>
    <button onClick={addRandomContacts} align="center" type="submit">Add Random Contact</button>
    <button onClick={sortByName} align="center" type="submit">Sort by name</button>
    <button onClick={sortByPopularity} align="center" type="submit">Sort by popularity</button>
    <button onClick={()=> removeContact(id)} align="center">Delete</button>
        <table cellpadding='5' cellspacing='5' align='center' width='900px'>
        <tr>
            <td align='center' width='50px'>Picture
            </td>
        
            <td align='center' width='50px'>Name
            </td>

            <td align='center' width='50px'>Popularity
            </td>

            <td align='center' width='50px'>Won Oscar
            </td>

            <td align='center' width='50px'>Won Emmy
            </td>

        </tr>
        {contactsList.map(contact=>(
            <tr>
            <td align='center' width='50px'>
            <img className="img-card" src={contact.pictureUrl} alt="contact_picture"  />
            </td>
        
            <td align='center' width='50px'>{contact.name}
            </td>

            <td align='center' width='50px'>{contact.popularity}
            </td>

            <td align='center' width='50px'>{contact.wonOscar ? "🏆" : " "}
            </td>

            <td align='center' width='50px'>{contact.wonEmmy ? "🏆" : " "}
            </td>
        </tr>
        )
               
            
        )}
        </table>
    </div>
    )
}

export default ContactList;