import React from "react"


function OneContact({ name, picture, pictureUrl, popularity, id, wonOscar, wonEmmy }) {
    
    return (
              <tr>
                <td className='fs-2'>{name}</td>
                <td><img width="100px" src= {pictureUrl} alt='actor'></img></td>
                <td className='fs-3'>{popularity.toFixed(2)}</td>
                <td>{id}</td>
                <td>{wonOscar ? "🏆" : ""}</td>
                <td>{wonEmmy}</td>
                {/* <td><button onClick={onDelete} className="btn btn-danger">Delete</button></td> */}
              </tr>
      )
    }
    
    export default OneContact