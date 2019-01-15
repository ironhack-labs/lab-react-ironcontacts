import React from "react";
import PropTypes from 'prop-types';

export const ItemContacto =({item,index,onDelete})=> {
    return (
      <tr>
        <td>
          <figure className="image is-4by5">
            <img src={item.pictureUrl} alt={item.name} />
          </figure>
        </td>
        <td>{item.name}</td>
        <td>{item.popularity.toFixed(2)}</td>
        <td>
          <button onClick={()=>onDelete(index)} className="delete">Delete</button>
        </td>
      </tr>
    );
  
}

ItemContacto.propTypes ={
  onDelete: PropTypes.func,
}
