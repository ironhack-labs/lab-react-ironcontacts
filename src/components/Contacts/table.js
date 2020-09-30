import React from 'react'

const UserTable = props => {
    return (
        <tr>
            <td><img width='50' src={props.pictureUrl} /></td>
            <td>{props.name} </td>
            <td>{props.popularity}</td>
            <td><button onClick={props.remove}>Delete</button></td>

        </tr>
    )
}


export default UserTable