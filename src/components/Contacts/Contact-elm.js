import React from 'react'

import './Contact-elm.css'

const ContactElm = ({name, pictureUrl, popularity, delContact, id}) => {
    return (
        <tr>
            <td><img className='contactImg' alt='img' src={pictureUrl}></img></td>
            <td>{name}</td>
            <td>{popularity}</td>
            <td><button onClick={delContact}>Remove</button></td>
        </tr>
    )
}

export default ContactElm