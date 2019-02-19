import React from "react";

function Table(props) {
  let actorList = props.contacts.map((actor, index) =>
    <tr>
      <td><img src={actor.pictureUrl} height='100px'/></td>
      <td>{actor.name}</td> 
      <td>{actor.popularity}</td>
      <td><button onClick={() => props.deleteThisOne(index)}>Delete</button></td>
    </tr>
  );

  return (
  <table>
    <tbody>
    <tr>
      <th>Picture</th>
      <th>Name</th>
      <th>Popularity</th>
      <th>Action</th>
    </tr>
    {actorList}
    </tbody>
  </table>
  );
}

export default Table;