import React from 'react'
import './Card.css'

const Card = props => {
    return (
        <tr>
            <td>
               <img src={props.pictureUrl} alt={props.name}/>
            </td>
            <td>
                {props.name}
            </td>
            <td>
                {props.popularity}
            </td>
            <td>
                <button onClick={props.removeContact}>
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default Card
