// 1. IMPORTACIONES

import './App.css';
import contacts from "./contacts.json";
import React, {useState} from "react"



function App(props) {

    const contactsFromJson = contacts.slice(0,5)
    console.log(contactsFromJson)
  
    const [producers, setProducers] = useState(contactsFromJson)
  
    const randomProducer = ()=> {

      let randomNum = Math.floor(Math.random()*(contacts.length-contactsFromJson.length +1)) + contactsFromJson.length

      setProducers([...producers,contacts[randomNum]]) 

    }

    function sortByName(event){
      const sorted = producers.sort((a,b)=>{
         if(a.name > b.name) {
           return 1
         }else{
           return -1
         }
       }
       )
       console.log(sorted)
       setProducers([
         ...sorted,
       ])
       //PORQUE FUNCIONAAA???? SI TIENE EL SPREAD OPERATOR HELPPPPPPPPPPP
     }
     function sortByPopularity(){
       const sorted = producers.sort((a,b)=>{
         if(a.popularity > b.popularity) {
           return -1
         }else{
           return 1
         }
       }
       )
       console.log(sorted)
       setProducers([
         ...sorted,
       ])
     }

     function byeActor(id){
      const actorsNotGone = producers.filter((element)=>{
        return element.id !== id
      })
      setProducers([
        ...actorsNotGone
      ])
    }

  
    return (
    
    <div>

      <div>
        <button onClick={()=>sortByName()}>Sort by name</button>
        <button onClick={()=>sortByPopularity()}>Sort by popularity</button>
      </div>


    <div>
        <button onClick={()=>randomProducer()}>Add Random Contact</button>
    </div>


      {producers.map((e,id)=>{
        return(
          <div key={id}>
        <img src={e.pictureUrl}/>
        <p>Name :{e.name} </p>
        <p>Popularity :{e.popularity} </p>
        <button onClick={()=>byeActor(e.id)}>bye</button>
          </div>
        )
      })}
  
    </div>
  );
}
export default App;