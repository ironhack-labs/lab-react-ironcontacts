const Character = ({ name, pictureUrl, popularity, wonOscar, wonEmmy }) => {
    return (
        <tbody>
          <tr>
            <th scope="row">
            <img style={{height:150}}src={pictureUrl}></img>
            </th>
            <td>{name}</td>
            <td>{popularity.toFixed(2)}</td>
            <td>{ (wonOscar===true)
               ? <div>🏆</div> 
               : null} </td>
            <td>{ (wonEmmy ===true)
               ? <div>🏆</div> 
               : null} </td>
          </tr>
       </tbody>    
    )
  }
  
  export default Character

  