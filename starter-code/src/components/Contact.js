import React from 'react'

export default function getContact({name, pictureUrl, popularity}){
    return <div>
        <section>
                <img src= {pictureUrl} width= "100" alt=""/>
                <p>{name}</p>
                <p>{popularity}</p>
        </section>
    </div>
}