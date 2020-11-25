import React from 'react';


export default function Card({ name, pictureUrl, popularity, deleteProd, id }) {
  return (
      <div>
      <table>

  <tr>
  <td><img src={pictureUrl} style={{height:'50px'}} /></td>
  <td><h2>{name}</h2></td>
   <td><b>{popularity}</b></td> 
   <button onClick={()=>deleteProd(id)}>Delete celeb</button> 

</tr>
</table>
</div>
  );
}