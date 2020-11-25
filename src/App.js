import React, {useState}from 'react';
import producers from './contacts.json'
import Card from './Card.js'

import './App.css';

function App() {
  const [producer, setProducer] = useState(producers.slice(0,5))
  console.log(producer)
  let newie = [...producer]

const add =()=>{
   let num= Math.floor(Math.random() * (producer.length - 1)) ;
   newie.push(producer[num])
   setProducer(newie)
}

const sortName = () => {
  newie.sort((a,b) => {
    return a.name.toString().localeCompare(b.name)
  })
  setProducer(newie)
}


const sortPop=()=>{
  newie.sort((a,b)=>{
    return a.popularity-b.popularity
  })
  setProducer(newie)
}
const deleteProd = id =>{ setProducer(
  producer.filter(el => el.id !== id)
  )}

  return (
<div>
<tr>
    <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
  </tr>
<button onClick={add}> add random contact</button>
<button onClick={sortName}> Sort by name</button>
<button onClick={sortPop}> Sort by popularity</button>

  {producer.map(prd=> <Card
    key={producer.id}
    {...prd}
    deleteProd={deleteProd}
    />
  )}
</div>
  )
}

export default App;
