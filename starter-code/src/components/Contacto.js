import React from "react";

const Contacto = (props) => {
    return (<tr className="table-row">
                <td className="table-cell">
                  <img
                    className="image"
                    src={props.pictureUrl}
                    alt={props.name}
                  />
                </td>
                <td className="table-cell">{props.name}</td>
                <td className="table-cell">{props.popularity}</td> 
                <td className="table-cell"><button onClick={props.delete}>Delete</button></td>

    </tr>)

}

export default Contacto