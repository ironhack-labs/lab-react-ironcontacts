import React from "react";
import "./styles/card.css";

const contactCard = props => {
  return (
    <tr>
      
        <td>
          <img src={props.pictureUrl} alt={props.name}></img>
        </td>
        <td className="name">{props.name}</td>
        <td>{props.popularity}</td>
        <td>
          {" "}
          <button onClick={props.deleteContact} className="">
            Eliminar Contacto
          </button>
        </td>
     
    </tr>
  );
};

export default contactCard;
