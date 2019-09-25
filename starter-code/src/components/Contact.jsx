import React from 'react'

//Destructuramos contact info para poder utilizarla (despues de haber definido mi prop en el componente)
const Contact = ( { contactInfo, deleteOne } ) => {
    return (
        <tr>
        <td>
            <img src={contactInfo.pictureUrl} alt={contactInfo.name} width='100px'/>
        </td>
        <td className='has-text-centered'>{contactInfo.name}</td>
        <td className='has-text-centered'>{contactInfo.popularity}</td>
        <td>
            <button className="button is-warning" onClick={() => deleteOne(contactInfo.name)}>Delete</button>
        </td>
    </tr>
    )
}

export default Contact
