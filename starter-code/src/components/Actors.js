import React from "react";

const Actors = ({ name, pictureUrl, popularity }) => {
  return (
    <tr>
      <td>
        <img src={pictureUrl} alt="lasd" width="100px" />
      </td>
      <td>{name}</td>
      <td>{popularity}</td>
    </tr>
  );
};

export default Actors;
