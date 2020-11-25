import React, {useState} from 'react';
import contacts from './contacts.json'
import Artist from './artist'
import styled from 'styled-components'

const ListStyle= styled.article`
display:flex;
flex-direction:column;
justify-content:center;
margin-left:35%;
width:500px;
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
  const sortByName=()=>{
    let arr = [...Contacts]
    arr.sort((a,b) => {
      return a.name.toString().localeCompare(b.name)
    })
    setContacts(Contacts=arr)
  }
  const sortByPopularity=()=>{
      let arr=[...Contacts]
      arr.sort(function(a,b){
          return b.popularity-a.popularity
      })
      setContacts(Contacts=arr)
  }

  const deleteContact=id=>setContacts(
      Contacts.filter(el=>el.id!==id)
  )

  return (
    <ListStyle>
    <h1>IronContacts</h1>
    <header>
    <button onClick={addRandomContact}>Add Random Contact</button>
    <button onClick={sortByName}>Sort by name</button>
    <button onClick={sortByPopularity}>Sort by Popularity</button>
    </header>
    <div className="row">
      <header><h2>Picture</h2>
      <h2>Name</h2>
      <h2>Popularity</h2>
      <h2>Action</h2></header>
    </div>
    <div className="row">
    {Contacts.map(contact=>    <Artist
    key={contact.id}
    {...contact}
    Delete={()=>deleteContact(contact.id)}
    /> )}
    </div>


    </ListStyle>
  )
}

export default ContactList