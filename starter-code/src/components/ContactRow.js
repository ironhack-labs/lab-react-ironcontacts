import React from 'react'

export default function ContactRow(props) {
    //TODO add good alt description
    return (
        <tr>
            <td><img src={props.pictureUrl} alt='actor' /></td>
            <td>Name1</td>
            <td>Popularity1</td>
        </tr> 
    )
}
