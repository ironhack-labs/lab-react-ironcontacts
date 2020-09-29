import React from 'react'
import './celebrityCard.css'


const CelebrityCard = ({ name, pictureUrl, popularity, deleteCard }) => {

    return (
        <article className="article-cards">
            <h5>{name}</h5>
            <img className="img-celebrity" src={pictureUrl}></img>
            <p>{popularity}</p>
            <button onClick={deleteCard}> (Delete card) </button>
        </article>
    )
}

export default CelebrityCard