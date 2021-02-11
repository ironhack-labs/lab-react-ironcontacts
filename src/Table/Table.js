import React from "react";
import Contact from "../Contact/Contact"
import contacts from '../contacts.json';
import {useState} from "react";


function Table(){
    //Hago un arr con los 5 primeros contactos
    let show5Contacts = contacts.slice(0,5);
    
    //------------------State-----------------------------
    const [newOne,setContact] = useState(show5Contacts)
    
    //Escojo un contacto random
    const randomContact = () => {
        let randomNumber = Math.floor(Math.random() * contacts.length)
        let randomContact = contacts[randomNumber]
        console.log("RandomContact",randomContact);
        return randomContact//<Contact key={randomContact.id} data = {contacts}>{randomNumber}</Contact>
    }

    //Filtro por Nombre
    const sortByName = () => {
    newOne.sort((a,b) => a.name.localeCompare(b.name))
    console.log(newOne);
    }
    
    //Filtro por Popularidad
    const sortByPopularity = () =>{
    newOne.sort((a,b) => b.popularity - a.popularity)
    }

    //Delete
    const deleteActor = (id) => {
    return newOne.filter(actor => actor.id !== id)
    }
    //------------------HANDLES------------------------

    //Actualizo el arr que se muestra 
    const handleRandomContact = () => {
        setContact([...newOne,randomContact()])
    }

    //Filtro por popularidad
    const handleSortByPopularity = () => {
        sortByPopularity(newOne)
        setContact([...newOne])
    }

    //Filtro por Nombre
    const handleSortByName = () => {
        sortByName(newOne)
        setContact([...newOne])
    }

    //Delete
    const handleDelete = (id) => {
        setContact(deleteActor(id))
    }
    return(
        <main>
        <button onClick={handleRandomContact}>Add a new one</button>
        <button onClick={handleSortByPopularity}>Sort by Popularity</button>
        <button onClick={handleSortByName}>Sort by Name</button>
            <table style={{
                width:"50%",
                margin: "0 auto"
            }}>
                <thead>
                    <tr>
                        <th>
                        Picture
                        </th>
                        <th>
                        Name
                        </th>
                        <th>
                        Popularity
                        </th>
                        <th>
                        Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {newOne.map(contact => <Contact key={contact.id} {...contact} handleDelete={() => handleDelete(contact.id)} />)}
                </tbody>
            </table>
        </main>
    );
}
export default Table;