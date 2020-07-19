import React from 'react'
import AllContacts from './AllContacts'


export default function Contacts(props) {
    return (
        <div>
        <table>
        <td><img className='contact-img' src = {props.pictureUrl} alt ='contact-img'/></td>
        <td><h2>Name: {props.name}</h2></td>
        <td><h3>Popularity:{props.popularity}</h3></td>
        <td><button onClick={props.clickToDelete}>Delete this contact</button></td>
      </table>
            
        </div>
    )
}
