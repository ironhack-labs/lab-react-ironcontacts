import React,{useState} from 'react'
import styled from "styled-components"

const ActorCardStyles =  styled.tr`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 50px 100px;
    
    img{
        width: 100px;
    }
    td{
        padding: 0 50px;
    }
`

function ActorCard({pictureUrl,name,popularity}){
    const [getActorCard,setActorCard] = useState()

    return (
        <ActorCardStyles className="ActorCard">
            <td><img src={pictureUrl} alt={name}/></td>
            <td>{name}</td>
            <td>{popularity}</td> 
            <td><button>Remove</button></td>
        </ActorCardStyles>
    )
}

export default ActorCard
