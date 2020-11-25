import React, {useState} from 'react';
import contacts from './contacts.json'
import Artist from './artist'
import styled from 'styled-components'

const ListStyle= styled.article`
display:flex;
flex-direction:column;
justify-content:center;
margin-left:35%;
width:400px;
border:solid;
.row{
    display:flex;
    flex-direction:column;
    justify-content:space-around;

}
.row img{
    width:50px;
}
header{
    display:flex;
    justify-content:space-around;
}
`



function ContactList(){
  let [Contacts, setContacts]=useState(contacts.filter((contact, index)=>index<=4))
  const addRandomContact=()=>{
      let arr=[...Contacts]
      let randomContactPosition=Math.floor(Math.random()*(contacts.length-5)+5)
      arr.push(contacts[randomContactPosition])
      setContacts(Contacts=arr)
  }

  return (
    <ListStyle>
    <h1>IronContacts</h1>
    <button onClick={()=>addRandomContact(console.log(Contacts))}>Add Random Contact</button>
    <button onClick={()=>addRandomContact(console.log(Contacts))}>Sort by name</button>
    <div className="row">
      <header><h2>Picture</h2>
      <h2>Name</h2>
      <h2>Popularity</h2></header>
    </div>
    <div className="row">
    {Contacts.map(contact=>    <Artist
    key={contact.id}
    {...contact}
    /> )}
    </div>


    </ListStyle>
  )
}

export default ContactList