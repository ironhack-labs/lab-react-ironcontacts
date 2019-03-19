import React from 'react'

const Tbody = props => {
    return (
        <tbody>
            <tr>
                <td><img src={props.pictureUrl} className="contact-photo" alt="logo" /></td>
                <td>{props.name}</td>
                <td>{props.popularity.toFixed(2)}</td>
                <td><button onClick={props.clickToDelete} className="delete-button button">Delete</button></td>
            </tr>
        </tbody>
      )
}

export default Tbody