import React from "react";

const Item = ({ name, pictureUrl, popularity, deleteOne, id }) => {
  return (
    <tbody>
      <tr>
        <td className="image">
          <img
            className="picture"
            src={pictureUrl}
            width="100"
            alt={`${name}`}
          ></img>
        </td>
        <td>
          <p className="name">{name}</p>
        </td>
        <td>
          <p className="popularity">{popularity}</p>
        </td>
        <td>
          <button className="btn" onClick={() => deleteOne(id)}>
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default Item;
