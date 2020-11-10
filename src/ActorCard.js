/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function ActorCard(props) {
  return (
    <div className="actorscard">
      <table>
        <tbody>
          <tr>
            <td>
              <img className="image" src={props.img}/>
            </td>
            <td className="name">
              <p>{props.name}</p>
              <td className="popu">
              <p>{props.popularity}</p>
            </td> 
            </td>
            
          </tr>
         
        </tbody>
        <button className="btndelete" onClick={props.delete}>Delet me</button>
      </table>
    </div>
  );
}
export default ActorCard;
