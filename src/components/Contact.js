import React from 'react'

export default function Card({
  name,
  pictureUrl,
  popularity,
  id
}) {
  return (<tr>
    <td>
      <img src={pictureUrl}/>
    </td>
    <td>
      <p>{name}</p>
    </td>
    <td>
      <p>{popularity}</p>
    </td>
  </tr>)
}