import React from 'react'
import  '../App.css';

 const ArtistId = props => {
   
        return (
            
        <table className="border">
        <tr>
            
        </tr>
            <tr>
                
                <th>
                    <h2>Picture</h2>
                    </th>
                  <th>
                    <h2>Name</h2>
                    </th>
                    <th>
                    <h2>Popularity</h2>
                    </th>
                
            </tr>
            <tr>
                <td>
                    <p><img src={props.pictureUrl} className="artist_face" alt="imagen artista"></img></p>
                </td>
                <td>
                    <p>{props.name}</p>
                </td>
                <td>
                    <p>{props.popularity}</p>
                </td>
            </tr>
        </table>
        )
}

export default ArtistId;