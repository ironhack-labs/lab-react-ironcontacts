import React from 'react';

const ContactCard = (props) => {


    return (

        <>
            <tr>
                <td className="space"><img className="tableImg" src={props.pictureUrl} alt="Famosito"/></td>
                <td>{props.name}</td>
                <td>{props.popularity}</td>    
                <td><button className="btn btn-small btn-danger" onClick={props.deleteContact}>Delete</button></td>    

            </tr>  

        </>    
    )
};

export default ContactCard