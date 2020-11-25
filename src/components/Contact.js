import React from 'react'

export default function Card({
  name,
  pictureUrl,
  popularity,
  handleDelete
}) {
  return (<tr>
    <td>
      <img src={pictureUrl}/>
    </td>
    <td>
      <p>{name}</p>
    </td>
    <td>
      <p>{popularity.toFixed(2)}</p>
    </td>
    <td>
      <button onClick={handleDelete}>✖</button>
    </td>
  </tr>)
}