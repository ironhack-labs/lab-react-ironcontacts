import React from "react"


export const Row = props => {
  return (
        <tr>
        
        <td><img src={props.pictureUrl}/></td>

        <td>{props.name}</td>
        <td>{props.popularity}</td>
        <button onClick={props.delete}>Delete this Celeb</button>
        </tr>
  )}
        
  


