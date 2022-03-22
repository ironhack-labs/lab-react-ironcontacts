const Character = ({ name, pictureUrl, popularity,  }) => {
    return (
        <tbody>
          <tr>
            <th scope="row">
            <img style={{height:150}}src={pictureUrl}></img>
            </th>
            <td>{name}</td>
            <td>{popularity.toFixed(2)}</td>
          </tr>
       </tbody>    
    )
  }
  
  export default Character

  