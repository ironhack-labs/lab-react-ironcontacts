import React from 'react'

function ContactCard(props) {
  return (
    <div>
      <tr key={props.id}>
                <td><img src={props.coolImage} alt='imgs' width='50' height='70'/></td>
                <td>{props.name}</td>
                <td>{props.popularity}</td> 
                <td><button onClick={props.clickToDelete}>Delete</button></td> 
              </tr>
    </div>
  )
}

export default ContactCard
