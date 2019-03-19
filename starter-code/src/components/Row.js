

import React from 'react'

export default function Row(props) {
  return (
    <tr>
      <td><img src={props.pictureUrl}></img></td>
      <td>{props.name}</td>
      <td>{props.popularity.toFixed(2)}</td>
      <td><button onClick={props.clickToDelete}>DELETE</button></td>
    </tr>
  )
}
