import './App.css';
import contacts from "./contacts.json";
import React, {useState} from "react"
function App() {
    const contactsFromJson = contacts.slice(0,5) 
    const [producers, setProducers] = useState(contactsFromJson)
    const randomProducer = () =>{
      const indice = Math.floor(Math.random()*(contacts.length-contactsFromJson.length +1)) + contactsFromJson.length
      console.log(indice)
      setProducers([
        ...producers,
        contacts[indice]
      ])
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
      <h1>IronContacts</h1>
      <button onClick={()=>randomProducer()}>Add random Contact</button>
      <button onClick={(ev)=>sortByName(ev)}>sort by name</button>
      <button onClick={()=>sortByPopularity()}>sort by populatrity</button>
      {
        producers.map((e,id)=>{
          return(
            <div key={id}>
              <img src={e.pictureUrl}/>
              <p>Name :{e.name} </p>
              <p>Popularity :{e.popularity} </p>
              <button onClick={()=>byeActor(e.id)}>bye</button>
            </div>
          )
        })
      }
    </div>
  )
}
export default App;
