import React from 'react'
import './ActorCard.css';




const ActorCard = ({ pictureUrl, name, popularity, removeActor,id }) => {

    //3. Instrucciones lista estática: recibimos las props y las pintamos
    return (
        <tr>
            <td>
                < img class="actor-picture" src={pictureUrl} alt="actors and actress" />
            </td>
            
            <td>{name}</td>
            
            <td>{popularity}</td>

            <td><button className="button-add" onClick={() => removeActor({id})}>
                Romove 
            </button></td>
        </tr>
    )
}

export default ActorCard

/*     < img class="actor-picture"
src = {picture}
alt = "actors and actress" > */