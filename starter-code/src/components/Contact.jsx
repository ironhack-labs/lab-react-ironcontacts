import React from 'react'

const Contact = ({index, pictureUrl, name, popularity}) => (
  <div className="contact-card">
    <img src={pictureUrl} alt="contact pic"/>
    <h4>{name}</h4>
    <p>{popularity}</p>
  </div>
)

export default Contact