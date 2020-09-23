import React from 'react';
import './Celeb.css';

export default function Celeb(props) {
   // console.log(typeof(props))
   // console.log(props.celebreties)

    const celebs = props.celebreties.map(celeb => {
     
        return (
            
                                    <tr key={celeb.id}>
                                        <th><img src={celeb.pictureUrl} alt="" className="celebimg"/></th>
                                        <th>{celeb.name}</th>
                                        <th>{celeb.popularity.toString().slice(0,5)}</th>
                                    </tr>
        )

    });

    return (
        <tbody>
            {celebs}
        </tbody>
    )
}
