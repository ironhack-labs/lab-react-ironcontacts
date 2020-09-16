import React,{useState} from "react";
import contacts from '../contacts.json';
import styled from "styled-components";

const CardStyle = styled.div`
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
    margin:0 auto;
    img{
      width:200px;
      object-fit:cover;
    }
    .text{
      margin:30px auto;
    }
`



const Contact = ()=>{ 
  let contactsArr = [...contacts].slice(0,5);
  
  const [array, setContacts] = useState(contactsArr);

  //to add RandomContact
  function addNewOne(){
    let index = Math.floor(Math.random()*52)
    const randomOne = contacts[index]
    {index>4 && 
      setContacts([...array, randomOne])
    }
  }

  //to sort array by name
  const [ar, setSort] = useState([]);
  function sortByName(ar){
   ar.sort((a,b)=>{
     return a.name.localeCompare(b.name);
   })
   setSort([...ar])
  }

  //to sort by populality
  const [arr, setSortbyPopulality] = useState([]);
  function sortByPopulality(arr){
   arr.sort((a,b)=>{
     return b.popularity - a.popularity ;
   })
   setSortbyPopulality([...arr])
  }

  //to delete on
  function deleteContact(index){
    let arr = array;
    arr.splice(index,1);
    setContacts([...arr])
  }


  return(
    <div>
        <button onClick={addNewOne}>Add Random Contact</button>
        <button onClick={()=>{sortByName(array)}}>Sort by Name</button>
        <button onClick={()=>{sortByPopulality(array)}}>Sort by Popularity</button>
        <CardStyle className="boxes">
          {array.map((ele, index, arr) => {
              return (
                <div key = {index}>
                  <img src={ele.pictureUrl}></img>
                <div className="text">
                  <h2>{ele.name}</h2>
                  <p>{ele.popularity}</p>
                  <p>{ele.id}</p>
                  <button onClick={()=>{deleteContact(index)}}>Delete</button>
                </div>
                </div>
              )
          })}
        </CardStyle>
    </div>
  )
}


export default Contact;