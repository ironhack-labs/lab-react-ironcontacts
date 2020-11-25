import React from 'react'
import styled from 'styled-components'

const ArtistStyles= styled.article`
display:flex;
flex-direction:row;
align-content:center;
justify-content:space-around;
margin:5px;
h3{
    width:
}

` 

export default function Artist({
    name,
    pictureUrl,
    popularity,
}){
    return <ArtistStyles>
        <img src={pictureUrl} alt="artistPic"/>
        <h3> {name} </h3>
        <h3> {popularity.toFixed(2)}</h3>
    </ArtistStyles>
}