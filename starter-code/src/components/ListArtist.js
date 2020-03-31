import React from 'react'
import contacts from '../contacts.json';
import ArtistId from "./ArtistId";



const ListArtist = props => {
  
  

   let artists = [...contacts].slice(0,5);
   
    return (
      <div>
        <div>
          
        </div>
      <ul>
          {artists.map((oneArtist, index) => (
            <ArtistId key={index} pictureUrl={oneArtist.pictureUrl} name={oneArtist.name} popularity={oneArtist.popularity} />
          ))}
      </ul>
      </div>
    )
}

export default ListArtist
