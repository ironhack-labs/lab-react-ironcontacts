import React, { Component } from 'react'

const Cards = props => {
    return (
        <tr>
            <td><img class='photo' src={props.pictureUrl} alt={props.name} /></td>
            <td>{props.name}</td>
            <td>{props.popularity}</td>
            <button onClick={props.deleteContact}> Delete </button>

        </tr>
    )
}

export default Cards

