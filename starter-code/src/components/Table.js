import React from 'react';


const Table = props =>{
  return (
    <tr className="contacts-table">
      <td>
        <img src={props.picture} alt="Artist" />
      </td>
      <td>{props.name}</td>
      <td>{props.popularity}</td>
      <td><button onClick={props.DeleteOneArtist}>Eliminar</button></td>
    </tr>
  );
}

export default Table