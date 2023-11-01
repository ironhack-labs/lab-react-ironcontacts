import React from "react";

function ContactCard(props) {
  return (
    
      

      <tbody>
        <tr>
          <td>
            <img src={props.picture} alt=""width={100} height={125}/>
          </td>
          <td>{props.name}</td>
          <td>{props.popularity.toFixed(2)}</td>
          <td>{props.wonOscar ? <p>🏆</p> : <p></p>}</td>
          <td>
            {props.wonEmmy ? <p> 🌟 </p> : <p></p>}
          </td>
        </tr>
        <button onClick={()=>{props.delete(props.id)}}> Delete</button>
      </tbody>
    
  );
}

export default ContactCard;