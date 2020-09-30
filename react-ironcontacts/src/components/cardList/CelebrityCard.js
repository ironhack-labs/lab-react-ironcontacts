import React from 'react'
import './celebrityCard.css'

const CelebrityCard = ({ name, pictureUrl, popularity, deleteCard }) => {

    return (
        <tr className="article-cards">
            <td class="img-class"><img className="img-celebrity" src={pictureUrl} alt={name} ></img></td>
            <td class="prop-class">{name}</td>
            <td class="prop-class">{popularity}</td>
            <button type="button" class="btn btn-danger" onClick={deleteCard}> (Delete card) </button>
        </tr>
    )
}
export default CelebrityCard