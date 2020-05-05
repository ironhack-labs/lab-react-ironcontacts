import React from 'react'
import './Contacts.css'

const Contacts = ({pictureUrl, name, popularity, removeContact}) => {

        return (
            <tr>
                <th><img src={pictureUrl} alt=""/></th>
                <th>{name}</th> 
                <th>{popularity}</th>
                <th><button onClick={removeContact}>Borrar</button></th>
            </tr>
        )    
 }

 export default Contacts