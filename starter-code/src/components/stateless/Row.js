import React from "react"
import "./Row.css"

export const Row = props => {
  return (
        <tr>
          <td><img src={props.pictureUrl}/></td>
          <td>{props.name}</td>
          <td>{props.popularity.toFixed(2)}</td>
          <button onClick={props.delete}>Delete this Celeb</button>
        </tr>
  )}
        
  


