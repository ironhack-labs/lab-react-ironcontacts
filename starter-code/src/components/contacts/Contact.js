import React from 'react'
import './Contact.css'

const Contact = props => {
    return (
            <tr>
                <td className="all-contacts">
                    <img className="contact-img" src={props.pictureUrl} alt={props.name}/>
                </td>

                <td className="name ">
                    {props.name}
                </td>

                <td className="popularity">
                    {props.popularity}
                </td>

                <td className="delete">
                    <button className="btn-delete" onClick={props.removeContact}>Delete</button>
                </td>
            </tr>

    )
}

export default Contact