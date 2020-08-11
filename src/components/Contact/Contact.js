import React from 'react'



const Contact = (props) => {
    const {pictureUrl, name, popularity, id } = props.contact
    return (
        <tr>
            <td>
                <img style={{width: 100}} className='table-img' src={pictureUrl} alt="contact" />
            </td>
            <td className='table-name'>{name}</td>
            <td className='table-popularity'>{popularity.toFixed(2)}</td>
            <td><button onClick={() => props.clickToDelete(id)}>Delete</button></td>
        </tr>
    )
}

export default Contact
