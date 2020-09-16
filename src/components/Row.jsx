import React from "react"


const Row = ({ pictureUrl, name, popularity, removeContact }) => {
  return (
    <tr>
      <td><img src={pictureUrl} alt=""/></td>
      <td>{name}</td>
          <td>{popularity}</td>
          <td><button onClick={removeContact}>Remove</button></td>
    </tr>
  );
};

export default Row