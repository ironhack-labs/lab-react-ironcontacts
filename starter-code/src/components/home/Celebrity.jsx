// C E L E B R I T I E S   

import React from "react"

const Celebrity = ({name,pictureUrl,popularity}) => {
  return(
    
    <div className= "home-celeb-container">
        <table className= "home-celeb-table">
        <tr>
          <th>Picture</th>
          <th>Name</th> 
          <th>Popularity</th>
        </tr>
        <tr>
          <td><img src={pictureUrl} alt="photo"/></td>
          <td>{name}</td> 
          <td>{popularity}</td>
        </tr>
      </table>
    </div>
    
  )
}

export default Celebrity