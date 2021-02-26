import React from 'react'

export default function Contact({ id, pictureUrl, name, popularity, removeContact }) {
    return (
        <div key={id}>
            <tr>
      <td><img src={pictureUrl} alt={name} ></img></td>
      <td>{name}</td>
      <td>{popularity}</td>
      {/* <td><button onClick={removeContact}>Delete</button></td> */}

      </tr>
        </div>
    )
}
