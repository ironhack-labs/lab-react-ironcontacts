
import React from 'react';
import '../styles/Contact.css'

const Contact = ({pictureUrl, name, popularity}) => {
    const popRounded = Number(popularity).toFixed(2)

    return(
        <tr className="contactRow">
            <td><img src={pictureUrl} alt="img"></img> </td>
            <td>{name}</td>
            <td>{popRounded}</td>
        </tr>
     );
    }
 
export default Contact;