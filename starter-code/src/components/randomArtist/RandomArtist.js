import React from "react";


const RandomArtist = (props) => {
  return (
    <div>
     <p><img src={props.pictureUrl} className="artist_face" alt="imagen artista"></img></p>        
      <p>{props.name}</p>
      <p>{props.popularity}</p>
      <button onClick={props.clickToAdd}>Add</button>
    </div>
  );
}

export default RandomArtist;