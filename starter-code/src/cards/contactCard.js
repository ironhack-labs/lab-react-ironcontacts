import React from 'react';
import './contactCard.css'

const ContactCard= props =>{
    return(
        <tr>
            <td><img className='imgContact' src={props.pictureUrl} alt="imageContact"></img></td>
            <td>{props.name}</td>
            <td>{props.popularity}</td>
            <button onClick= {props.deleteOne}>Delete</button>
        </tr>
      
    )
}
export default ContactCard