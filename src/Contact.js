import React from 'react';


function Contact(props) {
    return (
        <div>
           
                   <tr>
                        <td> <img src={props.pictureUrl} alt="profile" height="100px"/></td> 
                        <td>{props.name}</td> 
                        <td>{props.popularity}</td>
                        <td><button onClick={props.clickToDelete}> Delete</button></td>
                        </tr>
                    
            
        
        </div>
    )
}

export default Contact
