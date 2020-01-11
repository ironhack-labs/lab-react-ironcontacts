
import React from 'react';
import '../styles/Contact.css'

const Contact = ({pictureUrl, name, popularity, deleteContact}) => {
    const popRounded = Number(popularity).toFixed(2)

    return(
        <tr className="contactRow">
            <td><img src={pictureUrl} alt="img"></img> </td>
            <td>{name}</td>
            <td>{popRounded}</td>
            <td><button onClick={deleteContact}>delete</button></td>
        </tr>
     );
    }
 
export default Contact;