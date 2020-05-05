import React from "react"
import "./Row.css"

const Row = ({ pictureUrl, name, popularity, removeContact }) => {
  return (
    <tr className="row">
      <td><img src={pictureUrl} alt="contact"/></td>
      <td>{name}</td>
          <td>{popularity}</td>
          <td><button onClick={removeContact}>Remove</button></td>
    </tr>
  );
};

export default Row


