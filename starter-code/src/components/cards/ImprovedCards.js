import React from "react";
import "./Card.css";

const CardImproved = props => {
  return (
    <div className="improvedContactCard">
      <table>
        <tbody>
          <tr>
            <td>
              <img src={props.pictureUrl}></img>
            </td>
            <td>
              <p>{props.name}</p>
            </td>
            <td>
              <p> {props.popularity}</p>
            </td>
          </tr>
        </tbody>
        {/* En caso de disponer de un valor truthy, ejecuta el bloque derecho */}
      </table>
      <button onClick={props.deleteOneContact}>Eliminar contacto</button>
    </div>
  );
};

export default CardImproved;
