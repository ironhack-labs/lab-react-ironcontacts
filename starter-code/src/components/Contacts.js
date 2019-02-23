import React from 'react';
import contacts from '../contacts.json'

const Contact = ({name,pictureUrl,popularity})=>{
    return(
    <tr>
    <td><img src={pictureUrl}></img></td>
    <td>{name}</td>
    <td>{popularity}</td>
    </tr>
    
  )
}

export default Contact;