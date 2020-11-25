import React from 'react'

export default function OneTableElem(props) {
    return (
        <tr>
            <td> <img style={{width: '50px'}} src={props.detail.pictureUrl} /></td>
            <td>{props.detail.name}</td>
            <td>{props.detail.popularity.toFixed(2)}</td>
            <td><button onClick={ () => { props.deleteHandler(props.detail.id) } }>Delete</button></td>
        </tr>
    )
}