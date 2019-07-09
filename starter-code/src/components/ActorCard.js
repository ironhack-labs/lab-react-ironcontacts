import React from 'react'

const ActorCard = props => {
    console.log(props)
    return (
            <tr className="actor-card">
                <td className="img-actor"> <img src={props.picture} alt={props.name} /></td>
                <td className="name-actor">{props.name}</td>  
                <td className="prop-actor">{props.popularity}</td>
                <td> <button onClick={() => props.clbk(props.index)}  > Delete </button> </td>
            </tr>      
    )
}

export default ActorCard;