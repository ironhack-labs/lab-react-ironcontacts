import React from 'react'

 const OneElementTable = ({pictureUrl, name, popularity, deleteContact }) => {
    return (
        <tr>
            <td><img style={{width: '50px'}} src={pictureUrl} /></td>
            <td>{name}</td>
            <td>{popularity.toFixed(2)}</td>
            <td><button onClick={deleteContact}>Delete Contact</button></td>
            
        </tr>
    )
} 

export default OneElementTable