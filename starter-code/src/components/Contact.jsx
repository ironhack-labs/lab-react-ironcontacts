import React from 'react'

const Contact = ({arrayPos, pictureUrl, name, popularity, deleteFunc}) => (
  <div className="contact-card">
    <img src={pictureUrl} alt="contact pic"/>
    <h4>{name}</h4>
    <p>{popularity}</p>
    <button name={arrayPos} onClick={deleteFunc}>Delete</button>
  </div>
)

export default Contact