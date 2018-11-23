import React from "react";

const Item = ({ item, deleteItem, index }) => (
  <tr>
    <th>
      <img src={item.pictureUrl} alt={item.name} width="100" height="auto"/>
    </th>
    <th>{item.name}</th>
    <th>{item.popularity}</th>
    <th><button onClick={()=>deleteItem(index)}>Delete</button></th>
  </tr>
);

export default Item;
