import React from 'react'
import './Contact.css'

const Contact = ({ name, pictureUrl, popularity }) => {

    return (
        <tr className='contactLine'>
            <td>
                <figure>
                    <img src={pictureUrl} alt={name} />
                </figure>
            </td>
            <td>
                <p>{name}</p>
            </td>
            <td>
                <p>{popularity}</p>
            </td>
            <td>
                <button onClick={this.sortByPopularity}>DELETE</button>
            </td>
        </tr>
    )



}

export default Contact
