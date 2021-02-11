import React, {useState} from 'react';
import Contacts from '../Contacts/Contacts';

function DynamicContacts (data) {
    const fiveContacts = data.data.slice(0,5)

    let [contact, setDOM] = useState(fiveContacts)
    console.log("contact",contact)

    //Funciona bien
    const handleDelete = contactId => { 
        const deletedContact = contact.filter(contact => contact.id !== contactId)
        setDOM( deletedContact )
    }
    //Funciona bien
    const addRandomContact = () => {
        console.log("add")
            let randomNum = Math.floor(Math.random() * data.data.length)
            let randomContact = data.data[randomNum]
            setDOM(state => state.concat(randomContact))
    }
    //No funciona
    const sortByName = () => {
        console.log("sort by name")
        setDOM(item => item.sort((a, b) =>
        a.name - b.name
        ))
        console.log("sorted by name:",contact)
    }
    //Funciona en consola pero no lo pinta en el DOM. Sí ordena cuando añades un nuevo contacto o lo borras... 
    const sortByPopularity = () => {
        console.log("sort by popularity")
        setDOM(item => item.sort((a,b)=>
            a.popularity - b.popularity 
        ))
        console.log("sorted by popularity:",contact)
    }

    return (
        <div>
            <button type="button" onClick={addRandomContact}>Add Contact</button>
            <button type="button" onClick={sortByName}>Sort by Name</button>
            <button type="button" onClick={sortByPopularity}>Sort by Popularity</button>
            {
                contact.map((item  ) => {
                return (
                    <div>
                        <Contacts 
                            key={item.id}
                            {...item} 
                            clickToDelete={ ()=> handleDelete(item.id) }
                        />
                    </div>
                )
            })
            }
        </div>
    )
}

export default DynamicContacts; 
