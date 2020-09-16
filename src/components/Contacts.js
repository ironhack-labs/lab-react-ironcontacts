import React, {useState} from "react"
import contacts from '../contacts.json';

function Contact(){
    let contactFirst = []
    for (let i = 0; i < 5; i++){
        contactFirst.push(contacts[i])
    }
    const [contacsStars, setContacsStars] = useState(contactFirst)
    
    function addRandomContac(){
        let random =Math.floor(Math.random() * (contacts.length - 6))
        let newContact = contacts[random]
        setContacsStars([...contacsStars, newContact])
    }

    function sortByName(){
        setContacsStars([...contacsStars].sort((a, b) => a.name.localeCompare(b.name)))
    }

    function sortByPopularity(){
        setContacsStars([...contacsStars].sort((a, b) => b.popularity - a.popularity))
    }

    function deleteContact(id){
        setContacsStars(contacsStars.filter(contact => contact.id != id))
    }

    return(
        <div>
            <button onClick={addRandomContac}>Add Random Contact</button>
            <button onClick={sortByName}>Sort by name</button>
            <button onClick={sortByPopularity}>Sort by popularity</button>
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
                    {contacsStars.map(e => (
                        <tr key={e.id}>
                            <td><img src={e.pictureUrl} style={{width: 160}}></img></td>
                            <td>{e.name}</td>
                            <td>{e.popularity}</td>
                            <td><button onClick={() => deleteContact(e.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table> 
        </div>

    )
}

export default Contact