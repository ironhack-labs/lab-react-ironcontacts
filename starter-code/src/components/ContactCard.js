import React from 'react';


const ContactCard = (props) => {
    return (
        
            
            <tr>
            <th>  <img src={props.pictureUrl} alt="contact_image"></img></th>
            <th>  <h2>Name : {props.name}</h2></th>
            <th>  <p>Popularity: {props.popularity}</p></th>
            <th>    <button className='btn' onClick={props.clickToDelete}>Delete</button>      </th>
            
            </tr>
            


    )
};

export default ContactCard;  