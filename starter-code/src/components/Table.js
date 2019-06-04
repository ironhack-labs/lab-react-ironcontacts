import React from 'react';


const Table = props =>{
  return (
    
      <tr className="contacts-table">
        <td><img src={props.picture}></img></td>
        <td>{props.name}</td>
        <td>{props.popularity}</td>
      </tr>
  );
}

export default Table