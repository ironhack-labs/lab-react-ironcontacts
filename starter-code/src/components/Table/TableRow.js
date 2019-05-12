import React from "react";
import "./TableRow.css";

const TableRow = ({ pictureUrl, name, popularity, handleDelete }) => (
  <tr>
    <td>
      <img className="imgRow" src={pictureUrl} alt={name} />
    </td>
    <td className="uk-text-bold uk-text-middle uk-text-large">{name}</td>
    <td className="uk-text-middle uk-text-large">{popularity.toFixed(2)}</td>
    <td className="uk-text-middle">
      <button className="uk-button uk-button-danger" onClick={handleDelete}>
        Delete
      </button>
    </td>
  </tr>
);

export default TableRow;
