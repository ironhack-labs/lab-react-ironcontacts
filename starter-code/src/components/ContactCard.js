import React from "react";
const ContactCard = (props) => {

  return  (
    <div className="contact">
      <img className="contact-image" src={props.pictureUrl}/>
      <span className="contact-name"> {props.name} </span>
      <span> {Math.floor(props.popularity*100)/100 } </span>
      <button onClick={props.clickToDelete}>Delete</button>
    </div>
  )
}

export default ContactCard;