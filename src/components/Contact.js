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

  //to add RandomContact
  const [randoms, setRandoms] = useState(contactsArr);
  function addNewOne(){
    let index = Math.floor(Math.random()*52)
    const randomOne = contacts[index]
    {index>4 && 
      setRandoms([...randoms, randomOne])
    }
  }

  //to sort array by name
  function sortByName(){
    return [...randoms].sort(function(a,b){
      return a.name.localeCompare(b.name);
    })
  }

  //to sort by populality
  function sortByPopularity(){
    return [...randoms].sort(function(a,b){
      return a.popularity - b.popularity;
    })
  }

  //to delete on
  function deleteOne (id){
    id.remove();
  }


  return(
    <div>
        <button onClick={addNewOne}>Add Random Contact</button>
        <button onClick={sortByName}>Sort by Name</button>
        <button onClick={sortByPopularity}>Sort by Name</button>
        <CardStyle className="boxes">
          {randoms.map((ele, index, arr) => {
              return (
                <div key = {index}>
                  <img src={ele.pictureUrl}></img>
                <div className="text">
                  <h2>{ele.name}</h2>
                  <p>{ele.popularity}</p>
                  <p>{ele.id}</p>
                  <button onClick={deleteOne}>Delete</button>
                </div>
                </div>
              )
          })}
        </CardStyle>
    </div>
  )
}


export default Contact;