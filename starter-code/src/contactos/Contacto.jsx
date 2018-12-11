import React from "react";
const Contacto = ({ pictureUrl, name, popularity }) => {
  return (
      <tr className="Lista-Contacto">
        <td><img src={pictureUrl} /></td>
        <td>{name}</td>
        <td>{popularity.toFixed(2)}</td>
      </tr>
  )
};

export default Contacto;
