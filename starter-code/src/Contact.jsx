import React from "react";
import Button from "./Button";

export default function contact({ pictureUrl, name, popularity, deleteOne }) {
  const btnDelete = "Delete";
  return (
    <React.Fragment>
      <tr>
        <td>
          <img className="pic" src={pictureUrl} alt={name} />
        </td>
        <td>
          <h2>{name}</h2>
        </td>
        <td>
          <h2>{popularity}</h2>
        </td>
        <td>
          <Button handleClick={deleteOne} color="tomato">
            {btnDelete}
          </Button>
        </td>
      </tr>
    </React.Fragment>
  );
}
