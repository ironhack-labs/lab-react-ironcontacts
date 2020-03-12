import React from "react";

export const Row = ({ check, setChecked, children }) => {
  return (
    <tr>
      <td>
        <img className="picture" src={children.pictureUrl}></img>
      </td>
      <td>{children.name}</td>
      <td>{children.popularity.toFixed(2)}</td>
      <td>
        <input
          onChange={e => setChecked(!check)}
          checked={check}
          type="checkbox"
        />
      </td>
    </tr>
  );
};
