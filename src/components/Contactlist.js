import React, {useState} from 'react'
import '../App.css';
import contactsJson from '../contacts.json';


const firstFiveContacts = contactsJson.slice(0,5)

function ContactList(props) {
    
    const [contacts, setContacts] = useState(firstFiveContacts)

   
     const randomContact = () => {
        
        const contacstOfFive =[...contacts]
        const randomContactFromCopy= contactsJson[Math.floor(Math.random() * contactsJson.length+1)]
        contacstOfFive.push(randomContactFromCopy)
        setContacts(contacstOfFive)
       // console.log(randomContactFromCopy);

     }

     const sortByName = () => {
        const contacstOfFive =[...contacts]
        contacstOfFive.sort((a, b) => a.name.localeCompare(b.name));
        setContacts(contacstOfFive)
     }

     const sortByPopularity = () => {
        const contacstOfFive =[...contacts]
        contacstOfFive.sort(function(a,b){
            
            if (a.popularity > b.popularity){
                return -1
            } 
            if (a.popularity < b.popularity){
               return 1
            }
            return 0

        });
        setContacts(contacstOfFive)
     }

     const deleteContact = (delContactItem) => {
        const contacstOfFive =[...contacts]
        const contactFound= contacstOfFive.find(item => item.id === delContactItem)
        contacstOfFive.splice(contactFound,1)
        setContacts(contacstOfFive)

     }

    return (
        <div>
        <button onClick={()=>randomContact() } className="App">Add Random Contact</button>
        <button onClick={()=>sortByName()} className="App">Sort By Name</button>
        <button onClick={()=>sortByPopularity()} className="App">Sort By Popularity</button>   
             <table>         
                <thead>              
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Action</th>
                </tr>
                </thead>   
                <tbody>
                 {contacts.map((item)=>(
                
                <tr key={item.id}>
                    <td>
                        <img src={item.pictureUrl} alt={item.name} style={{width:'50px' , height:'50px'}}/>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.popularity.toFixed(2)}</td>
                    <td><button onClick={()=>deleteContact(item.id)}>Delete</button></td>
                </tr>                         
            
            ))}
            </tbody>
     </table> 
     </div>
    ) 
}

export default ContactList
