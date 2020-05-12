import React from 'react'


function Card(props) {
    return (
    
             <tr>
      <td><img src={props.pictureUrl} style={{width: 50}} alt=""/></td>
      <td>{props.name}</td>
      <td>{props.popularity} </td>
      <td><button onClick={() => props.removeContact(props.id)}>Delete</button> </td>

    </tr>
        
    )
}

export default Card

