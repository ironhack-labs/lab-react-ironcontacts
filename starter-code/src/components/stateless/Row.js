import React from 'react'

export default function Row(props) {
  return (
    <tr> 
        <td>{props.name}</td>
        <td><img src={props.pictureUrl} alt="actor"/></td>
        <td>{props.popularity}</td>
    </tr>
  )
}
