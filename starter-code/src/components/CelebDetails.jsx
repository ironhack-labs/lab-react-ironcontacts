import React from "react";

export default function CelebDetails({celeb, i, handleDelete}) {
  return (
    <tr>
      <td>
        <img alt="star" src={celeb.pictureUrl} />
      </td>
      <td>{celeb.name}</td>
      <td>{celeb.popularity.toFixed(2)}</td>
      <td><button onClick={()=>handleDelete(i)}>Delete</button></td>
    </tr>
  );
}