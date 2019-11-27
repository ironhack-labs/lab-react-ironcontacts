import React from 'react'

export default function Contact({ picture, name, popularity, index, clbk }) {
    return (
        <tr className="contact">
            <td><img id="img" src={picture} alt="" /></td>
            <td>{name}</td>
            <td>{popularity}</td>
            <td><button onClick={() => { clbk(index) }}>Delete</button></td>
        </tr>
    )
}
