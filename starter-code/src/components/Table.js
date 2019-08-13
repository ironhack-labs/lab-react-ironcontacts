import React from 'react'

const Table = ({ picture, name, popularity }) =>
{
  return (

        <tr>
            <td><img className="picture" src={picture} alt="foto"></img></td>
            <td>{name}</td>
            <td>{popularity}</td> 
        </tr>

  )
}

export default Table