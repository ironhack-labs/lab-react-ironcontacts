import React from "react";

export const ItemContacto = ({index,item}) => {
  
  return (
    <tr>
      <td>
        <figure className="image is-4by5">
        <img src={item.pictureUrl} alt={item.name}/>
        </figure>
      </td>
      <td>{item.name}</td>
      <td>{item.popularity.toFixed(2)}</td>
    </tr>
  );
};
