import React from 'react'

//Forma avanzada destructurando props
function Card( {contactp: {name, pictureUrl, popularity}, index, deleteContact } ) {
    return (
        <tr>
            <td><img src={pictureUrl} height="100px" alt={name} /></td>
            <td>{name}</td>
            <td>{popularity.toFixed(2)}</td>   
            <td><button onClick={ ()=> deleteContact(index)} >Delete</button></td>
        </tr>
    )
}

export default Card

//Forma medio avanzada; destructuring de contact 
// function Card(props){
//     const contact = props.contactp
//     const {name, pictureUrl, popularity} = contact
//     return(
//         <tr>
//             <td><img src={pictureUrl} height="100px" /></td>
//             <td>{name}</td>
//             <td>{popularity.toFixed(2)}</td>
//         </tr>
//     )
// }

//la mas sencilla
// function Card(props){
//     const contact = props.contactp
//     return(
//         <tr>
//             <td><img src={contact.pictureUrl} height="100px" /></td>
//             <td>{contact.name}</td>
//             <td>{contact.popularity.toFixed(2)}</td>
//         </tr>
//     )
// }

