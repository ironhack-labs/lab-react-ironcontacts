import React from 'react'

export default function Row({
  name,
  pictureUrl,
  popularity,
  id,
  handleDelete
}){
  return (
      <tr>
        <td><img src={pictureUrl} alt="Profile"/></td>
        <td>{name}</td>
        <td>{(popularity.toFixed(2))}</td>
        <td><button onClick={handleDelete}>Delete</button></td>
      </tr>
  )
}