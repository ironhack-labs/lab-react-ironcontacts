import React from 'react'

const Table = ({ picture, name, popularity, deleteContact }) =>
{
  return (

        <tr>
            <td><img className="picture" src={picture} alt="foto"></img></td>
            <td>{name}</td>
            <td>{popularity}</td> 
            <td><button onClick= {deleteContact}>Delete</button></td>
        </tr>

  )
}

export default Table