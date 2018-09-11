import React from "react";

const Actor = props => {
  return (
    <tr>
      <td>
        <img src={props.pictureUrl} alt="" height="100" width="70" />
      </td>
      <td>
        <h3>{props.name}</h3>
      </td>
      <td>
        <h3>{props.popularity}</h3>
      </td>
      <td>
        <button onClick={() => props.deleteActor(props.index)}>Delete</button>
      </td>
    </tr>
  );
};

export default Actor;
