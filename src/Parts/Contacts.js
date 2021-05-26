import React from 'react'

export default function Contacts(props) {
  return (
    <div>
      <h3>Picture</h3>
      <img src={props.img} alt=""/>
      <h3>Name</h3>
      <p>{props.name}</p>
      <h3>Popularity</h3>
      <p>{props.popularity}</p>
    </div>
  )
}
