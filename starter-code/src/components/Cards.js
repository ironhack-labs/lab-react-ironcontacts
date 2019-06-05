import React from "react"
import './Cards.css'

const Cards = (props) => {
  return (
    <div>
      <button onClick={props.clickToAdd}>Add Random Contact</button>
    <table>
      <tr>
        <td><img src={props.pictureUrl}/></td>
        <td>{props.name}</td>
        <td>{props.popularity}</td>
      </tr>
    </table>
    </div>
  )
}

export default Cards