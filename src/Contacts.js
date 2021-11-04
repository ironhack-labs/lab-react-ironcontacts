import React from "react"
export function Contacts (props){

  return (
  <>
    <div>
      <div className="contact-details">
        <div><img src={props.pictureUrl} alt="actor"></img></div>
        <div>{props.name}</div>
        <div>{props.popularity}</div>
      </div>
  </div>
  </>
  )
}
