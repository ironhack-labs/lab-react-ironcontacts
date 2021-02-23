import './Contacts.css'
import React from 'react';



const Contacts = ({ pictureUrl, name, popularity, removeFamous }) => {
    return (
        <tr>
            <td><img style={{ width: 60 }} src={pictureUrl} alt={name}/></td>
            <td>{name}</td>
            <td>{popularity}</td>
            <button onClick={removeFamous}>Eliminar famoso</button>
            {/* <td>{popularity.toFixed(2)}</td> por que no funciona esto?? */}
        </tr>
    )
}

export default Contacts