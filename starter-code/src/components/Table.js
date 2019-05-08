import React from 'react'

const Table = (props) => {

  return(
    <div>
    <tr>
      <th>Photo</th>
      <th>Name</th>
      <th>Popularity</th>
      <th>Delete</th>
    </tr>
    
    <tr>
    <td><img src={props.contact.pictureUrl} alt="photoFamous" width="100px" height="150px"/></td>
    <td>{props.contact.name}</td> 
    <td>{props.contact.popularity}</td> 
    <button onClick={props.delete}>Delete</button>
    </tr>

    </div>
  )
}

export default Table;