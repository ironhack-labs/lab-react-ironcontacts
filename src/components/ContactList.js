import React from "react"
import './ContactList.css'

const ContactList = ({contacts}) =>{
    return (
        <div className="ContactList">
            <h1>Contact List</h1>
            <table className="ContactList">
                
            {/* Cabecera tabla */}
            <thead>
           <tr>
             <th>Picture</th>
               <th>Name</th>
             <th>Popularity</th>
           </tr>
            </thead>
                {/* Fin cabecera tabla */}

            
                    
            {contacts.map(contact => (
                <div key={contact.id}>
                    <tbody>
                <tr>    
                    <td><img src={contact.pictureUrl} alt={contact.name} /></td>
                    <td>{contact.name}</td>
                            <td>{contact.popularity.toFixed(2)}</td>
                </tr>
                    </tbody>
            </div>
            ))}
                
            </table>
        </div>
   
    //       
            
    //     <table className="ContactList">
    //             <thead>
    //       <tr>
    //           <td><strong>Picture</strong></td>
    //           <td><strong>Name</strong></td>
    //         <td><strong>Popularity</strong></td>
    //       </tr>
    //             </thead>
    //      <tbody>
    //         <tr>
    //           <td><img src={pictureUrl} alt="Celebrity"></img></td>
    //           <td>{name}</td>
    //           <td>{popularity}.toFixed(2)</td>
    //         </tr>
    //     </tbody>

    //     </table>
    
    //  
    )
}
export default ContactList;