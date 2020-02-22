import React from "react";

export default function CelebDetails({celeb, i, handleDelete}) {
  return (
    <tr className="each-contact">
      <td>
        <img alt="star" src={celeb.pictureUrl} />
      </td>
      <td>{celeb.name}</td>
      <td>{celeb.popularity.toFixed(2)}</td>
      <td><button class="btn btn-delete" onClick={()=>handleDelete(i)}>Delete</button></td>
    </tr>
  );
}