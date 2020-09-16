import React, {useState} from 'react'
import contacts from '../contacts.json'
import styled from "styled-components"

const StyledDiv = styled.div`
img {
    width: 50px;
}
`

const Contacts = () => {


let firstFive = []
 for(let i = 0; i < 5; i ++){
     firstFive.push(contacts[i])
 }

 const [contactActors, setContactActors] = useState(firstFive)

 const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * (contacts.length))
    setContactActors([...contactActors, contacts[randomIndex]])
 }

 const sortName = () => {
    setContactActors([...contactActors].sort((a,b) => 
        a.name.localeCompare(b.name)
    ))
 }

 const sortPopularity = () => {
    setContactActors([...contactActors].sort((a,b) => 
        b.popularity - a.popularity 
    ))
 }

 const handleRemove = (index) => {
    //  const contactsCopy = contactActors
    //  contactActors.splice(index, 1)
    //  setContactActors([...contactsCopy])
    setContactActors(contactActors.filter((contact, i) => i !== index))
 }


    return ( 
        <StyledDiv>
            <h1><b>Iron Contacts</b></h1>
            <button onClick={handleRandom}>Add random contact</button>
            <button onClick={sortName}>Sort by name</button>
            <button onClick={sortPopularity}>Sort by popularity</button>
                
                <table>
                    <thead>
                    <tr>
                        <th><b>Picture</b></th>
                        <th><b>Name</b></th>
                        <th><b>Popularity</b></th>
                    </tr>
                    </thead>
                    <tbody>
                    {contactActors.map((star, index) =>  (
                        
                <tr key={index}>
                    <td><img src={star.pictureUrl}/></td>
                    <td>{star.name}</td>
                    <td>{star.popularity}</td>
                    <td><button onClick={() => handleRemove(index)}>Delete</button></td>
                </tr>
                
                
                    ))}
                    </tbody>
                    
                </table>
        </StyledDiv>
    )
}

export default Contacts