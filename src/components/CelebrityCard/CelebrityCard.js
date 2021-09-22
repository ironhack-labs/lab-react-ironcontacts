import React from 'react'
import './CelebrityCard.css'

const CelebrityCard = ({name, imgUrl, popularity, id, deleteContact}) => {
   
    return (
      
      <li className="celebrityCardContainer">
        <img src={imgUrl} className="celebrity-picture" alt='contact id'/>
        <h1>Name:{name}</h1>
        <p>Popularity:{popularity}</p>
        <button onClick={() => deleteContact(id)}>Delete contact</button>
      </li>        
      )
  }

export default CelebrityCard
