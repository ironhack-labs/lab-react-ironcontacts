import React from 'react'
import Celeb from "./celeb.css"

function Celebs(contacts,key,) {
    return (
        <tr id="flex-em">
            <td><img src={contacts.pictureUrl} alt={contacts.name} /></td>
                <td>{contacts.name}</td>
                <td>{contacts.popularity.toFixed(1)} </td>
                <td><button onClick={contacts.clickToDelete}>Delete!</button></td>
              </tr> 
    )
}

export default Celebs;