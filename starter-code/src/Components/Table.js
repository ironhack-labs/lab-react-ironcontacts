import React from 'react'

function Table(props){
  return(
    <table>
      <tbody>
      <tr>
        <td>
        <img src={props.picture} width="90px"/>
        <h6>{props.name}</h6>
        <p>{props.popularity}</p>
        </td>
      </tr>
      </tbody>
    </table>
  )
}

export default Table