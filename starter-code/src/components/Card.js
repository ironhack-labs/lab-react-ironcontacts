import React from 'react';


const Card = ({ name,pictureUrl, popularity}) =>{
  console.log(name)
  return (
    <div>
      

      <table className="">
      <tr>
       
        <th><img src={pictureUrl}></img></th>
        <th>{name}</th>
        <th>{popularity}</th>
      </tr>
      </table>
    </div>
  )
}


export default Card;
