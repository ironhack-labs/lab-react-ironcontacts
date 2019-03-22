import React from "react";

const card = ({ name, pictureUrl, popularity , clickToDelete}) => {
  return (
      <tr className="movies-list-item">
        <td>
          <img src={pictureUrl} alt={name} />
        </td>
        <td>
          <h2>{name}</h2>
        </td>
        <td>
          <h2>{popularity}</h2>
        </td>
        <td><button onClick={clickToDelete}>Delete</button></td>
      </tr>
  );
};

export default card;
