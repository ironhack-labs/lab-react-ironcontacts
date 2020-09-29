import React from 'react';
import Contact from "../contacts.json"
import "./card.css"

const ContactCard = props =>{


    return(
        <>
       <tr>
                <td>
            <img src={props.picture}></img>
            </td>
            <td>
            <p>{props.name}</p>
           </td>
            <td>
                <p>{props.popularity}</p>
            </td>
            <td>
            <button onClick={props.removeActor}>Eliminar actor</button>
            </td>
            </tr>
        
    </>
    )
}

export default ContactCard