import React, { Component } from 'react';
import contacts from './contacts.json';



class Contacthandler extends Component {
    
    contactInfo = (x) => {
        return <tr>
            <td> <img className="mugshots" src={contacts[x].pictureUrl}/></td>
            <td>{contacts[x].name}</td>
            <td>{contacts[x].popularity}</td>
            </tr>
    }
    
    render() {
        return (
            <>
                    {this.contactInfo(0)}
                    {this.contactInfo(1)}
                    {this.contactInfo(3)}
                    {this.contactInfo(4)}
                    {this.contactInfo(5)} 

            </>
        );
    }
}

export default Contacthandler;



// [contacts.splice(contactIterator)]
// contactArrLimit = (y) => {
//     return this.contacts.map(eachContact => {
//         return <tbody className="App"> 
//         <tr>
//         <td> <img className="mugshots" src={contactArr[i].pictureUrl}/></td>
//         <td>{contactArr[i].name}</td>
//         <td>{contactArr[i].popularity}</td>
//         </tr>
//     </tbody>
//     })
// }