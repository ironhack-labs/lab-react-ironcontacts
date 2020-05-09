import React from 'react'

function FiveCharacters(props) {
    return (
            <tr>
                <td><img src={props.pictureUrl}/></td>
                <td>{props.name}</td>
                <td>{props.popularity}</td>
            </tr>
    )
}

export default FiveCharacters
