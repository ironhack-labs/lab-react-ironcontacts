import React from 'react';
import "./table.scss"

const Table = props => {
  return (    
    <tbody className="table-body">
     <tr>
       <td><img src={props.pictureUrl} alt="" /></td>
       <td><p>{props.name}</p></td>
       <td><p>{props.popularity.toFixed(2)}</p></td>
       <td><button type="button" onClick={props.delete}>Delete</button></td>
     </tr>  
    </tbody>   
  )
}

export default Table
