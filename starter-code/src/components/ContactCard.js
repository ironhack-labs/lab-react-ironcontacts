import React from 'react';


const ContactCard = props => {


    return (
       
    <table>
    
      <thead>
      <tr>
      <th>Picture</th>
      <th>Name</th> 
      <th>Popularity</th>
      </tr>
      </thead>
      <tbody>
      <tr className="movies-list-item">
            
           <td><img src={props.pictureUrl}/></td> 
           <td>{props.name}</td> 
           <td>{props.popularity}</td>
        </tr>
      </tbody>
      </table>
        
    )
};

export default ContactCard;