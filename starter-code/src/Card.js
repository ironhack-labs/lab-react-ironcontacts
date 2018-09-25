import React from 'react';




const card = (props) => {

   

  return (
    <div className="card">
    <div className="container">
    <div className="row fix-this">
      {/* <p> {props.pictureUrl}</p> */}
      {<img  style={{margin: '10px'}} id="fix-the-images" src= {props.pictureUrl} />}
      <h2 style={{width : '200px'}}>{props.name}</h2>
      <p>{props.popularity} </p>
      <button style={{height : '20px'}} onClick = {()=> props.deleteClickHandler()}>Delete</button>
    </div>
    </div>



    </div>
  )
};







export default card;