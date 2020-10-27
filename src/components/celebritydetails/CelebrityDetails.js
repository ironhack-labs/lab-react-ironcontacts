import React from 'react'

import './CelebrityDetails.css'

const CelebrityDetails = (props) => {
    return (
            <tr>
                <td><img src={props.details.pictureUrl} alt={`img of ${props.details.name}`}/></td>
                <td>{props.details.name}</td>
                <td>{props.details.popularity.toFixed(2)}</td>
                <button onClick={ () => {props.deleteFunc(props.details.id)} }>Delete</button>                
            </tr>
    )
}

export default CelebrityDetails