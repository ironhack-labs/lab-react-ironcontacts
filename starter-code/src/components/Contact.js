import React from "react";

export const Contact = ({ pic, name, popu, index, deleteFunction }) => {
  return (
    <tr>
      <td>
        <img src="{pic}" alt="{name}" />
      </td>
      <td>{name}</td>
      <td>{popu.toFixed(2)}</td>
      <td>
        <button className="btn-delete" onClick={() => deleteFunction(index)}>
          Delete
        </button>
      </td>
    </tr>
  );
};
