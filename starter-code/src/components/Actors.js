
import React from "react";

const Actors = ({pictureUrl, name, popularity, clickDelete}) => {
  return (
    <tr>
      <td>
        <img src={pictureUrl} alt={name} />
      </td>
      <td>{name}</td>
      <td>{popularity.toFixed(2)}</td>
      <td>
        <button onClick={clickDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default Actors