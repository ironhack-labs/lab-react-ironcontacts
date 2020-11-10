import React from 'react';



const ActorsCard = (props) => {
    return (
        <div> 
            <tr>
                <td><img className="image" src={props.pictureUrl} alt=""/></td>
                <td>{props.name}</td>
                <td>{props.popularity}</td>
            </tr>
        </div> 
    )
}

export default ActorsCard;
    

    
        

    
