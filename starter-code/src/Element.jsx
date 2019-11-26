import React from "react";
export default function Element({ picture, name, popularity, clbk, index }) {
  return (
    <tr>
      <td>
        <img id="img" src={picture} alt={name} />
      </td>
      <td>{name}</td>
      <td>{popularity}</td>
      <td>
        <button onClick={() => {clbk(index)}}>Delete</button>
      </td>
    </tr>
  );
}
