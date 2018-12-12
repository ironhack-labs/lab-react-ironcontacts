import React from 'react'

const Table = ({name, pictureUrl, popularity, deleteContact}) =>{

    return(
        <tr>
            <td>{name}</td>
            <td><img src={pictureUrl} alt="Foto"/></td>
            <td>{popularity}</td>
            <td><button className="botones" onClick={deleteContact}>Delete</button></td>
        </tr>
    )
}

export default Table