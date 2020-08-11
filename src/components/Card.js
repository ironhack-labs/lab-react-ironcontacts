import React from 'react'


const Card = (props) => {
    return (

        
       <table>
       
            <tbody>
           
            <tr>
            <td> <img className="img-size" src={props.pictureUrl} alt=""/></td>
            <td>{props.name}</td>
            <td>{props.popularity}</td>
            <button onClick={props.clickToDelete}>Delete</button>
            </tr>
          

            </tbody>
            </table>
           
    )
}

export default Card;





