import React from 'react'

function Contacts(props) {
  return (
    <div key={props.key}>
      <img src={props.pictureUrl} alt=""/>
      <h1>{props.name}</h1>
      <h2>{props.popularity}</h2>
      <button onClick= {props.clickToDelete} >Delete</button>  
      
    </div>
  )
}

export default Contacts
