import React from "react"


function Card(props) {


return props.contacts.map((item,index) => {
  
  return <div>
  <li key={index}>{<img src={item.pictureUrl} alt={item.name} width="5%"/>}{item.name}{item.popularity}</li>
  <button onClick={props.delete(index)}>delete</button>
  </div>
  
})

}




export default Card