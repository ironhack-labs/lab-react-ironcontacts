import React from 'react'

function Contact(props) {


  console.log('props in Contact :>> ', props);
  
  return (
        <tr>
            <td><img style ={{width:50}} src={props.pictureUrl} alt=""/></td>
            <td>{props.name}</td>
            <td>{props.popularity}</td>
        <td>
        <button onClick={() => props.removeContact(props.id)} className="btn-delete"> Delete </button>
        </td>
        </tr>
  )
}

export default Contact
