import contactData from "../contacts.json";
import { useState } from 'react';
import './ContactList.css';

export const ContactList = () => {

    const newList = contactData.slice(0, 5)

    const [contacts, setContacts] = useState(newList);


    const addRandomContact = () => {
        setContacts((prevList) => {
            const randomContact = contactData[Math.floor(Math.random()*contactData.length)];
            const existingContact = prevList.find(element => element.id === randomContact.id)
            if(!existingContact){
                return prevList.concat(randomContact)
            } else {
                addRandomContact();
            }
        })
    }


    const sortByPopularity = () => {
        setContacts( (prevValue) => {
            const copy = [...prevValue]
            copy.sort( (a, b) => b.popularity - a.popularity)
            return copy;
        });
      
    }

    const sortByName = () => {
        setContacts( (prevValue) => {
            const copy = [...prevValue]
            copy.sort( (a, b) => {
                const nameA = a.name.toUpperCase(); 
                const nameB = b.name.toUpperCase(); 
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
                return 0;
              });
            return copy;
        });
    }

    const deleteContact = (contactId) => {
        setContacts( (prevList) => {

            return prevList.filter(element => element.id !== contactId);
    
            });
    }


    return (
        <div className="ContactList">

            <div className="options">
                <button onClick={addRandomContact}>Add Random Contact</button>
                <button onClick={sortByPopularity}>Sort by popularity</button> 
                <button onClick={sortByName}>Sort by name</button> 
            </div>
            

            <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Won an Oscar</th>
                        <th>Won an Emmy</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {contacts.map(contact => {
                        return(
                            <tr key={contact.id}>
                                <td><img src={contact.pictureUrl} alt={contact.name}/></td>
                                <td>{contact.name}</td>
                                <td>{contact.popularity}</td>
                                <td>{contact.wonOscar ? "🏆" : "" }</td>
                                <td>{contact.wonEmmy ? "🏆" : "" }</td>
                                <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    );
}